import { ExternalLink } from "@/components/external-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectCopy } from "@/content/types";
import { textLinkClass } from "@/lib/styles";

export function ProjectCard({
  id,
  name,
  copy,
  labels,
  newTabLabel,
}: {
  id?: string;
  name: string;
  copy: ProjectCopy;
  labels: {
    problem: string;
    solution: string;
    result: string;
    stack: string;
  };
  newTabLabel: string;
}) {
  const sections = [
    { label: labels.problem, text: copy.problem },
    { label: labels.solution, text: copy.solution },
    { label: labels.result, text: copy.result },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2
            id={id}
            className="scroll-mt-32 text-base leading-snug font-medium"
          >
            {name}
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {sections.map((section) => (
          <div key={section.label} className="flex flex-col gap-1">
            <h3 className="text-sm font-medium">{section.label}</h3>
            <p className="text-pretty text-muted-foreground">{section.text}</p>
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">{labels.stack}</h3>
          <ul className="flex flex-wrap gap-2">
            {copy.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-2.5 py-1 text-xs"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {copy.links && copy.links.length > 0 ? (
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {copy.links.map((link) => (
              <li key={link.href}>
                <ExternalLink
                  href={link.href}
                  newTabLabel={newTabLabel}
                  className={textLinkClass}
                >
                  {link.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>
    </Card>
  );
}
