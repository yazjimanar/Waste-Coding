import { CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <div className="border-t border-slate-800 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold">Need Help Choosing?</h4>
              <p className="text-slate-400 text-sm">
                Our experts are here to help you select the right skip
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-white font-bold">+90 535 412 47 91</div>
              <div className="text-slate-400 text-sm">Free consultation</div>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-white font-bold">Muhammed Menar Yazici</div>
              <div className="text-slate-400 text-sm">Delivery available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
