import { IBuildingTableRow } from "@/features/building-table-items";
import { useState } from "react";

export const useSelectedBuilding = (
  entries: {
    [key: string]: IBuildingTableRow[];
  },
  onUpdate: (index: number, newEntries: IBuildingTableRow[]) => void
) => {
  const [currentBuildingId, setCurrentBuildingId] = useState<number | null>(
    null
  );
  const [currentBuilding, setCurrentBuilding] = useState<
    IBuildingTableRow[] | null
  >(null);

  const onCurrentBuildingIdChange = (newId: number) => {
    setCurrentBuildingId(newId);
    setCurrentBuilding(entries[newId]);
  };

  const [currentEntry, setCurrentEntry] = useState<number | null>(null);

  const onEntrySelect = (val: number) => {
    if (!currentBuilding) {
      return;
    }

    setCurrentEntry(val);
  };

  const onApartmentSelect = (val: number) => {
    setCurrentBuilding((prev) => {
      return (prev ?? []).map((building) => {
        if (building.entry !== currentEntry) {
          return building;
        }

        if (building.apartments.includes(val)) {
          return {
            ...building,
            apartments: building.apartments.filter((apart) => apart !== val),
          };
        } else {
          return { ...building, apartments: [...building.apartments, val] };
        }
      });
    });
  };

  const selectedEntries = (currentBuilding ?? [])
    .filter((building) => building.apartments.length !== 0)
    .map((v) => v.entry);

  const selectedApartments =
    (currentBuilding ?? []).find((building) => building.entry === currentEntry)
      ?.apartments ?? [];

  const onSubmit = () => {
    if (!currentBuildingId || !currentBuilding) {
      return;
    };

    onUpdate(currentBuildingId, currentBuilding)
  }

  return {
    onEntrySelect,
    selectedEntries,

    onApartmentSelect,
    selectedApartments,

    onCurrentBuildingIdChange,

    currentBuildingId,
    currentBuilding,

    onSubmit,
  };
};
