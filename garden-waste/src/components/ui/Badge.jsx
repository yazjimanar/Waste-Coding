const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-white/10",
    success: "bg-green-500/20 text-green-400",
    info: "bg-cyan-500/20 text-cyan-400",
  };

  return (
    <div
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
