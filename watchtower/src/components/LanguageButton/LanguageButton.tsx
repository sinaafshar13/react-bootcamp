import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../module/Button/Button";

import IcRoundTranslate from "../../icons/IcRoundTranslate";

const LanguageButton = (): ReactNode => {
  const { i18n } = useTranslation();

  return (
    <Button
      variant="solid"
      size="large"
      shape="square"
      onClick={() => i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa")
      }
    >
      <IcRoundTranslate />
    </Button>
  ); 
};

export default LanguageButton;
