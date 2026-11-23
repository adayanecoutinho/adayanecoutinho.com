import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ExternalLink({
  href,
  children,
  newTabLabel,
  className,
  rel = "noopener noreferrer",
}: {
  href: string;
  children: ReactNode;
  newTabLabel: string;
  className?: string;
  rel?: string;
}) {
  return (
    <a href={href} target="_blank" rel={rel} className={cn(className)}>
      {children}
      <span className="sr-only"> ({newTabLabel})</span>
    </a>
  );
}
