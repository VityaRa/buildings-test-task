import { MAX_MODAL_ENTITIES_COUNT } from "@/shared/consts";

export const enrtiesList: number[] = Array.from(
  { length: MAX_MODAL_ENTITIES_COUNT },
  (_, i) => i + 1,
);
