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

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * PREDIFINED_COLORS.length);

    console.log(randomIndex);

    // target color
    const colorForTarget = colorOptions[randomIndex];

    // color options
    const colorForOptionBoxes = PREDIFINED_COLORS[randomIndex];

    setColorOptions(colorForOptionBoxes);
    setTargetColor(colorForTarget);
  }, [score, colorOptions]);

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
    } else {
      setIsColorCorrect(false);
    }
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
