import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
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
    "inline-flex items-center justify-center gap-2 rounded px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover",
    secondary:
      "bg-surface text-text border border-border hover:border-primary/50 hover:bg-surface-hover",
    ghost:
      "text-muted hover:text-text hover:bg-surface-hover",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} download={download} onClick={onClick}>
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
