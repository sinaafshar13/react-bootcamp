import { Dispatch, ReactNode, SetStateAction, useRef } from "react";

import styles from "./Create.module.css";

import Button from "../../module/Button/Button";
import CreateForm from "../CreateForm/CreateForm";

import MingcuteAddFill from "../../icons/MingcuteAddFill";

import { Media } from "../../types/media";

type Props = {
  setMedia: Dispatch<SetStateAction<Media[]>>;
};

const Create = ({ setMedia }: Props): ReactNode => {
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
          onSubmit={() => {
            dialogRef.current?.close();
          }}
          setMedia={setMedia}
        ></CreateForm>
      </dialog>
    </div>
  );
};
export default Create;
