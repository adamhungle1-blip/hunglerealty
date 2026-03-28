import { RMContent, rmContentBatch1 } from "./rm-content-batch1";
import { rmContentBatch2 } from "./rm-content-batch2";
import { rmContentBatch3 } from "./rm-content-batch3";
import { rmContentBatch4 } from "./rm-content-batch4";

export type { RMContent };

/** Combined RM content from all batches */
export const rmContent: Record<string, RMContent> = {
  ...rmContentBatch1,
  ...rmContentBatch2,
  ...rmContentBatch3,
  ...rmContentBatch4,
};

/** Get RM content by slug, returns undefined if not found */
export function getRMContent(slug: string): RMContent | undefined {
  return rmContent[slug];
}
