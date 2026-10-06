export default function Loading() {
  return (
    <div className="min-h-screen bg-softCream animate-pulse flex flex-col">
      {/* Navbar Skeleton */}
      <div className="h-20 w-full bg-softCream/80 shadow-sm flex items-center justify-between px-8">
        <div className="h-8 w-40 bg-forestGreen/20 rounded-md"></div>
        <div className="hidden md:flex space-x-6">
          <div className="h-6 w-20 bg-forestGreen/10 rounded-md"></div>
          <div className="h-6 w-20 bg-forestGreen/10 rounded-md"></div>
          <div className="h-6 w-20 bg-forestGreen/10 rounded-md"></div>
          <div className="h-10 w-32 bg-warmOrange/20 rounded-full"></div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="flex-1 container mx-auto px-8 grid md:grid-cols-2 gap-8 items-center py-20">
        <div className="space-y-6">
          <div className="h-16 md:h-20 w-3/4 bg-forestGreen/20 rounded-xl"></div>
          <div className="h-16 md:h-20 w-1/2 bg-forestGreen/20 rounded-xl"></div>
          <div className="h-4 w-full bg-forestGreen/10 rounded-md mt-8"></div>
          <div className="h-4 w-5/6 bg-forestGreen/10 rounded-md"></div>
          <div className="h-14 w-48 bg-warmOrange/30 rounded-full mt-6"></div>
        </div>
        <div className="h-[50vh] w-full bg-forestGreen/5 rounded-[3rem]"></div>
      </div>
    </div>
  );
}
