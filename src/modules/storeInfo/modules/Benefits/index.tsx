import { t } from "i18next";
import { numbers } from "./statistics";
import { STORENAME } from "utils/constants";
import styles from "./index.module.scss";

const Benefits = () => {
  return (
    <div className={styles.wrapper}>
      <p>{t("why") + " " + STORENAME}?</p>
      {numbers.map(({ text, Image }) => (
        <div className={styles.item}>
          <Image className={styles.image} />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
