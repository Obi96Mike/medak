"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const NavLink = ({
  children,
  href,
  isActive,
  className,
  onClick,
}: {
  isActive?: boolean;
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        isActive && "text-primary",
        "hover:underline uppercase font-bold text-sm hover:text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;