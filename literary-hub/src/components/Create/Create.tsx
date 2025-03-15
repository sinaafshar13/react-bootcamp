import { ReactNode, useRef } from "react";

import styles from "./Create.module.css";

import Button from "../../module/Button/Button";

import MingcuteAddFill from "../../icons/MingcuteAddFill";
import MediaModal from "../MediaModal/MediaModal";

const Create = (): ReactNode => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  return (
    <div className={styles.create}>
      <Button onClick={addButtonClickHandler} shape="circle">
        <MingcuteAddFill />
      </Button>
      <MediaModal ref={dialogRef} />
    </div>
  );
};
export default Create;
