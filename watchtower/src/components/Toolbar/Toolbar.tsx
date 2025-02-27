import { ReactNode } from "react";

import TextInput from "../../module/TextInput/TextInput";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";

const Toolbar = (): ReactNode => {
  return (
    <div className="toolbar">
      <TextInput placeholder="search ..." suffixIcon={<MingcuteSearchLine />} />
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
