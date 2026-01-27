import { useState } from "react";
import AddProductDialog from "./AddProductDialog";
import AdminSidebar from "./AdminSidebar";
import DashboardTab from "./DashboardTab";
import ProductsTab from "./ProductsTab";
import { useEffect } from "react";
import { supabase } from "../../lib/Supabase";
import Checking from "./Checking";
import { toast } from "sonner";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard | products | promos
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user && user.user_metadata?.role === "admin") {
        setIsAdmin(true);
      } else {
        toast.warning("Not authorized to access this page");
        window.location.href = "/";
      }
      setLoading(false);
    };
    checkUser();
  }, []);
  if (loading) return <Checking />;
  if (!isAdmin) return null;

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
