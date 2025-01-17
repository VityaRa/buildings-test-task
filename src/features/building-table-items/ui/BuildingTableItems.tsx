import { ENTRY_NUMBER_LABEL } from "@/entities/entry";
import { fillBuildingTableItems, IBuildingTableRow } from "../model";
import styles from "./BuildingTableItems.module.scss";
import { APARTMENT_NUMBER_LABEL } from "@/entities/apartment";
import React from "react";

interface IProps {
  entries: IBuildingTableRow[];
}

const BuildingTableItems: React.FC<IProps> = ({ entries }) => {
  const filledBuildings = fillBuildingTableItems(entries ?? []);
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__header}>
          <th className={styles.table__column__left}>{ENTRY_NUMBER_LABEL}</th>
          <th className={styles.table__column__right}>{APARTMENT_NUMBER_LABEL}</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {filledBuildings.map((entry, index) => (
          <tr key={index} className={styles.table__body__row}>
            <td className={`${styles.table__column} ${styles.table__column__left}`}>{entry.apartments.length > 0 ? entry.entry : ''}</td>
            <td className={`${styles.table__column} ${styles.table__column__right}`}>{entry.apartments.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(BuildingTableItems);
