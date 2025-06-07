import { Shield, Clock, AlertTriangle, CheckCircle } from "lucide-react";

const SkipFeatures = ({ skip }) => {
  return (
    <div className="space-y-3 mb-8">
      <div className="flex items-center space-x-3">
        <Clock className="w-5 h-5 text-slate-400" />
        <span className="text-slate-300">
          {skip.hire_period_days} day hire period
        </span>
      </div>

      <div className="flex items-center space-x-3">
        {skip.allowed_on_road ? (
          <>
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400">Road placement allowed</span>
          </>
        ) : (
          <>
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400">Private land only</span>
          </>
        )}
      </div>

      <div className="flex items-center space-x-3">
        {skip.allows_heavy_waste ? (
          <>
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400">Heavy waste accepted</span>
          </>
        ) : (
          <>
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400">Light waste only</span>
          </>
        )}
      </div>
    </div>
  );
};

export default SkipFeatures;
