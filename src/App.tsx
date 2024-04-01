import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import { useEffect } from "react";
import DOMPurify from "dompurify";

const languages = [
  {
    code: "en",
    lang: "English",
  },
  {
    code: "ar",
    lang: "Arabic",
  },
];

function App() {
  const { t, i18n } = useTranslation();
  const { main } = t("des");

  const onLangChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <>
      {languages.map((item) => (
        <button
          style={{ margin: 4, backgroundColor: "black", color: "white" }}
          key={item.code}
          onClick={() => onLangChange(item.code)}
        >
          {item.lang}
        </button>
      ))}
      <h2>{t("text")}</h2>
      <h5>{main}</h5>
      {/* <h6>{t("greeting", { name: "Sourabh" })}</h6> */}
      <div
        dangerouslySetInnerHTML={{ __html: t("greeting", { name: "Sourabh" }) }}
      ></div>
      <h2>
        <Trans
          i18nKey="greeting"
          values={{ name: "Sourabh" }}
          components={{ strong: <span /> }}
        ></Trans>
      </h2>
    </>
  );
}

export default App;
