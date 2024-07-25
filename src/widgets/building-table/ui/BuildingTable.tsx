import { BuildingTableHeader } from "@/features/building-table-header";
import {
  BuildingTableItems,
  IBuildingTableRow,
} from "@/features/building-table-items";
import React from "react";
import styles from "./BuildingTable.module.scss";

interface Props {
  buildingId: number;
  entries: IBuildingTableRow[];

  onClear: VoidFunction;
  onAdd: VoidFunction;
}

const BuildingTable: React.FC<Props> = ({
  buildingId,
  entries,
  onAdd,
  onClear,
}) => {
  return (
    <div className={styles.table}>
      <BuildingTableHeader
        buildingId={buildingId}
        onClear={onClear}
        onAdd={onAdd}
      />
      <BuildingTableItems entries={entries} />
    </div>
  );
};

export default BuildingTable;
