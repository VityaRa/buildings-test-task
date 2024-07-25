import { MAX_TABLE_ITEMS } from "@/shared/consts";
import { IBuildingTableRow } from "./building-table-items.types";

export const getNBuildingItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    entry: i + 1,
    apartments: [],
  }));
};

export const fillBuildingTableItems = (
  rows: IBuildingTableRow[]
) => {
  const entries = Array.from({ length: MAX_TABLE_ITEMS }, (_) => ({
    entry: '',
    apartments: [],
  }));

  return [...rows, ...entries].slice(0, MAX_TABLE_ITEMS);
};
