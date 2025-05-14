'use client'; // Needed if you're using Next.js 13+ with App Router

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SideBar() {
  const router = useRouter();

  const logout = async () => {
    try {
      await fetch( `${process.env.NEXT_PUBLIC_HTML}}/user/logout`, {
        method: 'POST',
        credentials: 'include', // Important to send cookies
      });

      router.push('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  
  return (
    <div className="max-w-[15rem] h-[40vh] p-6 bg-gray-100 rounded-2xl shadow-lg">
      <ul className="space-y-6 text-lg font-semibold">
        <li>
          <Link href="/add-property" className="block hover:text-blue-600 transition">
            Dodaj Nową Nieruchomość
          </Link>
        </li>
        <li>
          <Link href="/properties-list" className="block hover:text-blue-600 transition">
            Lista Nieruchomości
          </Link>
        </li>
        <li>
          <Link href="/change-password" className="block hover:text-blue-600 transition">
            Zmień Hasło
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="block hover:text-blue-600 transition">
            DashBoard
          </Link>
        </li>
        <li>
          <button
            onClick={logout}
            className="w-full text-left text-red-600 hover:text-red-800 transition"
          >
            Wyloguj się
          </button>
        </li>
      </ul>
    </div>
  );
}
