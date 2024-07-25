import { ENTRY_NUMBER_LABEL, getEntryLabel } from "@/entities/entry";
import { enrtiesList } from "@/entities/entry/entry.data";
import { useKeyListener } from "@/features/key-pressing-managment";
import { OptionsModal } from "@/features/modal";
import { useTempSelection } from "../model/use-temp-selection.hook";

interface Props {
  onClose: () => void;
  selected: number[];

  onSelect: (id: number) => void;
}

const EntranceModal: React.FC<Props> = ({ onClose, selected, onSelect }) => {
  const { handleTop, handleDown, tempIndex } = useTempSelection(enrtiesList);

  const onEnterSelection = () => {
    if (tempIndex === undefined) {
      return;
    }

    onSelect(enrtiesList[tempIndex]);
  };

  useKeyListener({
    deps: [tempIndex, selected],
    onBottomArrow: handleDown,
    onTopArrow: handleTop,
    onEnter: onEnterSelection,
    onLeftArrow: onClose,
    onRightArrow: onEnterSelection,
  });

  return (
    <OptionsModal
      options={enrtiesList}
      opened
      onClose={() => onClose()}
      label={ENTRY_NUMBER_LABEL}
      getOptionLabel={getEntryLabel}
      selectedOptions={selected}
      onSelect={onSelect}
      tempSelectedOption={tempIndex}
    />
  );
};

export default EntranceModal;
