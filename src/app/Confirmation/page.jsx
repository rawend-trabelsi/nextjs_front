// src/app/Confirmation/page.jsx
"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import requestImage from '../images/request.png'; // Assurez-vous que le chemin de l'image est correct
import { useRouter } from 'next/navigation';

export default function Confirmation() {
  const router = useRouter();

  useEffect(() => {
    // Redirige après 3 secondes
    const timer = setTimeout(() => {
      router.push('/signin'); // Redirection vers la page de connexion
    }, 3000); // 3000 ms = 3 secondes

    return () => clearTimeout(timer); // Nettoie le timer si le composant est démonté
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Your request is sent to the admin.</h1>
      <Image src={requestImage} alt="Request sent" width={300} height={200} />
      <p className="mt-4">Please wait...</p>
    </div>
  );
}
