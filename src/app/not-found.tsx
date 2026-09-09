import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-36">
      <Container>
        <p className="font-mono text-xs tracking-wide text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg">
          Page not found
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-fg-muted">
          That page doesn&apos;t exist — it may have moved, or the link may be
          wrong.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover"
        >
          Back to home
        </Link>
      </Container>
    </section>
  );
}
