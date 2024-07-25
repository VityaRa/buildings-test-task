import React from "react";
import { Button } from "../button";
import styles from "./Option.module.scss";

interface IProps {
  active?: boolean;
  label: string;
  onSelect: (val: unknown) => void;
  value: unknown;
}

const Option: React.FC<IProps> = ({ active, label, onSelect, value }) => {
  return (
    <Button
      className={`${styles.btn} ${active ? styles.btn_active : ""}`}
      onClick={() => onSelect(value)}
    >
      <span className={styles.text}>{label}</span>
    </Button>
  );
};

export default Option;
