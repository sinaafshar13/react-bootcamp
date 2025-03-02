import { ReactNode, useRef } from "react";

import styles from "./Create.module.css";
import Button from "../../module/Button/Button";
import MingcuteAddFill from "../../icons/MingcuteAddFill";
import TextInput from "../../module/TextInput/TextInput";
import TextArea from "../../module/TextArea/TextArea";
import DateInput from "../../module/DateInput/DateInput";
import Select from "../../module/Select/Select";

const Create = (): ReactNode => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const cancelClickHandler = (): void => {
    dialogRef.current?.close();
  };
  return (
    <div className={styles.create}>
      <Button
        onClick={addButtonClickHandler}
        variant="solid"
        shape="circle"
        size="large"
      >
        <MingcuteAddFill />
      </Button>

      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <h3 className={styles.title}>Create a New Source</h3>
          <TextInput placeholder="Input your book or media ..."></TextInput>
          <TextArea placeholder="Input your description ..."></TextArea>
          <DateInput />
          <Select
            variant="outlined"
            options={[
              { value: "movie", label: "Movie" },
              { value: "series", label: "Series" },
              { value: "book", label: "Book" },
            ]}
          ></Select>
          <div className={styles.actions}>
            <Button
              onClick={cancelClickHandler}
              type="submit"
              color="danger"
              variant="outlined"
              shape="rectangle"
              size="large"
            >
              Cancel
            </Button>
            <Button variant="solid" shape="rectangle" size="large">
              Apply
            </Button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Create;
