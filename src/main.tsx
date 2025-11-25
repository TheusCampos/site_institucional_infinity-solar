import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./lib/perf";
import "bootstrap-icons/font/bootstrap-icons.css";
import tabIcon from "@/assets/infinity-solar.jpg";
import { initScrollReveal } from "./lib/scrollReveal";

const link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
const newLink = document.createElement("link");
newLink.rel = "icon";
newLink.type = "image/jpeg";
newLink.href = tabIcon;
document.head.appendChild(newLink);
createRoot(document.getElementById("root")!).render(<App />);
initScrollReveal();
