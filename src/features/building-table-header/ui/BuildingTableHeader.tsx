import { getBuildingLabel } from "@/entities/building";
import styles from "./BuildingTableHeader.module.scss";
import { Button } from "@/shared/ui";
import { PlusIcon, TrashIcon } from "@/shared/icons";

interface IProps {
  buildingId: number;
  onClear: VoidFunction;
  onAdd: VoidFunction;
}

const BuildingTableHeader: React.FC<IProps> = ({
  buildingId,
  onAdd,
  onClear,
}) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.header__title}>{getBuildingLabel(buildingId)}</h2>
      <div className={styles.header__actions}>
        <Button className={styles.header__actions__btn} onClick={onClear}>
          <TrashIcon />
        </Button>
        <Button className={styles.header__actions__btn} onClick={onAdd}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default BuildingTableHeader;
