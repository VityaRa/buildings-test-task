import { useState } from "react";

export const useTempSelection = (options: number[]) => {
  const [tempSelectedOptionIndex, setTempSelectedOptionIndex] = useState<
    number | undefined
  >(undefined);

  const handleDown = () => {
    setTempSelectedOptionIndex((prev) => {
      if (prev === undefined) {
        return 0;
      }
      return prev === options.length - 1 ? 0 : prev + 1;
    });
  };

  const handleTop = () => {
    setTempSelectedOptionIndex((prev) => {
      if (prev === undefined) {
        return options.length - 1;
      }
      return prev === 0 ? options.length - 1 : prev - 1;
    });
  };

  return {
    tempIndex: tempSelectedOptionIndex,
    handleTop,
    handleDown
  }
};
