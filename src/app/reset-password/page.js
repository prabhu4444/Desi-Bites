// app/reset-password/page.js
"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation'; // Use useRouter and useSearchParams for query parameters

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token'); // Get the token from query parameters

  async function handleFormSubmit(ev) {
    ev.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const response = await fetch('/api/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, newPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      setSuccess('Password reset successfully! Redirecting to login...');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } else {
      setError('Failed to reset password. Please try again.');
    }
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Reset Password</h1>
      {success && (
        <div className="my-4 text-center text-green-500">{success}</div>
      )}
      {error && (
        <div className="my-4 text-center text-red-500">{error}</div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={ev => setNewPassword(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={ev => setConfirmPassword(ev.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </section>
  );
}
