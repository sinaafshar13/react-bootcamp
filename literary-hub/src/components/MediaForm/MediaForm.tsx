import { FormEvent, ReactNode, useContext, useEffect, useState } from "react";

import { MediaContext } from "../../context/media-context";

import styles from "./MediaForm.module.css";

import TextInput from "../../module/TextInput/TextInput";
import TextArea from "../../module/TextArea/TextArea";
import DateInput from "../../module/DateInput/DateInput";
import Select from "../../module/Select/Select";
import Button from "../../module/Button/Button";

import { Media } from "../../types/media";
import { toast } from "react-toastify";
import { MODAL_CONTAINER_ID } from "../../constants/id";
import { useTranslation } from "../../../node_modules/react-i18next";

type Props = {
  editingMedia?: Media;
  onCancel: VoidFunction;
};

const MediaForm = ({ editingMedia, onCancel }: Props): ReactNode => {
  const { createMedia, editMedia } = useContext(MediaContext);

  const { t } = useTranslation();

  const [media, setMedia] = useState<Media>(generateEmptyMedia());

  const cancelClickHandler = (): void => {
    onCancel();
  };

  useEffect(() => {
    setMedia(editingMedia ? { ...editingMedia } : generateEmptyMedia());
  }, [editingMedia]);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!media.title) {
      toast.error("Title is required", { containerId: MODAL_CONTAINER_ID });
      return;
    }
    if (!media.description) {
      toast.error("Description is required", {
        containerId: MODAL_CONTAINER_ID,
      });
      return;
    }
    if (!media.date) {
      toast.error("Date is required", { containerId: MODAL_CONTAINER_ID });
      return;
    }
    if (!media.category) {
      toast.error("Category is required", { containerId: MODAL_CONTAINER_ID });
      return;
    }
    if (editingMedia) {
      editMedia(media);
    } else {
      createMedia(media);
    }

    setMedia(generateEmptyMedia());

    onCancel();
  };

  return (
    <form className={styles["create-form"]} onSubmit={formSubmitHandler}>
      <h3 className={styles.title}>
        {editingMedia
          ? t("media.create.edit", { title: editingMedia.title })
          : t("media.create.title")}
      </h3>
      <TextInput
        name="title"
        placeholder={t("media.form.title.placeholder")}
        value={media.title}
        onChange={(e) =>
          setMedia((old) => ({ ...old, [e.target.name]: e.target.value }))
        }
      ></TextInput>
      <TextArea
        name="description"
        placeholder={t("media.form.description.placeholder")}
        value={media.description}
        onChange={(e) =>
          setMedia((old) => ({ ...old, [e.target.name]: e.target.value }))
        }
      ></TextArea>
      <DateInput
        name="date"
        value={media.date}
        onChange={(e) =>
          setMedia((old) => ({ ...old, [e.target.name]: e.target.value }))
        }
      />
      <Select
        name="category"
        variant="outlined"
        options={[
          { value: "movie", label: t("media.form.category.movie") },
          { value: "series", label: t("media.form.category.series") },
          { value: "book", label: t("media.form.category.book") },
        ]}
        value={media.category}
        onChange={(e) =>
          setMedia((old) => ({
            ...old,
            [e.target.name]: e.target.value,
          }))
        }
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
          {t("media.actions.cancel")}
        </Button>
        <Button type="submit">
          {" "}
          {editingMedia
            ? t("media.actions.confirm")
            : t("media.actions.create")}
        </Button>
      </div>
    </form>
  );
};

export default MediaForm;

function generateEmptyMedia(): Media {
  return {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    date: "",
    category: "movie",
  };
}
