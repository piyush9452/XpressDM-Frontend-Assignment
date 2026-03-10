"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "gradient" | "dark" | "outline-dark";
type ButtonSize = "sm" | "md";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  gradient: "gradient-brand text-white hover:opacity-90",
  dark: "bg-[#2A2A2A] text-white border border-[#3A3A3A] hover:bg-[#333]",
  "outline-dark": "bg-transparent text-white border border-[#3A3A3A] hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm rounded-full",
  md: "px-6 py-2.5 text-sm rounded-full",
};

export default function Button({
  children,
  variant = "gradient",
  size = "md",
  href,
  onClick,
  className,
  fullWidth = false,
}: ButtonProps) {
  const cls = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );

  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
