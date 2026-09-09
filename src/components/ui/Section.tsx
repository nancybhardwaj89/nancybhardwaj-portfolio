import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

/**
 * A titled home-page band. Owns vertical rhythm and the heading treatment so
 * every section stays visually consistent without repeating itself.
 *
 * The `id` doubles as the scroll-spy anchor target used by the header nav.
 */
export function Section({
  id,
  title,
  lead,
  className,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2
              id={headingId}
              className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
            >
              {title}
            </h2>
            {lead ? (
              <p className="mt-3 text-base leading-relaxed text-fg-muted">
                {lead}
              </p>
            ) : null}
          </div>
        </Reveal>
        <div className="mt-10 sm:mt-12">{children}</div>
      </Container>
    </section>
  );
}
