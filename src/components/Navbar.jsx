import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-white px-6 py-5 z-50 flex justify-between items-center">
        <div className="text-2xl font-bold pl-10">Rackaaf</div>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col justify-between w-6 h-5"
        >
          <span className="block w-full h-0.5 bg-white"></span>
          <span className="block w-full h-0.5 bg-white"></span>
          <span className="block w-full h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Overlay with Slide + Fade */}
      <div
        className={`fixed inset-0 bg-[#FAFBF9] text-black z-[9999] transition-all duration-500 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }
        `}
      >
        {/* Logo di overlay */}
        <div className="absolute top-8 left-8 pl-10 text-2xl text-blue-600 font-bold">
          Rackaaf
        </div>

        {/* Close Button di overlay */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 text-2xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Konten */}
        <div className="flex justify-between h-full">
          {/* Menu Kiri */}
          <div className="flex flex-col justify-start mt-28 ml-20 space-y-6 text-2xl font-medium">
            <a
              onClick={() => setMenuOpen(false)}
              href="#"
              className="text-blue-500"
            >
              Home
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#"
              className="hover:text-blue-500"
            >
              About Me
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#"
              className="hover:text-blue-500"
            >
              Project
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#"
              className="hover:text-blue-500"
            >
              Contact
            </a>
          </div>

          {/* Kontak Kanan */}
          <div className="flex flex-row items-start mt-28 mr-20">
            {/* Garis Vertikal */}
            <div className="border-l border-gray-300 h-100 mr-8"></div>

            {/* Konten Kontak */}
            <div className="flex flex-col justify-start items-end pl-12">
              <p className="text-blue-500 text-sm mb-1">
                Want to Start a Project ?
              </p>
              <h2 className="text-3xl font-bold mb-2">Let’s Talk</h2>
              <p className="text-blue-500 text-sm mb-4">Get In Touch</p>
              <div className="text-base leading-6 text-right space-y-1">
                <p>rackaaf@working.com</p>
                <p>+62 8123 456 789</p>
                <p>Bandung, Jawa Barat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
