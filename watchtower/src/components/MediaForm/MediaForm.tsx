import { FormEvent, ReactNode, useContext } from "react";

import { MediaContext } from "../../context/media-context";

import styles from "./MediaForm.module.css";

import TextInput from "../../module/TextInput/TextInput";
import TextArea from "../../module/TextArea/TextArea";
import DateInput from "../../module/DateInput/DateInput";
import Select from "../../module/Select/Select";
import Button from "../../module/Button/Button";

import { Category } from "../../types/category";
import { Media } from "../../types/media";

type Props = {
  editingMedia?: Media;
  onCancel: VoidFunction;
};

const MediaForm = ({ editingMedia, onCancel }: Props): ReactNode => {
  const { createMedia, editMedia } = useContext(MediaContext);

  const cancelClickHandler = (): void => {
    onCancel();
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const media: Media = {
      id: editingMedia?.id ?? crypto.randomUUID(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: new Date(formData.get("date") as string),
      category: formData.get("category") as Category,
    };

    if (editingMedia) {
      editMedia(media);
    } else {
      createMedia(media);
    }

    onCancel();
  };

  return (
    <form className={styles["create-form"]} onSubmit={formSubmitHandler}>
      <h3 className={styles.title}>
        {editingMedia ? "Edit Media" : "Create Media"}
      </h3>
      <TextInput
        name="title"
        placeholder="Input your book or media ..."
        defaultValue={editingMedia?.title}
      ></TextInput>
      <TextArea
        name="description"
        placeholder="Input your description ..."
        defaultValue={editingMedia?.description}
      ></TextArea>
      <DateInput name="date" defaultValue={toDateString(editingMedia?.date)} />
      <Select
        name="category"
        variant="outlined"
        options={[
          { value: "movie", label: "Movie" },
          { value: "series", label: "Series" },
          { value: "book", label: "Book" },
        ]}
        defaultValue={editingMedia?.category}
      ></Select>
      <div className={styles.actions}>
        <Button
          onClick={cancelClickHandler}
          type="button"
          color="danger"
          variant="outlined"
          shape="rectangle"
          size="large"
        >
          Cancel
        </Button>
        <Button type="submit"> {editingMedia ? "Edit" : "Create"}</Button>
      </div>
    </form>
  );
};

export default MediaForm;

function toDateString(date: Date | undefined): string {
  if (!date) {
    return "";
  }

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function pad(text: number): string {
  return text.toString().padStart(2, "0");
}
