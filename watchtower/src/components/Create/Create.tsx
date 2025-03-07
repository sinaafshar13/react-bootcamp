import { ReactNode, useContext, useEffect, useRef } from "react";

import styles from "./Create.module.css";

import Button from "../../module/Button/Button";
import CreateForm from "../CreateForm/CreateForm";

import MingcuteAddFill from "../../icons/MingcuteAddFill";
import { MediaContext } from "../../context/media-context";

const Create = (): ReactNode => {
  const { editingMedia, setEditingMedia } = useContext(MediaContext);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (editingMedia) {
      dialogRef.current?.showModal();
    }
  }, [editingMedia]);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setEditingMedia(null);
  };

  return (
    <div className={styles.create}>
      <Button onClick={addButtonClickHandler} shape="circle">
        <MingcuteAddFill />
      </Button>
      <dialog ref={dialogRef}>
        {editingMedia && <CreateForm onCancel={closeModal} />}
        {!editingMedia && <CreateForm onCancel={closeModal} />}
      </dialog>
    </div>
  );
};
export default Create;
