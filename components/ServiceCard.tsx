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
    <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full group">
      <div className="p-4 sm:p-5 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/50 px-2 py-1 rounded-md border border-teal-900/50">
            {category}
          </span>
          <span
            className={`text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md border ${
              type === "Free"
                ? "bg-green-950/50 text-green-400 border-green-900/50"
                : type === "Hourly"
                  ? "bg-blue-950/50 text-blue-400 border-blue-900/50"
                  : "bg-orange-950/50 text-orange-400 border-orange-900/50"
            }`}
          >
            {price}
          </span>
        </div>
        <h3 className="font-bold text-white text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-gray-300 cursor-pointer transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-4">
          Posted by {author}
        </p>
      </div>

      <div className="p-3 sm:p-4 border-t border-gray-800 bg-gray-900/50 flex justify-between items-center text-gray-400 group-hover:text-white transition-colors">
        <button className="text-xs sm:text-sm font-medium hover:text-white transition-colors">
          View Details
        </button>
        <div className="flex items-center text-[10px] sm:text-xs text-gray-500">
          <Clock size={12} className="mr-1 sm:w-[14px] sm:h-[14px]" />
          <span>2d ago</span>
        </div>
      </div>
    </div>
  );
}
