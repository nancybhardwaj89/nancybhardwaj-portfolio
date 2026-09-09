/**
 * Join class names, dropping falsy values.
 *
 * Deliberately dependency-free: this site's conditional classes are simple
 * enough that `clsx` + `tailwind-merge` would be weight without benefit.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
