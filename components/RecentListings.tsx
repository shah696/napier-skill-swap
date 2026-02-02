import ServiceCard from "./ServiceCard";
import Link from "next/link";

export default function RecentListings() {
  const dummyListings = [
    {
      title: "Python Programming Tutor for 1st Years",
      category: "Tutoring",
      price: "PKR15/hr",
      author: "James M.",
      type: "Hourly" as const,
    },
    {
      title: "Review my CV for Tech Roles",
      category: "CV & Careers",
      price: "Free",
      author: "Sarah L.",
      type: "Free" as const,
    },
    {
      title: "Need help installing Linux on Laptop",
      category: "Tech Help",
      price: "Fixed PKR20",
      author: "David K.",
      type: "Fixed" as const,
    },
    {
      title: "Graphic Design for Society Poster",
      category: "Design",
      price: "Fixed PKR30",
      author: "Emily R.",
      type: "Fixed" as const,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[--secondary] mb-2">
              Recent Services
            </h2>
            <p className="text-gray-500">See what's being offered right now.</p>
          </div>
          <Link
            href="/browse"
            className="hidden sm:inline-block px-5 py-2.5 bg-white border border-gray-200 text-[--pk-slate] font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyListings.map((listing, idx) => (
            <ServiceCard key={idx} {...listing} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/browse"
            className="inline-block px-6 py-3 bg-white border border-gray-200 text-[--pk-slate] font-medium rounded-lg hover:bg-gray-50 transition-colors w-full"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
