import { LuArrowUpRight } from "react-icons/lu";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const CTAButton = ({
  className,
  children,
  href = "https://jamescryptoguru.gumroad.com/l/airds",
}: {
  children: string | ReactNode;
  href?: string;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "yellow-gradient-bg grid place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary transition hover:opacity-80",
        className,
      )}
    >
      <a
        href={href}
        className="flex items-center gap-[10px] px-5 py-3"
        rel="noreferrer noopener"
      >
        <p>{children}</p>
        <LuArrowUpRight size={18} className="text-primary" />
      </a>
    </button>
  );
};

export default CTAButton;
