import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
  download?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  download,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-bg";

  const variants = {
    primary:
      "bg-accent text-bg hover:bg-accent-hover active:scale-[0.98]",
    secondary:
      "bg-surface text-text border border-border hover:bg-surface-hover hover:border-accent/30 active:scale-[0.98]",
    ghost:
      "text-muted hover:text-text hover:bg-surface-hover active:scale-[0.98]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} download={download}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
