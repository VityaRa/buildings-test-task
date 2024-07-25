import { BUILDINGS_LIST } from "@/entities/building/building.data";
import { BuildingTable } from "@/widgets/building-table";
import { useBuildingState } from "@/widgets/building-table/model";
import { useSelectionModals } from "@/widgets/selection-modals";
import styles from "./Main.module.scss";
import { useSelectedBuilding } from "@/features/selected-building";

const MainPage = () => {
  const { entries, updateEntry, removeEntry } = useBuildingState();

  const {
    onCurrentBuildingIdChange,
    selectedApartments,
    selectedEntries,
    onApartmentSelect,
    onEntrySelect,
    onSubmit,
  } = useSelectedBuilding(entries, updateEntry);

  const { onHeaderAddClick, render: renderModals } = useSelectionModals({
    selectedApartments,
    selectedEntries,
    onApartmentSelect,
    onEntrySelect,
    onFinish: onSubmit,
  });

  const onAddClick = (buildingId: number) => {
    onCurrentBuildingIdChange(buildingId);
    onHeaderAddClick();
  };

  return (
    <main className={styles.main}>
      <div className={styles.main__list}>
        {BUILDINGS_LIST.map((val, idx) => (
          <BuildingTable
            onAdd={() => onAddClick(val)}
            onClear={() => removeEntry(val)}
            entries={entries[val]}
            key={idx}
            buildingId={val}
          />
        ))}
      </div>

      {renderModals()}
    </main>
  );
};

export default MainPage;
