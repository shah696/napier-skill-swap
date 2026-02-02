import { Clock, Tag } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  category: string;
  price: string;
  author: string;
  type: "Fixed" | "Hourly" | "Free";
}

export default function ServiceCard({
  title,
  category,
  price,
  author,
  type,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[--accent] bg-teal-50 px-2 py-1 rounded-md">
            {category}
          </span>
          <span
            className={`text-xs font-bold px-2 py-1 rounded-md ${
              type === "Free"
                ? "bg-green-100 text-green-700"
                : type === "Hourly"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-orange-100 text-orange-700"
            }`}
          >
            {price}
          </span>
        </div>
        <h3 className="font-bold text-[--secondary] text-lg mb-2 line-clamp-2 hover:text-[--primary] cursor-pointer">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mb-4">Posted by {author}</p>
      </div>

      <div className="p-4 border-t border-gray-50 bg-gray-50/50 flex justify-between items-center">
        <button className="text-sm font-medium text-[--secondary] hover:text-[--primary] transition-colors">
          View Details
        </button>
        <div className="flex items-center text-xs text-gray-400">
          <Clock size={14} className="mr-1" />
          <span>2d ago</span>
        </div>
      </div>
    </div>
  );
}
