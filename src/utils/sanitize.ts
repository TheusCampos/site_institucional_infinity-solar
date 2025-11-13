/**
 * Sanitizador básico de HTML
 * Remove tags perigosas, comentários e atributos potencialmente inseguros.
 */
export function sanitizeHTMLBasic(html: string): string {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const dangerousTags = ["script", "iframe", "object", "embed", "style", "link", "meta"];
    dangerousTags.forEach((tag) => {
      doc.querySelectorAll(tag).forEach((node) => node.remove());
    });
    const commentWalker = doc.createTreeWalker(doc, NodeFilter.SHOW_COMMENT);
    let cNode = commentWalker.nextNode();
    while (cNode) {
      const toRemove = cNode;
      cNode = commentWalker.nextNode();
      toRemove.parentNode?.removeChild(toRemove);
    }
    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT);
    let node = walker.nextNode() as Element | null;
    while (node) {
      Array.from(node.attributes).forEach((attr) => {
        const nameUnsafe = /^on/i.test(attr.name) || /javascript:/i.test(attr.value);
        if (nameUnsafe) node.removeAttribute(attr.name);
      });
      node = walker.nextNode() as Element | null;
    }
    return doc.body.innerHTML;
  } catch {
    return "";
  }
}