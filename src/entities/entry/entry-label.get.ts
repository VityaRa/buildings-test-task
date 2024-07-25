import { IEntry } from "./entry.types";

export const getEntryLabel = (entry: IEntry) => {
  return `Подъезд ${entry.id}`
}