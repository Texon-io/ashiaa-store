import { SearchX, ArrowLeft, Heart, Sparkles } from "lucide-react";

const NoResultsFound = ({ searchTerm, onResetSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white rounded-3xl shadow-sm max-w-2xl mx-auto my-10 border border-gray-100">
      {/* 1. أيقونة معبرة */}
      <div className="bg-gray-100 p-6 rounded-full mb-8">
        <SearchX className="w-16 h-16 text-gray-400 stroke-[1]" />
      </div>

      {/* 2. الرسالة الأساسية والتوضيح */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        مالقينـاش "أشياء" تشبه بحثك!
      </h2>
      <p className="text-lg text-gray-600 mb-6 max-w-md">
        للأسف، مفيش منتجات مطابقة لـ{" "}
        <span className="font-semibold text-black bg-red-100 px-2 py-0.5 rounded-md">
          "{searchTerm}"
        </span>{" "}
        دلوقتي. جرب تدور بكلمات تانية، أو امسح البحث وشوف مجموعتنا الجديدة.
      </p>

      {/* 3. زرار Action واضح (مسح البحث) */}
      <button
        onClick={onResetSearch}
        className="flex items-center cursor-pointer gap-2 px-8 py-3.5 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-black/20"
      >
        عرض كل المنتجات
        <ArrowLeft className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NoResultsFound;
