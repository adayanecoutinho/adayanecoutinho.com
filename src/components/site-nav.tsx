"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinkClass } from "@/lib/styles";
import { cn } from "@/lib/utils";

type Item = {
  href: string;
  label: string;
};

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function SiteNav({ label, items }: { label: string; items: Item[] }) {
  const pathname = normalize(usePathname());

  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap gap-1">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(navLinkClass)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
