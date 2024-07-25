export enum PressedKeyEnum {
  CtrlEnter,
  Enter,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
};

export const getPressedKeyFromEvent = (e: KeyboardEvent): PressedKeyEnum | null => {
  if (e.ctrlKey && e.key === "Enter") {
    return PressedKeyEnum.CtrlEnter;
  }

  if (e.key === "Enter") {
    return PressedKeyEnum.Enter;
  }

  if (e.key === "ArrowDown") {
    return PressedKeyEnum.ArrowDown;
  }

  if (e.key === "ArrowLeft") {
    return PressedKeyEnum.ArrowLeft;
  }

  if (e.key === "ArrowUp") {
    return PressedKeyEnum.ArrowUp;
  }

  if (e.key === "ArrowRight") {
    return PressedKeyEnum.ArrowRight;
  };

  return null;
}