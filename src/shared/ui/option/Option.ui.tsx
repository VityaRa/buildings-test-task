import React from "react";
import { Button } from "../button";
import styles from "./Option.module.scss";

interface IProps {
  active?: boolean;
  label: string;
  onSelect: (val: unknown) => void;
  value: unknown;
  keyActive?: boolean;
}

const Option: React.FC<IProps> = ({ active, label, onSelect, value, keyActive }) => {
  return (
    <Button
      className={`${styles.btn} ${active ? styles.btn_active : ""} ${keyActive ? styles.btn_active_key : ''}`}
      onClick={() => onSelect(value)}
      variant="nofill"
    >
      {label}
    </Button>
  );
};

export default Option;
