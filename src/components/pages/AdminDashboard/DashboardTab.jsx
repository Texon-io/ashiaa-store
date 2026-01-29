import { Spotlight, LayoutGrid, Package, PlusCircle } from "lucide-react";
import { CategoryInfo, StatCard } from "./HelpsComponents";
import { useAllProducts } from "./useAllProducts";

function DashboardTab({ setAddProductDialogOpen }) {
  const {
    numCategories,
    productsCount,
    categoryStats,
    bestSellingProducts = [],
  } = useAllProducts();

  return (
    <div className="space-y-8 animate-in fade-in duration-500 bg-main-bg p-4 lg:p-6 rounded-3xl">
      {/* Welcome Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl lg:text-3xl font-bold text-main-text">
          مرحبًا بك في لوحة التحكم
        </h2>
        <p className="text-accent-dark/70 text-sm font-medium">
          نظرة عامة على أداء متجرك وإدارته
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <StatCard
          title="إجمالي المنتجات"
          value={productsCount}
          icon={<Package className="text-accent-dark" size={24} />}
          description="كل المنتجات المتاحة"
          color="bg-card-bg"
        />

        <StatCard
          title="الأقسام"
          value={numCategories}
          icon={<LayoutGrid className="text-accent-dark-2" size={24} />}
          description="عدد الأقسام"
          color="bg-main-bg-2"
        />

        <StatCard
          title="الأكثر مبيعًا"
          value={bestSellingProducts?.length || 0}
          icon={<Spotlight className="text-dark-metallic" size={24} />}
          description="المنتجات الأكثر مبيعًا"
          color="bg-accent-main-light/30"
        />
      </div>

      {/* Quick Actions & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Breakdown */}
        <div className="bg-card-bg p-6 rounded-2xl border border-accent-main/30 shadow-sm">
          <h3 className="font-bold text-main-text text-lg mb-6">
            عدد المنتجات في كل قسم
          </h3>
          <div className="space-y-5">
            <CategoryInfo
              label="دفاتر"
              count={categoryStats?.دفاتر || 0}
              color="bg-fuchsia-400"
            />
            <CategoryInfo
              label="أقلام"
              count={categoryStats?.أقلام || 0}
              color="bg-orange-400"
            />
            <CategoryInfo
              label="منظمات مكتب"
              count={categoryStats?.["منظمات مكتب"] || 0}
              color="bg-purple-400"
            />
            <CategoryInfo
              label="مجات"
              count={categoryStats?.مجات || 0}
              color="bg-red-400"
            />
            <CategoryInfo
              label="شنط"
              count={categoryStats?.شنط || 0}
              color="bg-yellow-400"
            />
            <CategoryInfo
              label="باكيدچات أو بوكسات"
              count={categoryStats?.["باكيدچات أو بوكسات"] || 0}
              color="bg-blue-400"
            />
            <CategoryInfo
              label="أخرى"
              count={categoryStats?.أخرى || 0}
              color="bg-gray-400"
            />
          </div>
        </div>

        {/* System Status / Quick Tips */}
        <div className="bg-main-bg-2 p-6 rounded-2xl border border-accent-main/50">
          <h3 className="font-bold text-accent-dark text-lg mb-4">
            إجراءات سريعة
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => setAddProductDialogOpen(true)}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-accent-main/20 hover:border-accent-dark hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="p-2 bg-card-bg text-accent-dark rounded-lg group-hover:bg-accent-dark group-hover:text-secondary-text-light transition-colors">
                <PlusCircle size={18} />
              </div>
              <span className="text-sm font-semibold text-main-text">
                إضافة منتج جديد
              </span>
            </button>
          </div>

          <div className="mt-6 p-4 bg-accent-main/10 rounded-xl border border-accent-main/20">
            <p className="text-xs text-accent-dark italic">
              تلميح: حافظ على تحديث معلومات المنتجات بانتظام لضمان الدقة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTab;
