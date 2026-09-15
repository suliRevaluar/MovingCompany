import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
} & React.ComponentProps<typeof Link>;

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-12 items-center justify-center px-5 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark",
        variant === "primary" &&
          "bg-primary-dark text-white hover:bg-primary-dark/90",
        variant === "secondary" &&
          "border border-border bg-surface text-text hover:border-primary-dark/40 hover:bg-primary-light",
        variant === "ghost" && "text-text hover:bg-primary-light",
        className,
      )}
      {...props}
    />
  );
}
