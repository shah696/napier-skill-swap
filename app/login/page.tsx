"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login with:", email, password);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-10 rounded-2xl shadow-sm border border-gray-800">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 bg-black border border-gray-800 placeholder-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent sm:text-sm transition-all"
                  placeholder="University Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 bg-black border border-gray-800 placeholder-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent sm:text-sm transition-all"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-white focus:ring-white border-gray-800 rounded bg-black"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-400"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-gray-400 hover:text-white transition-colors"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all shadow-md"
            >
              Sign in
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-white hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
