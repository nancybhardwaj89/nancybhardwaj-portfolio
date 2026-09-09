"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Portrait with an initials fallback.
 *
 * Uses a plain <img> rather than next/image: the site is a static export with
 * the optimizer disabled, so next/image would emit the same request while
 * making an onError fallback awkward. Explicit width/height reserve the box so
 * there's no layout shift either way.
 *
 * The fallback matters because it means a missing or misnamed image file
 * degrades to a designed monogram instead of a broken-image icon.
 */
export function Avatar({
  src,
  alt,
  initials,
  size,
  className,
  textClassName,
}: {
  src: string | null;
  alt: string;
  initials: string;
  size: number;
  className?: string;
  textClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The onError prop alone isn't enough. This markup is server-rendered, so a
  // missing image finishes failing before React hydrates and attaches the
  // handler — the event fires into the void and the broken alt text stays on
  // screen. Re-check the element's actual state once on mount: a complete
  // image with zero natural width is one that failed to decode.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  const showImage = src !== null && !failed;

  return (
    <span
      className={cn(
        "relative block overflow-hidden rounded-full bg-surface-raised",
        className,
      )}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element -- see note above
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={size}
          height={size}
          decoding="async"
          onError={() => setFailed(true)}
          // text-transparent so that in the window before the mount check
          // runs, a failed image shows nothing rather than alt text sprawling
          // across the layout. The alt attribute stays intact for assistive
          // tech and for users browsing with images disabled.
          className="h-full w-full object-cover text-transparent"
        />
      ) : (
        <span
          aria-hidden="true"
          className={cn(
            "flex h-full w-full items-center justify-center font-display font-semibold tracking-tight text-fg-faint",
            textClassName,
          )}
        >
          {initials}
        </span>
      )}
    </span>
  );
}
