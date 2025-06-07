const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
