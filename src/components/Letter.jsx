import { SETTINGS } from "../constants/settings";

export default function Letter({ letter, status }) {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "2px solid #888888",
        borderRadius: "10px",
        backgroundColor: SETTINGS.COLORS[status] || SETTINGS.COLORS.empty,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      {letter.toUpperCase()}
    </div>
  );
}
