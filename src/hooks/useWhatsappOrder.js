import { useMemo } from "react";
import {toast} from "sonner";
import {useCart} from "./useCart.jsx";

export function useWhatsappOrder(items = [], PHONE) {
    const {clearCart} = useCart();

    if (items.length === 0 || !PHONE) {
        return {
            message: null,
            link: null,
            sendOrder: () => {} // function فارغة لتجنب الايرور
        };
    }

    const message =
        items
            .map(item => `${item.name} × ${item.quantity}`)
            .join("\n");


    const link =
        `https://wa.me/${PHONE}?text=${encodeURIComponent(
            `مرحبًا، أريد طلب المنتجات التالية:\n${message}`
        )}`;

    const sendOrder = () => {
        if (!link) return;
        window.open(link, "_blank", "width=500,height=500");
        toast?.success("تم إرسال الطلب بنجاح!");
        setTimeout(() => clearCart(), 1500);
    };

    return { message, link, sendOrder };
}
