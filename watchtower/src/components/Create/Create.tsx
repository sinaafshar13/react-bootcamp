import { ReactNode } from "react";

import styles from "./Create.module.css";

import Button from "../../module/Button/Button";

import MingcuteAddFill from "../../icons/MingcuteAddFill";
import MediaModal from "../MediaModal/MediaModal";

const Create = (): ReactNode => {
  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  return (
    <div className={styles.create}>
      <Button onClick={addButtonClickHandler} shape="circle">
        <MingcuteAddFill />
      </Button>
      <MediaModal />
    </div>
  );
};
export default Create;
