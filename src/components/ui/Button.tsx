import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100";

    const variantStyles = {
      primary:
        "bg-[#0B59ED] text-white hover:bg-[#0948c2] shadow-[0_1px_2px_rgba(11,89,237,0.15)] shadow-[#0B59ED]/20 hover:shadow-md hover:shadow-[#0B59ED]/25 focus-visible:ring-2 focus-visible:ring-[#0B59ED] focus-visible:ring-offset-2",
      secondary:
        "bg-[#101926] text-white hover:bg-[#1A2638] focus-visible:ring-2 focus-visible:ring-[#101926] focus-visible:ring-offset-2",
      outline:
        "bg-white border border-[#E5E7EB] text-[#101926] hover:bg-[#F5F7FA] hover:border-[#CBD5E1] focus-visible:ring-2 focus-visible:ring-[#0B59ED]",
      ghost:
        "bg-transparent text-[#64748B] hover:text-[#101926] hover:bg-[#F5F7FA]",
      white:
        "bg-white text-[#101926] hover:bg-gray-50 border border-transparent hover:border-gray-100 shadow-sm",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={target ?? "_blank"}
            rel={rel ?? "noopener noreferrer"}
            className={combinedClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClasses}
          target={target}
          rel={rel}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

