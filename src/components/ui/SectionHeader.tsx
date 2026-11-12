import React from "react";
import Badge from "./Badge";

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "primary" | "neutral" | "navy" | "outline";
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = "primary",
  title,
  description,
  align = "center",
  action,
  className = "",
  theme = "light",
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <div className={`mb-3.5 ${isCenter ? "flex justify-center" : ""}`}>
          <Badge variant={isDark ? "outline" : badgeVariant} size="sm" dot>
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.18] ${
          isDark ? "text-white" : "text-[#101926]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-[#64748B]"
          }`}
        >
          {description}
        </p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

export default SectionHeader;

