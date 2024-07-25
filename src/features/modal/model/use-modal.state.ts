import { useMemo, useState } from "react";
import { ModalType } from "./modal-renderer.types";

export const useModalState = () => {
  const [currentModal, setCurrentModal] = useState<ModalType | null>(null);
  const open = (modalType: ModalType) => {
    setCurrentModal(modalType);
  };

  const closeAll = () => {
    setCurrentModal(null);
  };

  const memoizedState = useMemo(() => {
    return currentModal;
  }, [currentModal]);

  return {
    state: memoizedState,
    open: open,
    closeAll,
  };
};
