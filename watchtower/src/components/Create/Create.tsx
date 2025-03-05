import { ReactNode, useContext, useRef } from "react";

import { MediaContext } from "../../context/media-context";

import styles from "./Create.module.css";

import Button from "../../module/Button/Button";
import CreateForm from "../CreateForm/CreateForm";

import MingcuteAddFill from "../../icons/MingcuteAddFill";

const Create = (): ReactNode => {
  const { setMedia } = useContext(MediaContext);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  return (
    <div className={styles.create}>
      <Button onClick={addButtonClickHandler} shape="circle">
        <MingcuteAddFill />
      </Button>

      <dialog ref={dialogRef}>
        <CreateForm
          onCancel={() => {
            dialogRef.current?.close();
          }}
          setMedia={setMedia}
        ></CreateForm>
      </dialog>
    </div>
  );
};
export default Create;
