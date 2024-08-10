import { User } from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URL);

  const { token, newPassword } = await req.json();

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiration: { $gt: Date.now() },
  });

  if (!user) {
    return new Response(
      JSON.stringify({ message: "Invalid or expired token" }),
      { status: 400 }
    );
  }


  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);
  user.resetToken = undefined;
  user.resetTokenExpiration = undefined;
  await user.save();

  return new Response(
    JSON.stringify({ message: "Password updated successfully" }),
    { status: 200 }
  );
}
