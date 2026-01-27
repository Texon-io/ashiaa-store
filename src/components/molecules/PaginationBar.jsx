import Button from "../atoms/Button.jsx";

function PaginationBar({
  products,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}) {
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((p) => Math.min(p + 1, totalPages));
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  const handlePrev = () => {
    setCurrentPage((p) => Math.min(p - 1, totalPages));
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  return (
    <div className="flex justify-center gap-2 mt-5">
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        variant="pagination"
        size="sm"
      >
        السابق
      </Button>

      <span className="px-4 py-2">
        صفحة {currentPage} من {totalPages}
      </span>

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        variant="pagination"
        size="sm"
      >
        التالي
      </Button>
    </div>
  );
}

export default PaginationBar;
