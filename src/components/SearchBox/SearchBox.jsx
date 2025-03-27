import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

export default function SearchBox({ filter, setFilter }) {
  return (
    <div className={css.searchBox}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search..."
        />
      </label>
    </div>
  );
}

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};