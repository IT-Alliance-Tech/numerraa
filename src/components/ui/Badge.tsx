interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "teal" | "light";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default:
      "bg-indigo-deep/5 text-indigo-deep border border-indigo-deep/10",
    gold: "bg-gold/10 text-gold-dark border border-gold/20",
    teal: "bg-teal/10 text-teal border border-teal/20",
    light: "bg-white/10 text-white/80 border border-white/15 backdrop-blur-sm",
  };

  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-[family-name:var(--font-body)] font-semibold tracking-widest uppercase ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
