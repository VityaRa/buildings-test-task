import { MAX_MODAL_ENTITIES_COUNT } from "@/shared/consts";
import { IEntry } from "./entry.types";

export const enrtiesList: IEntry[] = Array.from(
  { length: MAX_MODAL_ENTITIES_COUNT },
  (_, i) => ({ id: i + 1 })
);
