"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'; 

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false); 
  const router = useRouter(); 

  async function handleFormSubmit(ev) {
    ev.preventDefault();

    setError(false);
    setSuccess(false);

    const response = await fetch('/api/forget-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 404) {
      setError(true);
    } else if (response.ok) {
      setSuccess(true);
      setTimeout(() => {
        router.push('/login'); 
      }, 2000); 
    } else {
      setError(true);
    }
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Forgot Password
      </h1>
      {success && (
        <div className="my-4 text-center text-green-500">
          Password reset email sent! Redirecting to login...
        </div>
      )}
      {error && (
        <div className="my-4 text-center text-red-500">
          An error has occurred.<br />
          Please try again later
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input 
          type="email" 
          placeholder="email" 
          value={email}
          onChange={ev => setEmail(ev.target.value)} 
        />
        <button type="submit">
          Send New Password
        </button>
      </form>
    </section>
  );
}
