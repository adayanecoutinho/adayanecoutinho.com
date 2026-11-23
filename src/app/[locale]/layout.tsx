import type { Viewport } from "next";
import { Geist } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { getDictionary } from "@/content";
import { getLocale, htmlLang, locales } from "@/lib/i18n";
import { rootMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  colorScheme: "light dark",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  return rootMetadata(locale);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const dict = getDictionary(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: dict.meta.title,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    knowsAbout: [
      "Large language models",
      "MCP servers",
      "Retrieval-augmented generation",
      "AI agents",
      "Data pipelines",
    ],
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };

  return (
    <html
      lang={htmlLang[locale]}
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
          >
            {dict.skip}
          </a>
          <SiteHeader locale={locale} dict={dict} />
          <main
            id="content"
            tabIndex={-1}
            className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 outline-none sm:px-6 sm:py-16"
          >
            {children}
          </main>
          <SiteFooter dict={dict} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
