import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "subtle" | "navy" | "outline";
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  className = "",
  variant = "white",
  hoverable = true,
  padding = "md",
  children,
  ...props
}) => {
  const baseStyles = "rounded-2xl transition-all duration-300 relative overflow-hidden";

  const variantStyles = {
    white: "bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(16,25,38,0.03)]",
    subtle: "bg-[#F5F7FA] border border-[#E5E7EB]",
    navy: "bg-[#101926] text-white border border-white/10 shadow-lg",
    outline: "bg-transparent border border-[#E5E7EB]",
  };

  const hoverStyles = hoverable
    ? variant === "navy"
      ? "hover:border-white/20 hover:-translate-y-1 hover:shadow-xl"
      : "hover:border-[#0B59ED]/30 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(16,25,38,0.07)]"
    : "";

  const paddingStyles = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10 md:p-12",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

