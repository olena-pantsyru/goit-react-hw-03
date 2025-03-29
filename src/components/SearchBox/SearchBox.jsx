import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChangeValue }) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
    />
  );
}
