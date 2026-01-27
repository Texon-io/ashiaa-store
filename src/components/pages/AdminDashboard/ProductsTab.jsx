import CustomSelect from "./CustomSelect";

import { PlusCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import ProductRow from "./ProductRow";
import { useSearchStore } from "./searchProducts";
import { categoriesStore } from "./categoriesStore";
import { useAllProducts } from "./useAllProducts";
import { useMemo } from "react";

function ProductsTab({ setAddProductDialogOpen }) {
  const { searchTerm, setSearch } = useSearchStore();
  const { category, setCategory, categories } = categoriesStore();
  const { products } = useAllProducts("All");

  const displayedProducts = useMemo(() => {
    if (!products?.length) return [];

    let result = [...products];

    // 1️⃣ Category filter
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    // 2️⃣ Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(term));
    }

    return result;
  }, [products, searchTerm, category]);

  console.log("Products: ", displayedProducts);

  return (
    <div className="space-y-6">
      {/* Header: In the large screen, it's a row, in the small screen, it's a column */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Products
        </h2>
        <button
          onClick={() => setAddProductDialogOpen(true)}
          className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 bg-brand-main text-white px-4 py-2 rounded-lg hover:bg-brand-secondary2 transition-colors"
        >
          <PlusCircle size={20} /> Add Product
        </button>
      </div>

      {/* Filters & Search: Make it dynamic */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border shadow-sm">
        <div className="flex-1 space-y-2 text-left">
          <Label
            htmlFor="search"
            className="text-sm font-medium text-brand-main2"
          >
            Search
          </Label>
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              value={searchTerm}
              onChange={(e) => setSearch(e.target.value)}
              id="search"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2.5 border rounded-lg w-full outline-none focus:ring-2 ring-brand-main-trans shadow-sm text-sm"
            />
          </div>
        </div>

        {/* Category Selector: Will take the all width on small screens */}
        <div className="w-full space-y-2 md:w-auto">
          <Label
            htmlFor="category"
            className="text-sm font-medium text-brand-main2"
          >
            Category
          </Label>
          <CustomSelect
            id={`category`}
            value={category}
            onValueChange={setCategory}
            options={categories}
            placeholder="Filter by Category"
          />
        </div>
      </div>

      {/* Products Table: Adding scrollbar in horizontal */}
      <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead className="bg-gray-50 border-b">
            <tr className="divide-x text-center">
              <th className="p-4 font-semibold text-gray-600 text-sm">
                Product
              </th>
              <th className="p-4 font-semibold text-gray-600 text-sm">
                Category
              </th>
              <th className="p-4 font-semibold text-gray-600 text-sm">Price</th>
              <th className="p-4 font-semibold text-gray-600 text-sm">Stock</th>
              <th className="p-4 font-semibold text-gray-600 text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {displayedProducts?.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTab;
