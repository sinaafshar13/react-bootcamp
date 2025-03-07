import { ReactNode, useContext } from "react";

import styles from "./Result.module.css";

import Button from "../../module/Button/Button";

import { MediaContext } from "../../context/media-context";

import MingcuteEditLine from "../../icons/MingcuteEditLine";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";

const Result = (): ReactNode => {
  const { removeMedia, media, setEditingMedia } = useContext(MediaContext);

  return (
    <div className={styles.result}>
      <div className={styles.task}>
        <span className={styles["ahead"]}>Ahead</span>
        <span className={styles["completed"]}>Completed</span>
      </div>
      <ul>
        {media.map((item) => (
          <li key={item.id} className={styles.title}>
            <h2>{item.title}</h2>
            <div className={styles.actions}>
              <Button
                onClick={() => setEditingMedia(item)}
                color="primary"
                variant="ghost"
                size="small"
              >
                <MingcuteEditLine />
              </Button>
              <Button
                onClick={() => {
                  removeMedia(item.id);
                }}
                color="danger"
                variant="ghost"
                size="small"
              >
                <MingcuteDelete2Line />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
