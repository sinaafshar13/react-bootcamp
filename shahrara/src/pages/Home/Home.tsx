import { ReactElement, useEffect, useState } from "react";
import AttractionList from "../../components/AttractionList/AttractionList";

const Home = (): ReactElement => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttraction = async (): Promise<void> => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/attraction`
      );
      const data = await response.json();
      setAttractions(data);
    };
    fetchAttraction().then;
  }, []);
  return (
    <>
      <AttractionList attractions={attractions} />
    </>
  );
};

export default Home;
