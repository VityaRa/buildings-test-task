import {
  APARTMENT_NUMBER_LABEL,
  getApartmentLabel,
} from "@/entities/apartment";
import { apartmentsList } from "@/entities/apartment/apartment.data";
import { ENTRY_NUMBER_LABEL, getEntryLabel } from "@/entities/entry";
import { enrtiesList } from "@/entities/entry/entry.data";
import { ModalType, OptionsModal, useModalState } from "@/features/modal";
import { Button } from "@/shared/ui";

interface IProps {
  selectedEntries: number[];
  selectedApartments: number[];

  onApartmentSelect: (id: number) => void;
  onEntrySelect: (id: number) => void;

  onFinish: () => void;
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

  const render = () => {
    if (state === ModalType.Entry) {
      return (
        <OptionsModal
          options={enrtiesList}
          opened
          onClose={() => closeAll()}
          label={ENTRY_NUMBER_LABEL}
          getOptionLabel={getEntryLabel}
          selectedOptions={selectedEntries}
          onSelect={onEntrySelect}
        />
      );
    }

    if (state === ModalType.Apartment) {
      return (
        <OptionsModal
          options={apartmentsList}
          opened
          onClose={() => closeAll()}
          label={APARTMENT_NUMBER_LABEL}
          getOptionLabel={getApartmentLabel}
          selectedOptions={selectedApartments}
          onSelect={onApartmentSelect}
        >
          <Button onClick={onFinish}>Добавить</Button>
        </OptionsModal>
      );
    }
  };

  return {
    onHeaderAddClick,
    render,
  };
};
