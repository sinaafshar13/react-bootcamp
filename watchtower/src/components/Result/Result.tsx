import { ReactNode } from "react";

import { Media } from "../../types/media";

import styles from "./Result.module.css";

import Button from "../../module/Button/Button";

import MingcuteEditLine from "../../icons/MingcuteEditLine";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";

type Props = { media: Media[] };

const Result = ({ media }: Props): ReactNode => {
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
              <Button color="primary" variant="ghost" size="small">
                <MingcuteEditLine />
              </Button>
              <Button color="danger" variant="ghost" size="small">
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
