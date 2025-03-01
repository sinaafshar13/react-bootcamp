import { ReactNode, useRef } from "react";

import styles from "./Create.module.css";
import Button from "../../module/Button/Button";
import MingcuteAddFill from "../../icons/MingcuteAddFill";
import TextInput from "../../module/TextInput/TextInput";

const Create = (): ReactNode => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
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
          <TextInput placeholder="Input your book or media"></TextInput>
          <div className={styles.actions}>
            <Button type="submit"  color="danger" variant="outlined" shape="rectangle" size="large">Cancel</Button>
            <Button variant="solid" shape="rectangle" size="large">Apply</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Create;
