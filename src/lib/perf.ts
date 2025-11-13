let lcp = 0;
let cls = 0;
let fid = 0;

function supports(type: string) {
  const po = PerformanceObserver as unknown as { supportedEntryTypes?: string[] };
  return typeof PerformanceObserver === "function" && Array.isArray(po.supportedEntryTypes) && po.supportedEntryTypes.includes(type);
}

if (supports("largest-contentful-paint")) {
  const poLcp = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const e = entry as unknown as { renderTime?: number; loadTime?: number; startTime?: number };
      const t = e.renderTime ?? e.loadTime ?? e.startTime ?? 0;
      if (t > lcp) lcp = t;
    }
  });
  poLcp.observe({ type: "largest-contentful-paint", buffered: true });
}

if (supports("layout-shift")) {
  const poCls = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const e = entry as unknown as { value?: number; hadRecentInput?: boolean };
      const shift = e.value ?? 0;
      const hadInput = e.hadRecentInput ?? false;
      if (!hadInput) cls += shift;
    }
  });
  poCls.observe({ type: "layout-shift", buffered: true });
}

if (supports("first-input")) {
  const poFid = new PerformanceObserver((list) => {
    const first = list.getEntries()[0];
    if (first) {
      const e = first as unknown as { processingEnd?: number; startTime?: number };
      fid = (e.processingEnd ?? 0) - (e.startTime ?? 0);
    }
  });
  poFid.observe({ type: "first-input", buffered: true });
}

function sendMetrics() {
  const payload = {
    lcp,
    cls: Number(cls.toFixed(3)),
    fid: Math.round(fid),
    url: location.href,
    ts: Date.now(),
  };
  const ep = import.meta.env.VITE_PERF_ENDPOINT as string | undefined;
  if (ep) {
    try {
      navigator.sendBeacon(ep, JSON.stringify(payload));
    } catch {
      fetch(ep, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    }
  } else {
    console.log("perf", payload);
  }
}

addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") sendMetrics();
});