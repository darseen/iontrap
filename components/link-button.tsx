import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  href: string;
}

export default function LinkButton({ children, className, href }: Props) {
  return (
    <Link
      href={href}
      className={`rounded-lg border-zinc-400 bg-zinc-800 px-6 py-2 text-white shadow-lg transition-all duration-300 hover:scale-[1.05] ${className}`}
    >
      {children}
    </Link>
  );
}
