import { useMemo } from "react";
import { toast } from "sonner";
import { useCart } from "./useCart.jsx";
import ColorNamer from "color-namer";

// قاموس لترجمة الأسماء الأساسية الناتجة من المكتبة
const COLOR_TRANSLATIONS = {
  red: "أحمر",
  blue: "أزرق",
  green: "أخضر",
  black: "أسود",
  white: "أبيض",
  yellow: "أصفر",
  orange: "برتقالي",
  purple: "بنفسجي",
  pink: "وردي",
  brown: "بني",
  gray: "رمادي",
  cyan: "سماوي",
  silver: "فضي",
  gold: "ذهبي",
};

const getArabicColorName = (hex) => {
  if (!hex) return "";

  try {
    const cleanHex = hex.startsWith("#") ? hex : `#${hex}`;

    const result = ColorNamer(cleanHex, { pick: ["ntc"] });
    const colorMatch = result.ntc[0];
    const englishName = colorMatch.name.toLowerCase();

    const genericTranslations = {
      brown: "بني",
      blue: "أزرق",
      red: "أحمر",
      green: "أخضر",
      yellow: "أصفر",
      grey: "رمادي",
      gray: "رمادي",
      white: "أبيض",
      black: "أسود",
      pink: "وردي",
      purple: "بنفسجي",
      orange: "برتقالي",
      gold: "ذهبي",
      silver: "فضي",
      cyan: "سماوي",
    };

    const foundKeyword = Object.keys(genericTranslations).find((keyword) =>
      englishName.includes(keyword),
    );

    if (foundKeyword) {
      return genericTranslations[foundKeyword];
    }

    const lightGrays = [
      "gallery",
      "mercury",
      "silver",
      "alabaster",
      "concrete",
    ];
    if (lightGrays.some((name) => englishName.includes(name))) {
      return "رمادي";
    }

    if (englishName && englishName !== "invalid color") {
      return englishName;
    }

    return hex;
  } catch (error) {
    console.error(error);
    return hex;
  }
};

export function useWhatsappOrder(items = [], PHONE) {
  const { clearCart } = useCart();

  if (items.length === 0 || !PHONE) {
    return {
      message: null,
      link: null,
      sendOrder: () => {}, // function فارغة لتجنب الايرور
    };
  }

  const hasMultipleColors = items.some(
    (item) => item.colors && item.colors.length > 1,
  );

  const message = items
    .map((item) => {
      const colorText =
        item.colors?.length > 1
          ? `\n   [الألوان المتاحة: ${item.colors.map((c) => getArabicColorName(c)).join("، ")}]`
          : item.colors?.length === 1
            ? ` [اللون: ${getArabicColorName(item.colors[0])}]`
            : "";

      return `• ${item.name}${colorText} × ${item.quantity}`;
    })
    .join("\n");

  const introHeader = hasMultipleColors
    ? "مرحبًا، أريد طلب المنتجات التالية (حدد الألوان المطلوبة قبل الإرسال):"
    : "مرحبًا، أريد طلب المنتجات التالية:";

  const fullText = `${introHeader}\n\n${message}`;
  const link = `https://wa.me/${PHONE}?text=${encodeURIComponent(fullText)}`;

  const sendOrder = () => {
    if (!link) return;
    window.open(link, "_blank", "width=800,height=800");
    toast?.success("تم إرسال الطلب بنجاح!");
    setTimeout(() => clearCart(), 1500);
  };

  return { message, link, sendOrder };
}
