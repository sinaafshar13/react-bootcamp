import styles from "./AttractionList.module.css";

import { Attractions } from "../../types/attractions";

import { ReactNode } from "react";

import AttractionListItem from "../AttractionListItem/AttractionListItem";

type Props = {
  attractions: Attractions[];
};

const AttractionList = ({ attractions }: Props): ReactNode => {
  return (
    <ul className={styles["attraction-list"]}>
      {attractions.map((attraction) => (
        <AttractionListItem key={attraction.id} attraction={attraction} />
      ))}
    </ul>
  );
};

export default AttractionList;
