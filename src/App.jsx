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
    const colorForTarget = colorOptions[randomIndex];
    const colorForOptionBoxes = PREDIFINED_COLORS[randomIndex];

    setColorOptions(colorForOptionBoxes);
    setTargetColor(colorForTarget);
  }, [score, colorOptions]);

  const handleResetScore = () => {
    setColorSelected("");
    setScore(0);
    setIsColorCorrect(null);
  };

  const handleColorSelected = (color) => {
    setColorSelected("");
    setColorSelected(color);
  };

  useEffect(() => {
    if (!colorSelected) return;
    if (colorSelected === targetColor) {
      setIsColorCorrect(true);
      setScore((cur) => cur + 1);
      setColorSelected("");
    } else {
      setIsColorCorrect(false);
    }
  }, [colorSelected, targetColor]);

  return (
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
  );
}

export default App;
