import { Menu } from "lucide-react";
import NavItems from "./NavItems";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function AdminSidebar({ activeTab, setActiveTab }) {
  return (
    <>
      {/* Top Bar in mobile */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border-b sticky top-4 z-40 w-full">
        <h1 className="text-xl font-bold text-[#7C71DF]">Admin Panel</h1>

        <Sheet>
          {/* Burger Button */}
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Menu size={24} className="text-gray-600" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-72 p-6 rounded-r-2xl border-none shadow-2xl"
          >
            <SheetHeader className="text-left mb-8">
              <SheetTitle className="text-2xl font-bold text-[#7C71DF]">
                Admin Panel
              </SheetTitle>
            </SheetHeader>
            {/* Navigation Items in mobile */}
            <NavItems
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isMobile
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar in desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r p-6 space-y-8 h-svh rounded-xl shadow-lg sticky top-4 z-40">
        <h1 className="text-2xl font-bold text-[#7C71DF]">Admin Panel</h1>
        <NavItems activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>
    </>
  );
}
