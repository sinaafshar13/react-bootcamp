import { ReactNode } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";



const App = (): ReactNode => {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
    </>
  );
};

export default App;
