// Stat Card Component
function StatCard({ title, value, icon, description, color }) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center gap-5">
      <div className={`p-4 rounded-2xl ${color}`}>{icon}</div>
      <div>
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
          {title}
        </p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <p className="text-gray-400 text-[10px] mt-1">{description}</p>
      </div>
    </div>
  );
}

// Category Info Component
function CategoryInfo({ label, count, color }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${color}`} />
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <span className="text-sm text-gray-500 font-mono">{count} منتجات</span>
    </div>
  );
}

export { StatCard, CategoryInfo };
