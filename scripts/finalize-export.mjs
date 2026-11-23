import { copyFile } from "node:fs/promises";

// Next's static export writes its own out/404.html after copying public/.
// Restore the bilingual static 404 so Cloudflare Pages serves that file.
await copyFile("public/404.html", "out/404.html");
