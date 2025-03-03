import { ReactNode } from "react";

import { Media } from "../../types/media";

import styles from "./Result.module.css";

import Button from "../../module/Button/Button";

import MingcuteEditLine from "../../icons/MingcuteEditLine";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";

const media: Media[] = [
  {
    id: "1",
    title: "A million dollar baby",
    description: "this is about a girl who wants to be a boxer ...",
    date: new Date(2005, 1, 14),
    category: "movie",
  },
  {
    id: "2",
    title: "Mulholland drive",
    description: "this is about a girl who wants to be a boxer ...",
    date: new Date(2005, 1, 14),
    category: "movie",
  },
  {
    id: "3",
    title: "Better call Saul",
    description: "this is about a girl who wants to be a boxer ...",
    date: new Date(2005, 1, 14),
    category: "series",
  },
];

const Result = (): ReactNode => {
  return (
    <div className={styles.result}>
      <div className={styles.task}>
        <span className={styles["ahead"]}>Ahead</span>
        <span className={styles["completed"]}>Completed</span>
      </div>
      <ul>
        {media.map((item) => (
          <li className={styles.title}>
            <h2>{item.title}</h2>
            <div className={styles.actions}>
              <Button color="primary" variant="ghost" size="small">
                <MingcuteEditLine/>
              </Button>
              <Button  color="danger" variant="ghost" size="small" >
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
