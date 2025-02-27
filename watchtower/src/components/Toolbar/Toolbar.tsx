import { ReactNode } from "react";

const Toolbar = (): ReactNode => {
  return (
    <div className="toolbar">
      <input type="text" className="search" />
      <select name="category" id="category">
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="book">Book</option>
      </select>
      <button></button>
    </div>
  );
};

export default Toolbar;
