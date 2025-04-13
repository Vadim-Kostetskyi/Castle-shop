import { t } from "i18next";
import { numbers } from "./statistics";
import styles from "./index.module.scss";

const Achievements = () => {
  return (
    <div className={styles.wrapper}>
      {numbers.map(({ text, quantity }) => (
        <div className={styles.item}>
          <p>{quantity}</p>
          <p>{t(text)}</p>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
