import { useEffect } from "react";

type SEOOptions = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: Record<string, unknown>;
};

const setMeta = (name: string, content: string) => {
  let el = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setOG = (property: string, content: string) => {
  let el = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (url: string) => {
  let link = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
};

/**
 * Hook de SEO
 * Configura metatags (title, description, Open Graph), canonical e JSON-LD.
 */
export function useSEO(opts: SEOOptions) {
  useEffect(() => {
    const { title, description, image, url, type = "article", schema } = opts;
    if (title) document.title = title;
    if (description) setMeta("description", description);
    if (url) setCanonical(url);
    if (title) setOG("og:title", title);
    if (description) setOG("og:description", description);
    if (image) setOG("og:image", image);
    if (url) setOG("og:url", url);
    setOG("og:type", type);

    const scriptId = "seo-jsonld";
    const prev = document.getElementById(scriptId);
    if (prev) prev.remove();
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [opts]);
}