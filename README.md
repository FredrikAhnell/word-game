### Word Game: Guess The Word

A word-guessing game built with React. I built this to practice managing game states, handling keyboard inputs, and creating a logic system that checks guesses against a solution.

#### Technical Highlights:

- I moved the game-brain into a separate hook. It handles typing, special keys, and makes sure the game stops when someone wins.
- I wrote a utility function that checks letters in two steps to make sure that if a word has two of the same letters the colors show up correctly.
- The game works with both the buttons on the screen and a normal computer keyboard. I used a useEffect to listen for key presses.
- I kept the games word length, max allowed guesses, word list and some colors in a separate constants folder so I can change the game rules or look easily.

#### Project Structure:

```
src/
 ├── components/    # Letter, LetterRow, and Keyboard
 ├── constants/     # SETTINGS and WORD_LIST
 ├── hooks/         # keyboardUse
 ├── utils/         # gameLogic
 └── App.jsx        # Main Game Logic + Layout
```

#### Install dependencies:

```bash
npm install
```

#### Start development server:

```bash
npm run dev
```
