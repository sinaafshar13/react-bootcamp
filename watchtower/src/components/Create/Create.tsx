import { ReactNode } from "react";

import styles from "./Create.module.css";
import Button from "../../module/Button/Button";

const Create = (): ReactNode => {
  return (
    <div className={styles.create}>
      <Button variant="solid" shape="circle"></Button>
    </div>
  );
};

export default Create;
