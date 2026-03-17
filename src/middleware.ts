import { defineMiddleware } from "astro:middleware";
import apps from "./apps.json";

const appSlugs = new Set(apps.map((a) => a.slug));

export const onRequest = defineMiddleware(({ request, url }, next) => {
  const host = request.headers.get("host") ?? "";
  const subdomain = host.split(".")[0];

  if (appSlugs.has(subdomain) && !url.pathname.startsWith(`/${subdomain}`)) {
    return next(new Request(new URL(`/${subdomain}${url.pathname}`, url), request));
  }

  return next();
});
