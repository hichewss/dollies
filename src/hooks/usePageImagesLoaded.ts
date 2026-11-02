import { useState, useEffect, RefObject } from "react";

/**
 * Tracks whether all <img> elements inside a given container ref have
 * finished loading (or errored). Returns `true` once every image has settled.
 *
 * Key behaviour:
 * - Images that are already cached/complete are counted immediately.
 * - A MutationObserver watches for images added after the first render
 *   (e.g. images rendered conditionally or inside lazy-loaded children).
 * - `onerror` also counts as "settled" so a broken image never blocks the page.
 */
export function usePageImagesLoaded(
  containerRef: RefObject<HTMLElement>
): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let pendingCount = 0;
    let settled = false;

    function markSettled() {
      if (settled) return;
      pendingCount -= 1;
      if (pendingCount <= 0) {
        settled = true;
        setLoaded(true);
      }
    }

    function trackImage(img: HTMLImageElement) {
      if (img.complete) {
        // Already done — don't increment pendingCount at all
        return;
      }
      pendingCount += 1;
      img.addEventListener("load", markSettled, { once: true });
      img.addEventListener("error", markSettled, { once: true });
    }

    // Track all images currently in the container
    const imgs = Array.from(container.querySelectorAll<HTMLImageElement>("img"));
    imgs.forEach(trackImage);

    // If there were no pending images, we're already done
    if (pendingCount === 0) {
      setLoaded(true);
      return;
    }

    // Watch for images added to the DOM after initial render
    // (e.g. conditionally rendered images, carousel slides, etc.)
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as Element;
          // The node itself might be an img
          if (el.tagName === "IMG") {
            trackImage(el as HTMLImageElement);
          }
          // Or it might contain nested imgs
          el.querySelectorAll<HTMLImageElement>("img").forEach(trackImage);
        });
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return loaded;
}
