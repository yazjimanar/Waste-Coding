import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SkipHero from "../components/skips/SkipHero";
import SkipCard from "../components/skips/SkipCard";
import SkipSummary from "../components/skips/SkipSummary";
import { Star, Award, Zap } from "lucide-react";

const SkipSizeSelector = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [summaryOpen, setSummaryOpen] = useState(false);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch skip data");
        }
        const data = await response.json();
        setSkips(data);
      } catch (error) {
        console.error("Error fetching skip data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSkipSelect = (skipId) => {
    const skip = skips.find((s) => s.id === skipId);
    if (skip) {
      skip.totalPrice = calculatePrice(skip);
      setSelectedSkip(skip);
      setSummaryOpen(true);
    }
  };

  const handleBack = () => {
    setSummaryOpen(false);
  };

  const calculatePrice = (skip) => {
    return Math.round(skip.price_before_vat * (1 + skip.vat / 100));
  };

  const getSkipCategory = (size) => {
    if (size <= 8)
      return {
        label: "Compact",
        color: "emerald",
        styleClasses: {
          badge:
            "bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-400",
          text: "from-emerald-400 to-emerald-600",
          visual: "from-emerald-500 to-emerald-600",
        },
        icon: Star,
      };
    if (size <= 16)
      return {
        label: "Standard",
        color: "blue",
        styleClasses: {
          badge:
            "bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400",
          text: "from-blue-400 to-blue-600",
          visual: "from-blue-500 to-blue-600",
        },
        icon: Award,
      };
    return {
      label: "Industrial",
      color: "purple",
      styleClasses: {
        badge:
          "bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-400",
        text: "from-purple-400 to-purple-600",
        visual: "from-purple-500 to-purple-600",
      },
      icon: Zap,
    };
  };

  const getSkipDimensions = (size) => {
    const dimensions = {
      4: "6ft x 4ft x 3ft",
      6: "8ft x 4ft x 3ft",
      8: "8ft x 5ft x 4ft",
      10: "10ft x 5ft x 4ft",
      12: "12ft x 6ft x 4ft",
      14: "12ft x 6ft x 5ft",
      16: "14ft x 6ft x 5ft",
      20: "16ft x 8ft x 6ft",
      40: "20ft x 8ft x 8ft",
    };
    return dimensions[size] || "Custom size";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading available skips...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <SkipHero />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skips.map((skip) => {
            const category = getSkipCategory(skip.size);
            return (
              <SkipCard
                key={skip.id}
                skip={skip}
                category={category}
                CategoryIcon={category.icon}
                totalPrice={calculatePrice(skip)}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={handleSkipSelect}
                getSkipDimensions={getSkipDimensions}
              />
            );
          })}
        </div>
      </div>

      <SkipSummary
        selectedSkip={selectedSkip}
        onBack={handleBack}
        isOpen={summaryOpen}
      />
      <Footer />
    </div>
  );
};

export default SkipSizeSelector;
