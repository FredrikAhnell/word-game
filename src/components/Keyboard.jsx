import { SETTINGS } from "../constants/settings";

const BUTTONROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

export default function Keyboard({ onKeyClick, usedButtons = {} }) {
  const getKeyColor = (key) => {
    const status = usedButtons[key.toUpperCase()];
    return SETTINGS.COLORS[status] || "#6a696d";
  };

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {BUTTONROWS.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", gap: "6px" }}>
          {row.map((key) => (
            <button
              key={key}
              onClick={(e) => {
                onKeyClick(key);
                e.currentTarget.blur();
              }}
              style={{
                padding: key.length > 1 ? "15px 10px" : "15px 15px",
                minWidth: key.length > 1 ? "70px" : "50px",
                border: "2px solid #888888",
                borderRadius: "10px",
                backgroundColor: getKeyColor(key),
                color: "white",
                fontSize: "0.8rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
