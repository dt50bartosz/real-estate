"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function NavLink() {
  const [activeLink, setActiveLink] = useState(null); // Track the active link

  const handleClick = (index) => {
    setActiveLink(index); // Set the clicked link as active
  };

  return (
    <ul className="flex gap-6 text-lg font-medium">
      <li
        className={`cursor-pointer transition-colors ${activeLink === 0 ? 'text-[var(--color-dark-green)]' : 'text-[var(--color-accent)]'}`}
        onClick={() => handleClick(0)}
      >
        <Link href="/" className="hover:text-[var(--color-dark-green)]">Strona główna</Link>
      </li>
      <li
        className={`cursor-pointer transition-colors ${activeLink === 1 ? 'text-[var(--color-dark-green)]' : 'text-[var(--color-accent)]'}`}
        onClick={() => handleClick(1)}
      >
        <Link href="/about" className="hover:text-[var(--color-dark-green)]">O mnie</Link>
      </li>
      <li
        className={`cursor-pointer transition-colors ${activeLink === 2 ? 'text-[var(--color-dark-green)]' : 'text-[var(--color-accent)]'}`}
        onClick={() => handleClick(2)}
      >
        <Link href="/oferta" className="hover:text-[var(--color-dark-green)]">Oferta</Link>
      </li>
      <li
        className={`cursor-pointer transition-colors ${activeLink === 3 ? 'text-[var(--color-dark-green)]' : 'text-[var(--color-accent)]'}`}
        onClick={() => handleClick(3)}
      >
        <Link href="/contact" className="hover:text-[var(--color-dark-green)]">Kontakt</Link>
      </li>
    </ul>
  );
}
