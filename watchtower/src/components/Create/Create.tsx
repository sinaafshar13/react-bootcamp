import { ReactNode, useRef } from "react";

import styles from "./Create.module.css";

import Button from "../../module/Button/Button";
import TextInput from "../../module/TextInput/TextInput";
import TextArea from "../../module/TextArea/TextArea";
import DateInput from "../../module/DateInput/DateInput";
import Select from "../../module/Select/Select";

import MingcuteAddFill from "../../icons/MingcuteAddFill";

const Create = (): ReactNode => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const applyButtonClickHandler = () : void => {
    const formData = new FormData(formRef.current!)

    console.log(formData.get("title"));
  }
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
        <form ref={formRef} className={styles.content}>
          <h3 className={styles.title}>Create a New Source</h3>
          <TextInput name ="title" placeholder="Input your book or media ..."></TextInput>
          <TextArea name="descrption" placeholder="Input your description ..."></TextArea>
          <DateInput name="date"/>
          <Select name="category"
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
            <Button type="button" onClick={applyButtonClickHandler}> 
              Apply
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Create;


