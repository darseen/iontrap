import { ReactNode, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={`${className} rounded-md bg-zinc-600 px-4 py-2 transition-all duration-500 hover:scale-[1.03] hover:cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
