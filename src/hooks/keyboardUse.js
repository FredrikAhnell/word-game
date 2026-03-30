import { useState, useEffect } from "react";

export function keyboardUse(solution, wordLength, maxGuesses) {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [winner, setWinner] = useState(false);

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setWinner(false);
  };

  const handleInput = (key) => {
    if (winner) return;

    const upperKey = key.toUpperCase();

    if (upperKey === "ENTER") {
      if (currentGuess.length === wordLength && guesses.length < maxGuesses) {
        setGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
        setCurrentGuess("");
      }
    } else if (upperKey === "BACKSPACE") {
      setCurrentGuess((currGuess) => currGuess.slice(0, -1));
    } else if (/^[A-Z]$/.test(upperKey) && currentGuess.length < wordLength) {
      setCurrentGuess((currGuess) => currGuess + upperKey);
    }
  };

  useEffect(() => {
    if (guesses.length > 0 && guesses[guesses.length - 1] === solution) {
      setWinner(true);
    }
  }, [guesses, solution]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
      handleInput(e.key);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleInput]);

  return { guesses, currentGuess, winner, resetGame, handleInput };
}
