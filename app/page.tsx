import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import RecentListings from "@/components/RecentListings";

export default function Home() {
  // Mock login state - Consistent with Layout
  const isUserLoggedIn = false;

  return (
    <div className="flex flex-col min-h-screen">
      <Hero isLoggedIn={isUserLoggedIn} />
      <Categories />
      <RecentListings />
    </div>
  );
}
