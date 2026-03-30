import { SETTINGS } from "./constants/settings";
import { useState } from "react";
import { keyboardUse } from "./hooks/keyboardUse";
import { getButtonStatuses } from "./utils/gameLogic";
import Keyboard from "./components/Keyboard";
import LetterRow from "./components/LetterRow";

export default function App() {
  const [solution, setSolution] = useState(() => {
    const randomize = Math.floor(Math.random() * SETTINGS.WORDS.length);
    return SETTINGS.WORDS[randomize];
  });

  const { guesses, currentGuess, winner, resetGame, handleInput } = keyboardUse(
    solution,
    SETTINGS.WORD_LENGTH,
    SETTINGS.MAX_GUESSES,
  );

  const usedButtons = getButtonStatuses(guesses, solution);

  const handleNewGame = () => {
    const randomize = Math.floor(Math.random() * SETTINGS.WORDS.length);
    setSolution(SETTINGS.WORDS[randomize]);

    resetGame();
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #7902db, #c47207)",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <h1>GUESS THE WORD</h1>

      <div style={{ marginBottom: "20px" }}>
        {guesses.map((g, i) => (
          <LetterRow key={i} guess={g} solution={solution} isSubmitted={true} />
        ))}

        {!winner && guesses.length < SETTINGS.MAX_GUESSES && (
          <LetterRow
            guess={currentGuess}
            solution={solution}
            isSubmitted={false}
          />
        )}

        {[
          ...Array(
            Math.max(
              0,
              SETTINGS.MAX_GUESSES - guesses.length - (winner ? 0 : 1),
            ),
          ),
        ].map((_, i) => (
          <LetterRow
            key={i + guesses.length + 1}
            guess=""
            solution={solution}
            isSubmitted={false}
          />
        ))}
      </div>

      <div style={{ textAlign: "center", height: "100px" }}>
        {winner && <h2>You Win!</h2>}

        {!winner && guesses.length === SETTINGS.MAX_GUESSES && (
          <h2>Game Over! The word was {solution}.</h2>
        )}

        {(winner || guesses.length === SETTINGS.MAX_GUESSES) && (
          <button
            onClick={handleNewGame}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              border: "2px solid #888888",
              borderRadius: "10px",
              backgroundColor: winner ? "#0f9e27" : "#cf1111",
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            PLAY AGAIN
          </button>
        )}
      </div>

      <Keyboard onKeyClick={handleInput} usedButtons={usedButtons} />
    </div>
  );
}
