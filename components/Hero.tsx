"use client";

import Link from "next/link";
import { Search, ArrowRight, PlusCircle } from "lucide-react";

interface HeroProps {
  isLoggedIn?: boolean;
}

export default function Hero({ isLoggedIn = false }: HeroProps) {
  return (
    <div className="bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[--primary] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-[--accent] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {!isLoggedIn ? (
            /* Logged Out View */
            <>
              <div className="inline-block mb-4 px-4 py-1.5 bg-red-50 text-[--primary] rounded-full text-sm font-semibold tracking-wide border border-red-100">
                Exclusive for Napier Students
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--secondary] mb-6 tracking-tight leading-tight">
                Find Help. Offer Skills. <br />
                <span className="text-[--primary]">Only for Napier.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
                Connect with fellow students for tutoring, CV reviews, tech
                support, and more. A safe, trusted community built for your
                university journey.
              </p>
              <div className="flex flex-row items-center justify-center gap-4 w-full">
                <Link
                  href="/browse"
                  className="flex-1 sm:flex-none min-w-[180px] px-8 py-4 bg-[--primary] rounded-lg font-semibold text-lg hover:bg-[--primary-hover] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Search size={20} />
                  <span>Browse Services</span>
                </Link>

                <Link
                  href="/register"
                  className="flex-1 sm:flex-none min-w-[180px] px-8 py-4 bg-white text-[--secondary] border border-gray-200 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center"
                >
                  Join Community
                </Link>
              </div>
            </>
          ) : (
            /* Logged In View */
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-[--secondary] mb-8 tracking-tight">
                Welcome back! What are you looking for?
              </h1>

              <div className="relative max-w-2xl mx-auto mb-8 shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-[--pk-red] focus:border-transparent outline-none transition-all"
                  placeholder="Search for services (e.g. Python tutoring, CV help...)"
                />
                <button className="absolute inset-y-2 right-2 px-6 bg-[--pk-slate] text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Search
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/browse"
                  className="w-full sm:w-auto px-6 py-3 bg-[--background-soft] text-[--secondary] border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Browse All Services
                </Link>
                <Link
                  href="/post-service"
                  className="w-full sm:w-auto px-6 py-3 bg-[--pk-teal] text-white rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-sm flex items-center justify-center space-x-2"
                >
                  <PlusCircle size={18} />
                  <span>Post a Service</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
