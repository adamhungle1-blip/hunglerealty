import { rmList } from "./rm-list";

export interface RMData {
  name: string;
  slug: string;
  rmNumber?: number;
}

/** Convert an RM name to a URL-safe slug */
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Full RM dataset derived from the master RM list */
export const rmData: RMData[] = rmList.map((name) => ({
  name,
  slug: toSlug(name),
}));

/** Look up an RM by its slug */
export function getRMBySlug(slug: string): RMData | undefined {
  return rmData.find((rm) => rm.slug === slug);
}

/** Get all slugs (for generateStaticParams) */
export function getAllRMSlugs(): string[] {
  return rmData.map((rm) => rm.slug);
}
