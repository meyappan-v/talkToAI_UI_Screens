

"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use useRouter for Next.js routing
import {usePasswordToggle} from '@/components/usePasswordToggle'; 

function sendOTP() {
  const [email, setEmail] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/sendOTP');
    // Add your login logic here
    // For example, you can send a request to your authentication server
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="formInput"
              placeholder="Enter OTP"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              tabIndex="1"
            />
          </div>
          <button type="submit" className="submitButton !mt-2" tabIndex="3">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default sendOTP;
