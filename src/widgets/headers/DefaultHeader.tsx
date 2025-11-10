"use client";

import { cn } from "@/shared/utils/classname";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function DefaultHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-row justify-between items-center w-full h-16 bg-white">
      <div>LEFT</div>
      <nav className="h-full">
        <ul className="flex flex-row items-center h-full">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-4 px-4 text-base font-regular flex items-center justify-center h-full"
            >
              <li className={cn(isActive(item.href) && "text-primary")}>
                {item.label}
              </li>
              <div
                className={cn(
                  isActive(item.href) &&
                    "absolute bottom-0 left-0 w-full h-1 bg-blue-500"
                )}
              ></div>
            </Link>
          ))}
        </ul>
      </nav>
      <div>RIGHT</div>
    </div>
  );
}
