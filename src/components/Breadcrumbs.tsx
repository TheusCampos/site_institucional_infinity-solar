import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ currentTitle }: { currentTitle?: string }) => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  const items = [
    { name: "Início", path: "/" },
    ...segments.map((seg, idx) => {
      const path = "/" + segments.slice(0, idx + 1).join("/");
      const name = currentTitle && idx === segments.length - 1 ? currentTitle : seg.replace(/-/g, " ");
      return { name, path };
    }),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="py-2" translate="no">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center">
            {i > 0 && <span className="mx-2">/</span>}
            {i < items.length - 1 ? (
              <Link to={it.path} className="hover:text-primary transition-colors" aria-label={it.name}>
                {it.name}
              </Link>
            ) : (
              <span className="text-foreground" aria-current="page">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
};

export default Breadcrumbs;

