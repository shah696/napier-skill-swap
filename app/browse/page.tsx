"use client";

import { useState } from "react";
import { Search, Filter, Star } from "lucide-react";
import Link from "next/link";

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Tutoring",
    "CV & Careers",
    "Tech Help",
    "Design",
    "Other",
  ];

  const services = [
    {
      id: 1,
      title: "Python Tutoring for Beginners",
      author: "Alex Thompson",
      category: "Tutoring",
      price: "£15/hr",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Professional CV Review",
      author: "Sarah Jenkins",
      category: "CV & Careers",
      price: "£20",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Graphic Design for Projects",
      author: "Michael Chen",
      category: "Design",
      price: "£25/hr",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Java Programming Help",
      author: "Emily Davis",
      category: "Tutoring",

      price: "£18/hr",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "Laptop Repair Service",
      author: "David Wilson",
      category: "Tech Help",

      price: "£30",
      image:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      title: "Logo Design",
      author: "Jessica Lee",
      category: "Design",

      price: "£40",
      image:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Browse Services</h1>

        {/* Search and Filter */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-800 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for services..."
                className="w-full pl-10 pr-4 py-2 bg-black border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder:text-gray-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? "bg-white text-black"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Link
              href={`/service/${service.id}`}
              key={service.id}
              className="group"
            >
              <div className="bg-gray-900 rounded-xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-md hover:border-gray-700 transition-all h-full flex flex-col">
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-white shadow-sm border border-gray-800">
                    {service.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-white group-hover:text-gray-300 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    by {service.author}
                  </p>

                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-800">
                    <div className="flex items-center text-amber-500">
                      <span className="ml-1 text-sm font-medium"></span>
                      <span className="ml-1 text-xs text-gray-500"></span>
                    </div>
                    <span className="font-bold text-white">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-500">
              No services found matching your criteria.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
