"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  User,
  MessageSquare,
  LogOut,
  PlusCircle,
  Image,
} from "lucide-react";

interface NavbarProps {
  isLoggedIn?: boolean;
}

export default function Navbar({ isLoggedIn = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-[--primary] tracking-tight"
            >
              {/* <img
                src="https://www.napier.ac.uk/-/media/images/logos/harrietenu_logo_866x245.ashx?h=245&w=866&hash=6B7A69210835CD7430236569E85DF3CA"
                alt="as"
                width={200}
                height={200}
              /> */}
              Napier SkillSwap
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[--secondary] hover:text-[--primary] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/browse"
              className="text-[--secondary] hover:text-[--primary] font-medium transition-colors"
            >
              Browse Services
            </Link>

            {!isLoggedIn ? (
              <>
                <Link
                  href="/safety"
                  className="text-[--secondary] hover:text-[--primary] font-medium transition-colors"
                >
                  Safety & Guidelines
                </Link>
                <div className="flex items-center space-x-4 ml-4">
                  <Link
                    href="/login"
                    className="text-[--secondary] hover:text-[--primary] font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 bg-[--primary] text-black rounded-md font-medium hover:bg-[--primary-hover] transition-colors shadow-sm"
                  >
                    Register
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/post-service"
                  className="flex items-center space-x-1 text-[--accent] hover:text-[--primary] font-medium transition-colors"
                >
                  <PlusCircle size={18} />
                  <span>Post a Service</span>
                </Link>
                <Link
                  href="/messages"
                  className="relative text-[--secondary] hover:text-[--primary] transition-colors"
                >
                  <MessageSquare size={22} />
                  <span className="absolute -top-1 -right-1 bg-[--primary] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    2
                  </span>
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-[--secondary] hover:text-[--primary] transition-colors focus:outline-none">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
                      <User size={18} className="text-gray-500" />
                    </div>
                  </button>
                  {/* Simplified Dropdown for now */}
                </div>
                <button className="text-[--secondary] hover:text-[--primary] transition-colors">
                  <LogOut size={20} />
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[--pk-slate] hover:text-[--pk-red] focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-[--pk-slate] hover:text-[--pk-red] hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/browse"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-[--pk-slate] hover:text-[--pk-red] hover:bg-gray-50 rounded-md"
            >
              Browse Services
            </Link>

            {!isLoggedIn ? (
              <>
                <Link
                  href="/safety"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-[--pk-slate] hover:text-[--pk-red] hover:bg-gray-50 rounded-md"
                >
                  Safety & Guidelines
                </Link>
                <div className="border-t border-gray-100 my-2 pt-2 space-y-2">
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 text-base font-medium text-[--pk-slate] bg-gray-50 hover:bg-gray-100 rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-[--pk-red] hover:bg-[--pk-red-hover] rounded-md shadow-sm"
                  >
                    Register
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/post-service"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-[--pk-teal] hover:bg-teal-50 rounded-md"
                >
                  Post a Service
                </Link>
                <Link
                  href="/messages"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-[--pk-slate] hover:bg-gray-50 rounded-md"
                >
                  Messages (2 New)
                </Link>
                <Link
                  href="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-[--pk-slate] hover:bg-gray-50 rounded-md"
                >
                  My Profile
                </Link>
                <button className="w-full text-left px-3 py-3 text-base font-medium text-[--pk-slate] hover:bg-gray-50 rounded-md flex items-center space-x-2">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
