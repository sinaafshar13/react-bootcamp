import { ReactNode } from "react";

import styles from "./Create.module.css";
import Button from "../../module/Button/Button";
import MingcuteAddFill from "../../icons/MingcuteAddFill";

const Create = (): ReactNode => {
  return (
    <div className={styles.create}>
      <Button variant="solid" shape="circle">
        <MingcuteAddFill />
      </Button>
    </div>
  );
};

export default Create;
