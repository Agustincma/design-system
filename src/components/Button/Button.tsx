import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  ...props
}) => {
  const base =
    "px-4 py-2 rounded font-medium transition-colors duration-200 focus:outline-none";

  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {label}
    </button>
  );
};
