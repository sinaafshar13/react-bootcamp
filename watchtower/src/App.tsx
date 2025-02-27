import { ReactNode } from "react";

import "./App.css";
import { Media } from "./types/media";

function App(): ReactNode {
  const media: Media[] = [
    {
      id: "1",
      title: "A million dollar baby",
      description: "this is about a girl who wants to be a boxer ...",
      date: new Date(2005, 1, 14),
      category: "movie",
    },
  ];
  return (
    <>
      <header>Watchtower</header>
      <main>
        <div className="toolbar">
          <input type="text" className="search" />
          <select name="category" id="category">
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="book">Book</option>
          </select>
          <button></button>
        </div>
        <ul className="result"> 
          {media.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
