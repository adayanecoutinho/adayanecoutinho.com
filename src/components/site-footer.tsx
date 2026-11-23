import { ExternalLink } from "@/components/external-link";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/lib/site";
import { textLinkClass } from "@/lib/styles";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <span className="text-foreground">{siteConfig.name}</span>
          {" · "}
          {dict.footer.role}
          {" · "}© {year}
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          <li>
            <a className={textLinkClass} href={`mailto:${siteConfig.email}`}>
              {dict.contact.emailLabel}
            </a>
          </li>
          <li>
            <ExternalLink
              href={siteConfig.github}
              newTabLabel={dict.newTab}
              rel="me noopener noreferrer"
              className={textLinkClass}
            >
              GitHub
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href={siteConfig.linkedin}
              newTabLabel={dict.newTab}
              rel="me noopener noreferrer"
              className={textLinkClass}
            >
              LinkedIn
            </ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
