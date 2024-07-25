import { ModalType, useModalState } from "@/features/modal";
import { useCallback } from "react";
import { EntranceModal } from "../ui";
import ApartmentModal from "../ui/ApartmentModal.ui";

interface IProps {
  selectedEntries: number[];
  selectedApartments: number[];

  onApartmentSelect: (id: number) => void;
  onEntrySelect: (id: number) => void;

  onFinish: () => boolean;
}

export const useSelectionModals = ({
  selectedEntries,
  onEntrySelect,
  selectedApartments,
  onApartmentSelect,
  onFinish,
}: IProps) => {
  const { state, open, closeAll } = useModalState();
  const onHeaderAddClick = () => {
    open(ModalType.Entry);
  };

  const handleOnEntrySelect = useCallback(
    (id: number) => {
      open(ModalType.Apartment);
      onEntrySelect(id);
    },
    [state, onEntrySelect, open]
  );

  const handleOnFinish = useCallback(() => {
    const success = onFinish();
    if (!success) {
      return;
    }
    closeAll();
  }, [onFinish, closeAll]);

  const render = () => {
    if (state === ModalType.Entry) {
      return (
        <EntranceModal
          onClose={closeAll}
          selected={selectedEntries}
          onSelect={handleOnEntrySelect}
        />
      );
    }

    if (state === ModalType.Apartment) {
      return (
        <ApartmentModal
          onClose={() => open(ModalType.Entry)}
          selected={selectedApartments}
          onSelect={onApartmentSelect}
          onFinish={handleOnFinish}
        />
      );
    }
  };

  return {
    onHeaderAddClick,
    render,
    canEdit: state === null,
  };
};
