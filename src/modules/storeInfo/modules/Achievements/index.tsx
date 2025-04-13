import { useTranslation } from "react-i18next";
import { numbers } from "./statistics";
import styles from "./index.module.scss";

const Achievements = () => {
  const { t } = useTranslation();
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
