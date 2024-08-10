
import { User } from "@/models/User";
import mongoose from "mongoose";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URL);

  const body = await req.json();
  const email = body.email;

  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
  }


  const token = crypto.randomBytes(32).toString('hex');
  const expiration = Date.now() + 3600000; // 1 hour 

  
  user.resetToken = token;
  user.resetTokenExpiration = expiration;
  await user.save();

  
  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;

  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  try {
    await transporter.sendMail({
      to: user.email,
      from: process.env.EMAIL_USER, 
      subject: 'Password Reset',
      html: `
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
      `,
    });

    
    console.log(`Password reset email successfully sent to ${user.email}`);

    return new Response(JSON.stringify({ message: "Password reset email sent" }), { status: 200 });
  } catch (error) {
    
    console.error("Error sending email:", error.message);
    return new Response(JSON.stringify({ message: "Error sending email" }), { status: 500 });
  }
}
