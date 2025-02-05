import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./index.css";
import { PREDIFINED_COLORS } from "./utils/constant";

function App() {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [colorSelected, setColorSelected] = useState("");
  const [colorOptions, setColorOptions] = useState([]);
  const [isColorCorrect, setIsColorCorrect] = useState(null);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    // target color
    const colorForTarget =
      colorOptions?.[Math.floor(Math.random() * PREDIFINED_COLORS.length)];

    // color options
    const colorForOptionBoxes = PREDIFINED_COLORS[colorIndex];
    console.log(colorIndex);

    console.log(colorForOptionBoxes, colorForTarget);

    setColorOptions(colorForOptionBoxes);
    setTargetColor(colorForTarget);
  }, [score, colorOptions, colorIndex]);

  // function to reset score
  const handleResetScore = () => {
    setColorSelected("");
    setScore(0);
    setIsColorCorrect(null);
  };

  // function to handle the selected color
  const handleColorSelected = (color) => {
    setColorSelected("");
    setColorSelected(color);
  };

  useEffect(() => {
    if (!colorSelected) return;

    // if the selected color is equal to the target color
    if (colorSelected === targetColor) {
      setIsColorCorrect(true);
      setScore((cur) => cur + 1);
      setColorSelected("");
      setColorIndex((cur) =>
        cur === PREDIFINED_COLORS.length - 1 ? (cur = 0) : cur + 1
      );
    } else {
      setIsColorCorrect(false);
    }

    // for clearing the status message
    setTimeout(() => {
      setIsColorCorrect(null);
      setColorSelected("");
    }, 1000);
  }, [colorSelected, targetColor]);

  return (
    <div className="app-container">
      <div className="container">
        {/* nav (message, play-again button) */}
        <NavBar onResetScore={handleResetScore} />

        {/* target box, score and status */}
        <Header
          targetColor={targetColor}
          isColorCorrect={isColorCorrect}
          score={score}
        />

        {/* color options */}
        <Buttons
          onColorSelected={handleColorSelected}
          colorOptions={colorOptions}
        />
      </div>
    </div>
  );
}

export default App;
