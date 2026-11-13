"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import Profile from "./Profile";
import { CartIcon, HistoryIcon, LogoIcon } from "./icon";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Product",
      href: "/product",
      icon: CartIcon,
      isActive: pathname.startsWith("/product"),
    },
    {
      label: "History",
      href: "/history",
      icon: HistoryIcon,
      isActive: pathname.startsWith("/history"),
    },
  ];

  return (
    <header className="flex h-12 w-full items-center justify-between gap-2 sm:gap-4 rounded-xl bg-popover px-2.5 sm:px-3 py-1.5 shadow-xs">
      <div className="flex items-center">
        <LogoIcon className="size-8 sm:size-9" />
        <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground select-none">
          ashier
        </span>
      </div>

      <nav className="flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex items-center gap-1.5 sm:gap-2 rounded-lg px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium transition-all select-none border border-border/40",
                item.isActive
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:bg-background/80 hover:text-foreground hover:border-border"
              )}
            >
              <Icon />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center">
        <Profile />
      </div>
    </header>
  );
}
