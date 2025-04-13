import { useTranslation } from "react-i18next";
import { numbers } from "./statistics";
import { STORENAME } from "utils/constants";
import styles from "./index.module.scss";

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <p>{t("benefits.why") + " " + STORENAME}?</p>
      {numbers.map(({ text, Image }) => (
        <div key={text} className={styles.item}>
          <Image className={styles.image} />
          <p>{t(text)}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
