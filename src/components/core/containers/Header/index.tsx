import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className={styles.promoBox}>
        <span className={styles.promo}>{t("discountPromo")}</span>
        <span className={styles.callback}>{t("callback")}</span>
      </div>
      <div>
        <span className={styles.callback}>{t("home")}</span>
        <span className={styles.callback}>{t("catalog")}</span>
        <span className={styles.callback}>{t("wholesale")}</span>
        <span className={styles.callback}>{t("aboutUs")}</span>
      </div>
    </header>
  );
};

export default Header;
