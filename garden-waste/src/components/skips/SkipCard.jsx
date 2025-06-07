import { CheckCircle } from "lucide-react";
import SkipFeatures from "./SkipFeatures";
import SkipPricing from "./SkipPricing";

const SkipCard = ({
  skip,
  category,
  CategoryIcon,
  totalPrice,
  isSelected,
  onSelect,
  getSkipDimensions,
}) => {
  return (
    <div
      onClick={() => onSelect(skip.id)}
      className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 ${
        isSelected
          ? "border-cyan-500 shadow-2xl shadow-cyan-500/25"
          : "border-slate-700/50 hover:border-slate-600"
      }`}
    >
      {/* Selection Badge */}
      {isSelected && (
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
      )}

      {/* Category Badge */}
      <div
        className={`inline-flex items-center space-x-2 ${category.styleClasses.badge} px-3 py-1 rounded-full text-sm font-medium mb-6`}
      >
        <CategoryIcon className="w-4 h-4" />
        <span>{category.label}</span>
      </div>

      {/* Skip Visualization */}
      <div className="relative mb-8">
        <div className="text-center">
          <div
            className={`text-6xl font-black text-transparent bg-gradient-to-r ${category.styleClasses.text} bg-clip-text mb-2`}
          >
            {skip.size}
          </div>
          <div className="text-white text-lg font-bold mb-2">Yard Skip</div>
          <div className="text-slate-400 text-sm">
            {getSkipDimensions(skip.size)}
          </div>
        </div>

        {/* Visual Skip Representation */}
        <div className="mt-6 flex justify-center">
          <div
            className={`relative w-20 h-12 bg-gradient-to-r ${
              category.styleClasses.visual
            } rounded-lg shadow-xl transform transition-transform duration-300 ${
              isSelected ? "scale-110 rotate-2" : "group-hover:scale-105"
            }`}
          >
            <div className="absolute inset-x-2 top-1 h-2 bg-white/30 rounded-sm"></div>
            <div className="absolute inset-x-1 bottom-1 h-1 bg-black/30 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <SkipFeatures skip={skip} />

      {/* Pricing Section */}
      <SkipPricing
        totalPrice={totalPrice}
        isSelected={isSelected}
        onSelect={(e) => {
          e.stopPropagation();
          onSelect(skip.id);
        }}
      />
    </div>
  );
};

export default SkipCard;
