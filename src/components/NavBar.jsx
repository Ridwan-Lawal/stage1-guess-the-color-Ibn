/* eslint-disable react/prop-types */
import { MdOutlineRestartAlt } from "react-icons/md";

function NavBar({ onResetScore }) {
  return (
    <nav>
      {/* App name */}

      <h1 data-testid="gameInstructions">
        Guess <span>the</span> <span>Correct</span> <span>Color</span>
      </h1>

      <div>
        <button data-testid="newGameButton" onClick={onResetScore}>
          <MdOutlineRestartAlt fontWeight="700" />
          <span>Play Again</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
