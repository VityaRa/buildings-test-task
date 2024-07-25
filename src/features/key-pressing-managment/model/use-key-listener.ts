import { useListener } from "@/shared/hooks";
import { getPressedKeyFromEvent, PressedKeyEnum } from "./keys.enum";

interface IProps {
  onLeftArrow?: VoidFunction;
  onRightArrow?: VoidFunction;
  onTopArrow?: VoidFunction;
  onBottomArrow?: VoidFunction;

  onEnterCtrl?: VoidFunction;
  onEnter?: VoidFunction;

  deps: unknown[];
}

export const useKeyListener = ({
  deps,
  onLeftArrow,
  onBottomArrow,
  onRightArrow,
  onTopArrow,

  onEnterCtrl,
  onEnter,
}: IProps) => {
  const fnMapper: {[key in PressedKeyEnum]?: VoidFunction } = {
    [PressedKeyEnum.ArrowDown]: onBottomArrow,
    [PressedKeyEnum.ArrowLeft]: onLeftArrow,
    [PressedKeyEnum.ArrowRight]: onRightArrow,
    [PressedKeyEnum.ArrowUp]: onTopArrow,
    [PressedKeyEnum.CtrlEnter]: onEnterCtrl,
    [PressedKeyEnum.Enter]: onEnter,
  };

  useListener(
    (e) => {
      const keyEvent = e as KeyboardEvent;
      const enumEvent = getPressedKeyFromEvent(keyEvent);

      if (enumEvent === null) {
        return;
      };

      const cb = fnMapper[enumEvent];
      if (!cb) {
        return;
      }

      cb();
    },
    "keydown",
    [
      ...deps,
      onLeftArrow,
      onBottomArrow,
      onRightArrow,
      onTopArrow,

      onEnterCtrl,
      onEnter,
    ]
  );
};
