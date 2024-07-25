import { IBuildingTableRow } from "@/features/building-table-items";
import { useCallback, useState } from "react";

type BuildingsState = { [key: number]: IBuildingTableRow[] };
const DEFAULT_STATE: BuildingsState = {
  1: [],
  2: [],
  3: [],
  4: [],
};

export const useBuildingState = () => {
  const [entries, setEntries] = useState<BuildingsState>(DEFAULT_STATE);

  const updateEntry = useCallback(
    (index: number, newEntries: IBuildingTableRow[]) => {
      setEntries((prev) => {
        return { ...prev, [index]: newEntries };
      });
    },
    [entries]
  );

  const removeEntry = useCallback(
    (index: number) => {
      setEntries((prev) => ({ ...prev, [index]: [] }));
    },
    [entries]
  );

  return {
    entries,
    updateEntry,
    removeEntry,
  };
};
