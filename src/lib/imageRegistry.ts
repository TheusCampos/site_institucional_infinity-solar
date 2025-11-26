type AssetsMap = Record<string, string>;

const assets: AssetsMap = import.meta.glob(
  "/src/assets/**/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, as: "url" }
) as AssetsMap;

const registry: Record<string, string> = {};
const registryPaths: Record<string, string> = {};

const PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAQAIBRA==";

const isHttp = (v: string) => /^https?:\/\//.test(v);

const normalizePath = (p: string) => {
  if (!p) return p;
  if (p.startsWith("/src/")) return p;
  if (p.startsWith("src/")) return `/${p}`;
  if (p.startsWith("@/")) return `/src/${p.slice(2)}`;
  if (p.startsWith("./")) return `/src/${p.slice(2)}`;
  if (p.startsWith("../")) return `/src/${p.split("../").pop()}`;
  return p;
};

export const isImageTemplate = (v: string) => /^\$\{image:\s*[^}]+\}$/.test(v);

const parseTemplate = (v: string) => {
  const m = v.match(/^\$\{image:\s*([^\s}]+)(?:\s+([^}]+))?\}$/);
  if (!m) return { name: undefined as string | undefined, path: undefined as string | undefined };
  const name = m[1];
  const path = m[2]?.trim();
  return { name, path };
};

export const registerImage = (name: string, path: string) => {
  const np = normalizePath(path);
  const url = assets[np];
  if (!url) throw new Error(`Imagem não encontrada no assets: ${path}`);
  registry[name] = url;
  registryPaths[name] = np;
  return url;
};

export const resolveImage = (value: string) => {
  if (!value) throw new Error("Valor de imagem vazio");
  if (isHttp(value)) return value;
  if (isImageTemplate(value)) {
    const { name, path } = parseTemplate(value);
    if (name && registry[name]) return registry[name];
    if (path) {
      const np = normalizePath(path);
      const url = assets[np];
      if (!url) throw new Error(`Imagem não encontrada: ${path}`);
      if (name) {
        registry[name] = url;
        registryPaths[name] = np;
      }
      return url;
    }
    if (name) {
      const np = normalizePath(name);
      const url = assets[np];
      if (url) return url;
    }
    throw new Error(`Template de imagem inválido: ${value}`);
  }
  if (registry[value]) return registry[value];
  const np = normalizePath(value);
  if (assets[np]) return assets[np];
  throw new Error(`Imagem não encontrada: ${value}`);
};

export const resolveImageOrPlaceholder = (value: string) => {
  try {
    return resolveImage(value);
  } catch {
    return PLACEHOLDER;
  }
};

const toWebpPath = (path: string) => path.replace(/\.(png|jpg|jpeg)$/i, ".webp");

export const resolvePicture = (value: string): { img: string; webp?: string } => {
  if (isHttp(value)) return { img: value };
  let sourcePath: string | undefined;
  if (isImageTemplate(value)) {
    const { name, path } = parseTemplate(value);
    if (name && registryPaths[name]) sourcePath = registryPaths[name];
    else if (path) sourcePath = normalizePath(path);
  } else if (registryPaths[value]) {
    sourcePath = registryPaths[value];
  } else {
    sourcePath = normalizePath(value);
  }
  if (!sourcePath) return { img: resolveImageOrPlaceholder(value) };
  const main = assets[sourcePath];
  const webpCandidate = toWebpPath(sourcePath);
  const webp = assets[webpCandidate];
  return { img: main ?? PLACEHOLDER, webp };
};

registerImage("projectResidential", "/src/assets/project-residential.jpg");
registerImage("projectCommercial", "/src/assets/project-commercial.jpg");

export type ImageKey = keyof typeof registry;

