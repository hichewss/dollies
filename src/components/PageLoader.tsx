import React, { useRef } from "react";
import { usePageImagesLoaded } from "../hooks/usePageImagesLoaded";

interface PageLoaderProps {
  children: React.ReactNode;
}

/**
 * Wraps page content and keeps it invisible until every <img> inside has
 * finished loading (or errored). Once all images are settled the wrapper
 * gets the existing `fade-in-content` class so the page fades in smoothly.
 *
 * The children are always rendered immediately — just with opacity 0 —
 * so images start downloading right away and layout is computed normally.
 */
function PageLoader({ children }: PageLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = usePageImagesLoaded(containerRef);

  return (
    <div
      ref={containerRef}
      className={imagesLoaded ? "fade-in-content" : "page-loading"}
    >
      {children}
    </div>
  );
}

export default PageLoader;
