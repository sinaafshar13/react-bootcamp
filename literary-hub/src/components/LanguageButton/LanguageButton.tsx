import { ReactNode } from "react";
import { useTranslation } from "../../../node_modules/react-i18next";

import Button from "../../module/Button/Button";

import IonMdGlobe from "../../icons/IonMdGlobe";

const LanguageButton = (): ReactNode => {
  const { i18n } = useTranslation();

  return (
    <Button
      variant="solid"
      size="large"
      shape="square"
      onClick={() => i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa")}
    >
      <IonMdGlobe />
    </Button>
  );
};

export default LanguageButton;
