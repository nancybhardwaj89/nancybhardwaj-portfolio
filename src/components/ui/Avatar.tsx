"use client";

import { useState } from "react";
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
          src={src}
          alt={alt}
          width={size}
          height={size}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
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
