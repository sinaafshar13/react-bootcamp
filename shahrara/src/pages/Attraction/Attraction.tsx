import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Attractions } from "../../types/attractions";

import AttractionSidebar from "./components/AttractionSidebar/AttractionSidebar";
import Carousel from "./components/Carousel/Carousel";
import AttractionBody from "./components/AttractionBody/AttractionBody";

import styles from "./Attraction.module.css"

const Attraction = (): ReactNode => {
  let { id } = useParams();

  const [attraction, setAttraction] = useState<Attractions>();

  useEffect(() => {
    const fetchAttractions = async (): Promise<void> => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/attraction/${id}`
      );
      const data = await response.json();

      setAttraction(data);
    };

    fetchAttractions().then();
  }, [id]);

  console.log(attraction);

  if (!attraction) {
    return <>در حال بارگذاری...</>;
  }

  return (
    <div className={styles.Attraction}>
      <AttractionSidebar attraction={attraction} />
      <Carousel attraction={attraction} />
      <AttractionBody attraction={attraction} />
    </div>
  );
};

export default Attraction;
