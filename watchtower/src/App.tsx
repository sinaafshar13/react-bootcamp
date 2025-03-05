import { ReactNode } from "react";

import MediaProvider from "./providers/MediaProvider";

import "./App.css";

import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";
import Create from "./components/Create/Create";

const App = (): ReactNode => {
  return (
    <MediaProvider>
      <Header />
      <main>
        <Toolbar />
        <Result />
        <Create />
      </main>
    </MediaProvider>
  );
};

export default App;
