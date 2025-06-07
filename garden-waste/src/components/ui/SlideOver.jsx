import { X } from "lucide-react";
import { useEffect } from "react";

const SlideOver = ({ isOpen, onClose, children }) => {
  // Lock body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/90 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div
          className={`w-screen max-w-md transform transition-all duration-500 ease-out ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex h-full flex-col overflow-hidden rounded-l-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-l border-slate-700/50 shadow-[0_0_50px_0_rgba(0,0,0,0.5)]">
            {/* Header */}{" "}
            <div className="absolute top-0 left-0 right-0 px-6 py-4 bg-gradient-to-b from-slate-900 to-transparent z-10">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="p-2 rounded-full hover:bg-slate-700/50 transition-colors"
                >
                  <X className="h-5 w-5 text-slate-400" />
                  <span className="sr-only">Close panel</span>
                </button>
              </div>
            </div>
            {/* Content */}
            <div
              className="relative h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent py-16 px-8"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgb(51 65 85) transparent",
              }}
            >
              <div className="min-h-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOver;
