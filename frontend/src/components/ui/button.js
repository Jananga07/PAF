import React from "react";

/**
 * Minimal reusable Button to unblock imports.
 * Supports the `variant` and `size` props used by `Home.js`.
 */
export function Button({
  variant = "solid",
  size = "md",
  className = "",
  disabled = false,
  children,
  ...props
}) {
  const variants = {
    solid:
      "bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent",
    outline:
      "bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white",
  };

  const sizes = {
    sm: "h-9 px-3 rounded-md text-sm",
    md: "h-10 px-4 rounded-md text-sm",
    lg: "h-12 px-6 rounded-md text-base",
  };

  const base =
    "inline-flex items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500";

  return (
    <button
      type="button"
      className={[
        base,
        sizes[size] || sizes.md,
        variants[variant] || variants.solid,
        className,
      ].join(" ")}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

