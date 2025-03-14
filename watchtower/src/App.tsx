import { ReactNode, useEffect } from "react";

import MediaProvider from "./providers/MediaProvider";

import "./App.css";

import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";
import Create from "./components/Create/Create";
import ThemeProvider from "./providers/ThemeProvider";
import Toaster from "./components/Toaster/Toaster";
import { useTranslation } from "react-i18next";

const App = (): ReactNode => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <MediaProvider>
        <Header />
        <main>
          <Toolbar />
          <Result />
          <Create />
        </main>
        <Toaster />
      </MediaProvider>
    </ThemeProvider>
  );
};

export default App;
