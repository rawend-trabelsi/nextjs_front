// src/app/reset-password/page.jsx
'use client';  // Important: ceci marque le composant comme un Client Component
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // État pour le mot de passe de confirmation
  const router = useRouter();

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      alert('Please enter a new password and confirm it.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    // Simule la mise à jour du mot de passe
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      user.password = newPassword; // Met à jour le mot de passe
      localStorage.setItem('user', JSON.stringify(user));
      alert('Your password has been reset successfully!');
      router.push('/signin'); // Redirige vers la page de connexion
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Reset Password</h1>
        <div className="mb-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm New Password" // Champ de confirmation du mot de passe
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={handleResetPassword}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
