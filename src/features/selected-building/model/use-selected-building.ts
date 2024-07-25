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
      const prevArray = prev ?? [];
      if (!currentEntry) {
        return prevArray;
      }
      const currentEntryIndex = prevArray.findIndex((b) => b.entry === currentEntry);
      if (currentEntryIndex === -1) {
        return [...prevArray, {entry: currentEntry, apartments: [val]}]
      };

      const tempCurrentEntry = prevArray[currentEntryIndex];

      const newApartmentsForEntry = tempCurrentEntry.apartments.includes(val) ? tempCurrentEntry.apartments.filter((aId) => aId !== val) : [...tempCurrentEntry.apartments, val];
      if (newApartmentsForEntry.length === 0) {
        return prevArray.filter((_, idx) => idx !== currentEntryIndex);
      };

      let copy = [...prevArray];
      copy[currentEntryIndex] = {...tempCurrentEntry, apartments: newApartmentsForEntry};
      return copy;
    });
  };

  const selectedEntries = (currentBuilding ?? [])
    .filter((building) => building.apartments.length !== 0)
    .map((v) => v.entry);

  const selectedApartments =
    (currentBuilding ?? []).find((building) => building.entry === currentEntry)
      ?.apartments ?? [];

  const onSubmit = () => {
    if (!currentBuildingId || !currentBuilding || selectedApartments.length === 0) {
      return false;
    };

    onUpdate(currentBuildingId, currentBuilding);
    return true;
  };

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
