import Button from "../atoms/Button.jsx";

function PaginationBar({
  products,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}) {
  return (
    <div className="flex justify-center gap-2 mt-5">
      <Button
        onClick={() =>
          setCurrentPage((p) =>
            Math.min(p + 1, Math.ceil(products.length / itemsPerPage)),
          )
        }
        disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
        variant={`pagination`}
        size={`sm`}
      >
        التالي
      </Button>

      <span className="px-4 py-2">
        صفحة {currentPage} من {Math.ceil(products.length / itemsPerPage)}
      </span>

      <Button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        variant={`pagination`}
        size={`sm`}
      >
        السابق
      </Button>
    </div>
  );
}

export default PaginationBar;
