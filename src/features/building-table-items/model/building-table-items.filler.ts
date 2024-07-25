import { MAX_TABLE_ITEMS } from "@/shared/consts";
import { IBuildingTableRow } from "./building-table-items.types";

export const fillBuildingTableItems = (
  rows: IBuildingTableRow[]
): IBuildingTableRow[] => {
  const entries = Array.from({ length: MAX_TABLE_ITEMS }, (_, i) => ({
    entry: i + 1,
    apartments: [],
  }));

  return [...rows, ...entries].slice(0, MAX_TABLE_ITEMS);
};
