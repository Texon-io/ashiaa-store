import { Ticket, LayoutGrid, Package, PlusCircle } from "lucide-react";
import { CategoryInfo, StatCard } from "./HelpsComponents";
import { useAllProducts } from "./useAllProducts";

function DashboardTab({ setAddProductDialogOpen, setActiveTab }) {
  const { numCategories, productsCount, categoryStats } = useAllProducts();
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Header */}
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Store Overview
        </h2>
        <p className="text-gray-500 text-sm">
          Summary of your inventory and store configurations.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
        <StatCard
          title="Total Products"
          value={productsCount} // products.length
          icon={<Package className="text-purple-600" size={24} />}
          description="Total items in your catalog"
          color="bg-purple-50"
        />

        <StatCard
          title="Categories"
          value={numCategories} // categories.length
          icon={<LayoutGrid className="text-blue-600" size={24} />}
          description="Product segments defined"
          color="bg-blue-50"
        />
      </div>

      {/* Quick Actions & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Breakdown */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-bold text-gray-800 text-lg mb-6">
            Category Distribution
          </h3>
          <div className="space-y-5">
            {/* Categories go here */}
            <CategoryInfo
              label="Bedroom"
              count={categoryStats.Bedroom}
              color="bg-fuchsia-500"
            />
            <CategoryInfo
              label="Kitchen"
              count={categoryStats.Kitchen}
              color="bg-blue-500"
            />
            <CategoryInfo
              label="Accessories"
              count={categoryStats.Accessories}
              color="bg-emerald-500"
            />
            <CategoryInfo
              label="Chairs"
              count={categoryStats.Chairs}
              color="bg-amber-500"
            />
            <CategoryInfo
              label="Seating Room"
              count={categoryStats["Sitting Room"]}
              color="bg-red-500"
            />
          </div>
        </div>

        {/* System Status / Quick Tips */}
        <div className="bg-[#7C71DF]/5 p-6 rounded-2xl border border-[#7C71DF]/20">
          <h3 className="font-bold text-[#7C71DF] text-lg mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => setAddProductDialogOpen(true)}
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-[#7C71DF] transition-all cursor-pointer group"
            >
              <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-[#7C71DF] group-hover:text-white transition-colors">
                <PlusCircle size={18} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Add New Product
              </span>
            </button>

            <button
              onClick={() => setActiveTab("promos")}
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-[#7C71DF] transition-all cursor-pointer group"
            >
              <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Ticket size={18} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Manage Coupons
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTab;
