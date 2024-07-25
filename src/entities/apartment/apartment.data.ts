import { MAX_MODAL_ENTITIES_COUNT } from "@/shared/consts";
import { IApartment } from "./apartment.types";

export const apartmentsList: IApartment[] = Array.from(
  { length: MAX_MODAL_ENTITIES_COUNT },
  (_, i) => ({ id: i + 1 })
);
