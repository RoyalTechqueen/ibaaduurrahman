"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          {/* Logo */}
          <Image
            src="/logo.jpg" // replace with your logo path in public folder
            alt="Ibaadur Rahman Logo"
            width={50}   // adjust size as needed
            height={50}
            className="object-contain"
          />
          {/* Academy Name */}
          <span className="text-xl font-bold text-green-700">
            IbaadurRahman Online Qur&apos;an Academy
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-yellow-200 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-200 transition">About</Link>
          <Link href="/classes" className="hover:text-yellow-200 transition">Classes</Link>
          <Link href="/pricing" className="hover:text-yellow-200 transition">Pricing</Link>
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-green-700 text-white flex flex-col items-center space-y-4 py-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/classes" onClick={() => setMenuOpen(false)}>Classes</Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          
        </nav>
      )}
    </header>
  );
}
