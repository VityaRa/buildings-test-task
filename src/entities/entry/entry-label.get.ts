import { IEntry } from "./entry.types";

export const getEntryLabel = (entryId: IEntry['id']) => {
  return `Подъезд ${entryId}`
}