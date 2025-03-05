import { ReactNode, useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";
import Create from "./components/Create/Create";

import { Media } from "./types/media";
import { MediaContext } from "./context/media-context";



const App = (): ReactNode => {
  const [media, setMedia] = useState<Media[]>([
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
  ]);
  return (
    <MediaContext.Provider value={{media , setMedia}}>
      <Header />
      <main>
        <Toolbar />
        <Result />
        <Create />
      </main>
    </MediaContext.Provider>
  );
};

export default App;
