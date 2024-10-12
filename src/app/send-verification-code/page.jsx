// src/app/send-verification-code/page.jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer Bootstrap
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SendVerificationCode() {
  const [email, setEmail] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'danger'
  const router = useRouter();

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Génère un code à 6 chiffres
  };

  const handleSendCode = () => {
    if (!email) {
      setAlertMessage('Please enter an email address.');
      setAlertType('danger');
      setAlertVisible(true);
      return;
    }

    // Simuler l'envoi du code par email en stockant le code dans le localStorage
    const code = generateCode();
    localStorage.setItem('verificationCode', code); // Sauvegarde du code
    localStorage.setItem('email', email); // Sauvegarde de l'email pour plus tard

    setAlertMessage(`A verification code has been sent to ${email}.`);
    setAlertType('success');
    setAlertVisible(true);

    // Redirige vers la page de vérification du code
    router.push('/verify-code');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {alertVisible && (
          <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
            {alertMessage}
            <button type="button" className="close" onClick={() => setAlertVisible(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <h1 className="text-3xl font-semibold text-center mb-6">Send Verification Code</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control" // Utilisez les classes Bootstrap
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            onClick={handleSendCode}
            className="btn btn-primary w-full" // Utilisez les classes Bootstrap pour le bouton
          >
            Send Verification Code
          </button>
        </form>
      </div>
    </div>
  );
}
