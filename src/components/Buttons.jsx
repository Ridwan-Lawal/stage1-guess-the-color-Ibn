import { PREDIFINED_COLORS } from "../utils/constant";

function Buttons({ onColorSelected, colorOptions }) {
  return (
    <div className="color-buttons">
      {colorOptions?.map((color) => (
        <button
          onClick={() => onColorSelected(color)}
          className="color-button"
          data-testid="colorOption"
          style={{ background: color }}
          key={color}
        ></button>
      ))}
    </div>
  );
}

export default Buttons;
