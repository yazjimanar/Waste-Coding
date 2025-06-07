import { Truck, CheckCircle } from "lucide-react";
import Badge from "../ui/Badge";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">WeWantWaste</h1>
              <p className="text-sm text-slate-400">Lowestoft • NR32</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Badge>
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-white">Location Verified</span>
              </Badge>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">3/6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
