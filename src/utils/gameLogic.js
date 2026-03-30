export const getLetterStatuses = (guess, solution) => {
  const letters = guess.padEnd(5, " ").split("");
  const upperSolution = solution.toUpperCase().split("");
  const statuses = Array(5).fill("empty");

  letters.forEach((char, i) => {
    if (char.toUpperCase() === upperSolution[i]) {
      statuses[i] = "correct";
      upperSolution[i] = null;
    }
  });

  letters.forEach((char, i) => {
    if (statuses[i] === "correct") return;
    const upperChar = char.toUpperCase();
    const indexOfLetter = upperSolution.indexOf(upperChar);

    if (indexOfLetter !== -1 && char !== " ") {
      statuses[i] = "present";
      upperSolution[indexOfLetter] = null;
    } else if (char !== " ") {
      statuses[i] = "absent";
    }
  });

  return statuses;
};

export const getButtonStatuses = (guesses, solution) => {
  const usedButtons = {};

  guesses.forEach((guess) => {
    const statuses = getLetterStatuses(guess, solution);
    const letters = guess.toUpperCase().split("");

    letters.forEach((char, i) => {
      const newStatus = statuses[i];
      const oldStatus = usedButtons[char];

      if (newStatus === "correct") {
        usedButtons[char] = "correct";
      } else if (newStatus === "present" && oldStatus !== "correct") {
        usedButtons[char] = "present";
      } else if (newStatus === "absent" && !oldStatus) {
        usedButtons[char] = "absent";
      }
    });
  });

  return usedButtons;
};
