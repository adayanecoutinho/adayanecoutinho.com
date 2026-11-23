import { ImageResponse } from "next/og";

import { getDictionary } from "@/content";
import { isLocale, locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = "Adayane Coutinho, AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dict = getDictionary(locale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#171717",
        color: "#fafafa",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#a3a3a3" }}>
        {dict.home.title}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", fontSize: 68, fontWeight: 600 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#d4d4d4",
            lineHeight: 1.35,
            maxWidth: 980,
          }}
        >
          {dict.home.positioning}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
