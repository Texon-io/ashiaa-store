import { LayoutDashboard, Package, TicketPercent } from "lucide-react";

export default function NavItems({
  activeTab,
  setActiveTab,
  //   isMobile = false,
}) {
  // Array of menu items
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: Package },
  ];

  return (
    <nav className="flex flex-col gap-2">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              console.log(activeTab);
            }}
            className={`
              flex items-center cursor-pointer gap-3 w-full p-3 rounded-lg font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-[#7C71DF] text-white shadow-lg shadow-[#7C71DF]/10"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }
            `}
          >
            <Icon
              size={20}
              className={`${isActive ? "text-white" : "text-gray-400"}`}
            />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
