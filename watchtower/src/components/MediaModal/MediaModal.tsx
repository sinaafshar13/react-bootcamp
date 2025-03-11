import {
  forwardRef,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

import styles from "./MediaModal.module.css";

import CreateForm from "../MediaForm/MediaForm";

import { MediaContext } from "../../context/media-context";

export type MediaModalRef = Pick<HTMLDialogElement, "showModal" | "close">;

const MediaModal = forwardRef<MediaModalRef>(
  function MediaModal(_, outerRef): ReactElement {
    const { editingMedia, setEditingMedia } = useContext(MediaContext);

    const innerRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
      if (editingMedia) {
        innerRef.current?.showModal();
      }
    }, [editingMedia]);

    useImperativeHandle(outerRef, () => {
      return {
        showModal: (): void => innerRef.current?.showModal(),
        close: (): void => innerRef.current?.close(),
      };
    });

    const closeModal = () => {
      innerRef.current?.close();
      setEditingMedia(null);
    };

    return (
      <dialog ref={innerRef} className={styles["media-modal"]}>
        {editingMedia && <CreateForm onCancel={closeModal} />}
        {!editingMedia && <CreateForm onCancel={closeModal} />}
      </dialog>
    );
  }
);

export default MediaModal;
