import { Delete } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { toast } from "sonner";

function ClearCartBtn() {
  const { clearCart } = useCart();
  return (
    <button
      onClick={() => {
        toast.error("هل تريد حذف كل المنتجات؟", {
          cancel: {
            label: "نعم",
            onClick: () => clearCart(),
          },
        });
      }}
      className=" font-medium cursor-pointer flex justify-end items-center gap-3 p-2"
    >
      <Delete color="#f33f3f" strokeWidth={3} size={20} /> مسح الكل
    </button>
  );
}

export default ClearCartBtn;
