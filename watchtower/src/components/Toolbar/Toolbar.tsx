import { ReactNode } from "react";

import TextInput from "../../module/TextInput/TextInput";
import Select from "../../module/Select/Select";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import Button from "../../module/Button/Button";

const Toolbar = (): ReactNode => {
  return (
    <div className="toolbar">
      <TextInput placeholder="search ..." suffixIcon={<MingcuteSearchLine />} />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "movie", label: "Movie" },
          { value: "series", label: "Series" },
          { value: "book", label: "Book" },
        ]}
      ></Select>
      <Button variant="solid" size="medium" shape="square">
        <MingcuteSearchLine />
      </Button>
    </div>
  );
};

export default Toolbar;
