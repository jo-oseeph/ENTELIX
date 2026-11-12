import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "neutral" | "navy" | "outline" | "success";
  size?: "sm" | "md";
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className = "",
  variant = "primary",
  size = "md",
  dot = false,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full select-none";

  const variantStyles = {
    primary: "bg-[#EBF2FE] text-[#0B59ED] border border-[#0B59ED]/15",
    neutral: "bg-[#F5F7FA] text-[#64748B] border border-[#E5E7EB]",
    navy: "bg-[#101926] text-white border border-[#101926]",
    outline: "bg-transparent text-[#101926] border border-[#E5E7EB]",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  const dotColors = {
    primary: "bg-[#0B59ED]",
    neutral: "bg-[#64748B]",
    navy: "bg-white",
    outline: "bg-[#101926]",
    success: "bg-emerald-500",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5 font-semibold tracking-wide",
    md: "text-xs px-3 py-1 gap-2 font-semibold tracking-wide",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};

export default Badge;

