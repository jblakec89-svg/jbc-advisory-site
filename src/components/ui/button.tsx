import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "link";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const variantClasses = {
  default: "bg-accent text-accent-foreground hover:bg-accent/90",
  outline: "border border-border bg-background hover:bg-accent-muted hover:border-accent/30 hover:text-foreground",
  link: "text-accent underline-offset-4 hover:underline hover:text-accent/90",
};
const sizeClasses = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 disabled:pointer-events-none disabled:opacity-50";
    const cn = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: `${(children.props as { className?: string }).className ?? ""} ${cn}`.trim(),
        ref,
      });
    }
    return (
      <button ref={ref} className={cn} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
