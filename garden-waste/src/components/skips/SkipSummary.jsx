import { CheckCircle, ChevronRight, Clock } from "lucide-react";
import Button from "../ui/Button";
import SlideOver from "../ui/SlideOver";

const SkipSummary = ({ selectedSkip, onBack, isOpen }) => {
  if (!selectedSkip) return null;

  return (
    <SlideOver isOpen={isOpen} onClose={onBack}>
      <div className="space-y-8 animate-fade-in">
        {/* Skip Title */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4">
            <div className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
              {selectedSkip.size}y
            </div>
          </div>
          <h2 className="text-3xl font-black text-white mb-2">
            {selectedSkip.size} Yard Skip
          </h2>
          <p className="text-slate-400">Selected Skip Details</p>
        </div>

        {/* Price & Hire Info */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20 animate-slide-up [animation-delay:200ms]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                £{selectedSkip.totalPrice}
              </span>
              <span className="text-slate-400 ml-2">inc. VAT</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <Clock className="w-4 h-4" />
            <span>{selectedSkip.hire_period_days} day hire period</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 animate-slide-up [animation-delay:600ms]">
          <p className="text-slate-400 text-sm leading-relaxed">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 animate-slide-up [animation-delay:800ms] pt-4">
          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
            <span>Continue to Checkout</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="secondary" onClick={onBack} className="w-full">
            Choose Different Skip
          </Button>
        </div>
      </div>
    </SlideOver>
  );
};

export default SkipSummary;
