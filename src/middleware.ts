import { defineMiddleware } from "astro:middleware";
import apps from "./apps.json";

const appSlugs = new Set(apps.map((a) => a.slug));

export const onRequest = defineMiddleware((context, next) => {
  const host = context.request.headers.get("host") ?? "";
  const subdomain = host.split(".")[0];

  if (appSlugs.has(subdomain) && !context.url.pathname.startsWith(`/${subdomain}`)) {
    return context.rewrite(`/${subdomain}${context.url.pathname}`);
  }

  return next();
});
