import { forwardRef, ReactElement, useImperativeHandle, useRef } from "react";

import styles from "./MediaModal.module.css";

import MediaForm from "../MediaForm/MediaForm";

import { Media } from "../../types/media";

type Props = {
  editingMedia?: Media;
};

export type MediaModalRef = Pick<HTMLDialogElement, "showModal" | "close">;

const MediaModal = forwardRef<MediaModalRef, Props>(function MediaModal(
  { editingMedia },
  outerRef
): ReactElement {
  const innerRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(outerRef, () => {
    return {
      showModal: (): void => innerRef.current?.showModal(),
      close: (): void => innerRef.current?.close(),
    };
  });

  const closeModal = () => {
    innerRef.current?.close();
  };

  return (
    <dialog ref={innerRef} className={styles["media-modal"]}>
      <MediaForm
        editingMedia={editingMedia}
        onCancel={closeModal}
      />
    </dialog>
  );
});

export default MediaModal;
