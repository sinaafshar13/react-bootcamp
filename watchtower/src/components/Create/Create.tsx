import { ReactNode } from "react";

import styles from "./Create.module.css";
import Button from "../../module/Button/Button";
import MingcuteAddSquareLine from "../../icons/MingcuteAddSquareLine";

const Create = (): ReactNode => {
  return (
    <div className={styles.create}>
      <Button variant="solid" shape="circle">
        <MingcuteAddSquareLine />
      </Button>
    </div>
  );
};

export default Create;
