/* eslint-disable react/prop-types */
import { MdSportsScore } from "react-icons/md";
import { SiStatuspal } from "react-icons/si";

const errorMsgs = [
  "Wrong, try again :(",
  "ishh, close 💘",
  "Almost got it, again! 😂",
];

const successMsgs = ["Correct Yayy🥳!", "You got it 🎊", "Nice one 🎉"];

function Header({ targetColor, isColorCorrect, score }) {
  return (
    <div>
      <p data-testid="gameInstructions" className="game-instruction">
        Guess the correct color by clicking one of the color options button that
        correspond with the target color
      </p>
      <div className="targetbox-container">
        {/* target color */}

        <div
          className="target-color"
          data-testid="colorBox"
          style={{ background: targetColor }}
        ></div>

        {/* score and status */}
        <div className="score-and-status">
          {/* score */}
          <p className="score" data-testid="score">
            Score <MdSportsScore fontSize="16px" color="darkblue" />: {score}
          </p>

          {/* status */}
          <p className="game-status" data-testid="gameStatus">
            <span>
              Status <SiStatuspal color="red" />:
            </span>

            {isColorCorrect !== null ? (
              isColorCorrect ? (
                <span className="correct">
                  {successMsgs[Math.floor(Math.random() * successMsgs.length)]}
                </span>
              ) : (
                <span className="wrong">
                  {errorMsgs[Math.floor(Math.random() * errorMsgs.length)]}
                </span>
              )
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
