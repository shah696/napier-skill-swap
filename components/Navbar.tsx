"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User, MessageSquare, LogOut, PlusCircle } from "lucide-react";

interface NavbarProps {
  isLoggedIn?: boolean;
}

export default function Navbar({ isLoggedIn = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItemClass = (path: string) =>
    `relative font-medium transition-colors
   ${pathname === path ? "text-black font-extrabold " : "text-gray-600 hover:text-black"}
 
   ${pathname === path ? "after:scale-x-100" : ""}`;

  //    after:absolute after:left-0 after:-bottom-1
  //  after:h-[2px] after:w-full
  //  after:bg-black
  //  after:origin-left after:scale-x-0
  //  after:transition-transform after:duration-300
  //  hover:after:scale-x-100

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://www.napier.ac.uk/theme/assets/img/design/small-Logo.jpg"
              // src="./assets/logo.png"
              alt="Edinburgh Napier University"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
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

                <button className="text-[--secondary] hover:text-[--primary] transition-colors">
                  <LogOut size={20} />
                </button>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-[--pk-slate] hover:text-[--pk-red]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-t border-gray-100 shadow-lg">
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
                    ? "bg-gray-100 text-[--primary]"
                    : "text-[--pk-slate] hover:bg-gray-50"
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
