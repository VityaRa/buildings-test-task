import {
  BUILDING_HEADER_LABELS,
  fillBuildingTableItems,
  IBuildingTableRow,
} from "../model";
import styles from "./BuildingTableItems.module.scss";

interface IProps {
  entries: IBuildingTableRow[];
}

const BuildingTableItems: React.FC<IProps> = ({ entries }) => {
  const filledEntries = fillBuildingTableItems(entries);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>{BUILDING_HEADER_LABELS.entry}</th>
          <th>{BUILDING_HEADER_LABELS.apartment}</th>
        </tr>
      </thead>
      <tbody>
        {filledEntries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.entry}</td>
            <td>{entry.apartments.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BuildingTableItems;
