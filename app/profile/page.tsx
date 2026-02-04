"use client";

import { User, MapPin, Calendar, Mail, Edit } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const user = {
    name: "Jamie Anderson",
    role: "Computer Science Student",
    location: "Merchiston Campus",
    joined: "September 2023",
    email: "40012345@live.napier.ac.uk",
    about:
      "Second year Computer Science student passionate about web development and AI. I offer tutoring in Python and Java, and I'm always looking for help with graphic design projects.",
  };

  const myListings = [
    {
      id: 1,
      title: "Python Tutoring for Beginners",
      category: "Tutoring",
      price: "£15/hr",
      status: "Active",
    },
    {
      id: 2,
      title: "Java Programming Help",
      category: "Tutoring",
      price: "£18/hr",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-gray-900 rounded-xl shadow-sm border border-gray-800 overflow-hidden mb-8">
          <div className="h-32 bg-gray-800"></div>
          <div className="px-8 pb-8">
            <div className="relative flex justify-between items-end -mt-12 mb-6">
              <div className="w-24 h-24 rounded-full border-4 border-gray-900 bg-gray-800 flex items-center justify-center overflow-hidden">
                <User size={48} className="text-gray-500" />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-700 rounded-lg text-sm font-medium text-white hover:bg-gray-800 transition-colors bg-gray-900">
                <Edit size={16} />
                <span>Edit Profile</span>
              </button>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400 font-medium">{user.role}</p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {user.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  Joined {user.joined}
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-1" />
                  {user.email}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <h3 className="text-lg font-bold text-white mb-2">About Me</h3>
                <p className="text-gray-400 leading-relaxed">{user.about}</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Listings */}
        <div className="bg-gray-900 rounded-xl shadow-sm border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">My Active Listings</h3>
            <Link
              href="/post-service"
              className="text-sm font-medium text-white hover:underline"
            >
              + Post New Service
            </Link>
          </div>
          <div className="divide-y divide-gray-800">
            {myListings.length > 0 ? (
              myListings.map((listing) => (
                <div
                  key={listing.id}
                  className="p-6 flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      {listing.title}
                    </h4>
                    <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded inline-block mt-1">
                      {listing.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="font-bold text-white">
                      {listing.price}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-950/50 text-green-400 border border-green-900/50">
                      {listing.status}
                    </span>
                    <button className="text-gray-500 hover:text-white transition-colors">
                      <Edit size={18} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                You haven't posted any services yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
