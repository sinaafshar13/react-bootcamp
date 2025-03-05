import { FormEvent, ReactNode, useContext, useRef } from "react";

import { MediaContext } from "../../context/media-context";

import styles from "./CreateForm.module.css";

import TextInput from "../../module/TextInput/TextInput";
import TextArea from "../../module/TextArea/TextArea";
import DateInput from "../../module/DateInput/DateInput";
import Select from "../../module/Select/Select";
import Button from "../../module/Button/Button";

import { Category } from "../../types/category";
import { Media } from "../../types/media";

type Props = {
  onCancel: VoidFunction;
};

const CreateForm = ({ onCancel }: Props): ReactNode => {  

  const { setMedia} = useContext(MediaContext);

  const formRef = useRef<HTMLFormElement>(null);

  const cancelClickHandler = (): void => {
    onCancel();
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const media: Media = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: new Date(formData.get("date") as string),
      category: formData.get("category") as Category,
    };

    setMedia((prevMedia) => [...prevMedia, media]);

    onCancel();
  };

  return (
    <form
      ref={formRef}
      className={styles["create-form"]}
      onSubmit={formSubmitHandler}
    >
      <h3 className={styles.title}>Create a New Source</h3>
      <TextInput
        name="title"
        placeholder="Input your book or media ..."
      ></TextInput>
      <TextArea
        name="description"
        placeholder="Input your description ..."
      ></TextArea>
      <DateInput name="date" />
      <Select
        name="category"
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
          type="button"
          color="danger"
          variant="outlined"
          shape="rectangle"
          size="large"
        >
          Cancel
        </Button>
        <Button type="submit">Apply</Button>
      </div>
    </form>
  );
};

export default CreateForm;
