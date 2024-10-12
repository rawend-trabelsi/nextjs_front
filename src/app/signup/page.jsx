// src/app/signup/page.jsx
"use client";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(null);
  const router = useRouter();

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Simule l'enregistrement de l'utilisateur
    const user = { firstName, lastName, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    
    // Affiche un message de succès et redirige
    setSignupSuccess(true);
    alert('Your signup request has been sent.');

    // Redirige vers la page de confirmation
    router.push('/Confirmation'); // Vérifiez que le chemin est correct
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={handleSignUp}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
