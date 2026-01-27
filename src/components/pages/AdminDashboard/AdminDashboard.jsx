import { useState } from "react";
import AddProductDialog from "./AddProductDialog";
import AdminSidebar from "./AdminSidebar";
import DashboardTab from "./DashboardTab";
import ProductsTab from "./ProductsTab";
import { toast } from "sonner";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard | products | promos
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAdmin(true);
      toast.success("تم تسجيل الدخول بنجاح");
    } else {
      toast.error("كلمة المرور غير صحيحة");
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
        >
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            تسجيل دخول الأدمن
          </h1>
          <input
            type="password"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors font-bold"
          >
            دخول
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-4 bg-gray-100 p-4">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {addProductDialogOpen && (
        <AddProductDialog
          open={addProductDialogOpen}
          setOpen={setAddProductDialogOpen}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 w-full rounded-xl shadow-lg border mx-auto bg-gray-200 mt-4 lg:mt-0">
        {activeTab === "dashboard" && (
          <DashboardTab
            setAddProductDialogOpen={setAddProductDialogOpen}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === "products" && (
          <ProductsTab setAddProductDialogOpen={setAddProductDialogOpen} />
        )}
      </main>
    </div>
  );
}
