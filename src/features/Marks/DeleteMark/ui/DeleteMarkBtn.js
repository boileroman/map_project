import { Button } from "#shared/ui/Button";
import { DeleteIcon } from "#shared/ui/Icons";

/**
 * Кнопка удаления метки
 */
export const DeleteMarkBtn = ({
  markId,
  iconColor = "var(--colorImperialRed)",
}) =>
  Button({
    extraClasses: ["btn--no-text"],
    text: "",
    iconSlot: DeleteIcon({ iconColor }),
    extraAttrs: [{ name: "data-js-delete-mark-btn", value: markId }],
  });
