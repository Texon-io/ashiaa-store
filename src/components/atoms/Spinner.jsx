// src/components/ui/Spinner.jsx
function Spinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full border-4 border-accent-dark/75 opacity-25"></div>
        <div className="absolute inset-0 rounded-full border-4 border-accent-dark/75 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}

export default Spinner;
