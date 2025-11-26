import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./lib/perf";
import "bootstrap-icons/font/bootstrap-icons.css";
import menuLogo from "@/assets/logo-infinity-png.png";
import { initScrollReveal } from "./lib/scrollReveal";

const iconLink = document.querySelector<HTMLLinkElement>('link[rel="icon"]') ?? document.createElement("link");
iconLink.rel = "icon";
iconLink.type = "image/png";
iconLink.href = menuLogo;
iconLink.setAttribute("sizes", "32x32");
if (!iconLink.parentElement) document.head.appendChild(iconLink);
createRoot(document.getElementById("root")!).render(<App />);
if ("requestIdleCallback" in window) {
  (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => initScrollReveal());
} else {
  setTimeout(() => initScrollReveal(), 0);
}
