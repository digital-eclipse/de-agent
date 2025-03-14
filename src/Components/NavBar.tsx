'use client';

import { useState, useEffect, useRef } from 'react'; // Import useRef

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // Close the menu
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className=" bg-red-500 py-5 flex items-center justify-between w-full px-6">
      <div className="flex items-center">
        {/* Logo Link */}
        {/* <Link
          href="/"
          className="flex flex-row leading-none text-3xl items-center cursor-pointer transform hover:scale-110 duration-300"
        >
          <Logo className="w-9 h-9 mb-1" />
          <p className="ml-2">DIGITAL ECLIPSE</p>
        </Link> */}
      </div>
    </nav>
  );
}