import { SETTINGS } from "../constants/settings";
import { getLetterStatuses } from "../utils/gameLogic";
import Letter from "./Letter";

export default function LetterRow({ guess, solution, isSubmitted }) {
  const letters = guess.padEnd(SETTINGS.WORD_LENGTH, " ").split("");
  const statuses = isSubmitted
    ? getLetterStatuses(guess, solution)
    : Array(5).fill("empty");

  return (
    <div style={{ display: "flex", gap: "5px", marginBottom: "5px" }}>
      {letters.map((char, i) => (
        <Letter key={i} letter={char} status={statuses[i]} />
      ))}
    </div>
  );
}
