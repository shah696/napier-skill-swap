"use client";

import Link from "next/link";
import logo from "./assets/logo.jpeg";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MessageSquare, LogOut, PlusCircle } from "lucide-react";

interface NavbarProps {
  isLoggedIn?: boolean;
}

export default function Navbar({ isLoggedIn = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItemClass = (path: string) =>
    `font-medium text-sm transition-colors duration-200 ${
      pathname === path
        ? "text-white border-b-2 border-white pb-1"
        : "text-gray-300 hover:text-gray-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-15">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={logo.src}
              alt="Edinburgh Napier University"
              className="h-15 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={navItemClass("/")}>
              Home
            </Link>

            <Link href="/browse" className={navItemClass("/browse")}>
              Browse Services
            </Link>

            {!isLoggedIn ? (
              <>
                <Link href="/safety" className={navItemClass("/safety")}>
                  Safety & Guidelines
                </Link>

                <div className="flex items-center space-x-4 ml-4">
                  <Link
                    href="/login"
                    className="text-sm text-white hover:text-gray-400 font-medium transition-colors"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="px-4 py-1 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-all"
                  >
                    Register
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/post-service"
                  className="flex items-center space-x-1 text-gray-300 hover:text-white font-medium transition-colors"
                >
                  <PlusCircle size={18} />
                  <span>Post a Service</span>
                </Link>

                <Link
                  href="/messages"
                  className="relative text-gray-300 hover:text-white transition-colors"
                >
                  <MessageSquare size={22} />
                  <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    2
                  </span>
                </Link>

                <button className="text-gray-300 hover:text-white transition-colors">
                  <LogOut size={20} />
                </button>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-gray-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black border-t border-gray-800 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Browse Services", path: "/browse" },
              { name: "Safety & Guidelines", path: "/safety" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md font-medium ${
                  pathname === item.path
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
