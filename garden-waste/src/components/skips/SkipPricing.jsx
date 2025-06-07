const SkipPricing = ({ totalPrice, isSelected, onSelect }) => {
  return (
    <div className="border-t border-slate-700 pt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-3xl font-black text-white">£{totalPrice}</div>
          <div className="text-slate-400 text-sm">inc. VAT & delivery</div>
        </div>
        <div
          onClick={onSelect}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
            isSelected
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : "bg-slate-700 text-slate-300 group-hover:bg-slate-600"
          }`}
        >
          {isSelected ? "selected" : "select"}
        </div>
      </div>
    </div>
  );
};

export default SkipPricing;
