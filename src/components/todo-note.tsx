import type { ReactNode } from "react";

export function TodoNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-border pl-4 text-sm text-pretty text-muted-foreground">
      {children}
    </p>
  );
}
