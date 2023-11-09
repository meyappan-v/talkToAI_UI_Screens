// "use client"
// import Link from "next/link";

// function Login() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
//         <form>
//           <div className="mb-4">
//             <input
//               type="email"
//               id="email"
//               className="formInput"
//               placeholder="Enter your email"
              
//               required
//               tabIndex="1"
//             />
//           </div>
//           <div className="mb-4 relative">
//             <input
//               id="password"
//               className="formInput"
//               placeholder="Enter your password"
              
//               required
//               tabIndex="2"
//             />

//             <div
//               type="button"
//               className="absolute top-[10px] right-[3px]"
//             >
//             </div>
//           </div>
//           <button type="submit" className="submitButton" tabIndex="3">
//             Login
//           </button>
//           <div
//             className="mt-2 cursor-pointer hover:underline underline-offset-4 text-center"
//             tabIndex="4"
//           >
//             Forgot password?
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use useRouter for Next.js routing
import {usePasswordToggle} from '@/components/usePasswordToggle'; // Import the hook correctly
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, togglePasswordVisibility] = usePasswordToggle(); // Assuming you have the `usePasswordToggle` hook

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
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              tabIndex="1"
            />
          </div>
          <button type="submit" className="submitButton !mt-2" tabIndex="3">
            Login
          </button>
          <div
            onClick={() => {
              router.push('/signup'); // Use router for navigation
            }}
            className="mt-2 cursor-pointer hover:underline underline-offset-4 text-center"
            tabIndex="4"
          >
            Not a user? Sign up now
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
