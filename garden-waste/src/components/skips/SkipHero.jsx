import { Truck } from "lucide-react";
import Badge from "../ui/Badge";

const SkipHero = ({ skipCount }) => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center px-6">
        <Badge variant="info" className="mb-8">
          <Truck className="w-4 h-4" />
          <span>Skip Selection • {skipCount} Options Available</span>
        </Badge>

        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
          Choose Your
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Skip Size
          </span>
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Premium skip hire solutions for Lowestoft. All prices include
          delivery, hire period, and collection.
        </p>
      </div>
    </div>
  );
};

export default SkipHero;
