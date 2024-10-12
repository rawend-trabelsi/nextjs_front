'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap
export default function VerifyCode() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [correctCode, setCorrectCode] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedCode = localStorage.getItem('verificationCode');
    if (storedCode) {
      setCorrectCode(storedCode.trim());
    } else {
      router.push('/send-verification-code'); // Redirige si le code n'est pas stocké
    }
  }, [router]);

  const handleVerifyCode = () => {
    const inputCode = code.join('');
    console.log('Input Code:', inputCode); // Vérifiez ce qui est saisi
    console.log('Correct Code:', correctCode); // Vérifiez ce qui est stocké
    if (inputCode === correctCode) {
      router.push('/reset-password');
    } else {
      alert('Incorrect verification code. Please try again.');
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Autoriser uniquement un chiffre (0-9) ou une valeur vide
    if (/^\d$/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      // Se concentrer sur le champ suivant si un chiffre est saisi
      if (value !== '' && index < 5) {
        document.getElementById(`input-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Verify Your Code</h1>
        <div className="flex justify-center mb-4">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 mx-1 text-center text-2xl border border-gray-300 rounded-lg"
              autoComplete="off"
            />
          ))}
        </div>
        <button
          type="button"
          onClick={handleVerifyCode}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Verify Code
        </button>
      </div>
    </div>
  );
}
