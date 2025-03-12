import { useTranslation } from "react-i18next";
import logo from "assets/Logo.png";
import PhoneCall from "assets/svg/PhoneCall.tsx";
import Heart from "assets/svg/Heart.tsx";
import ShoppingCart from "assets/svg/ShoppingCart.tsx";
import styles from "./index.module.scss";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.promoBox}>
          <span>{t("discountPromo")}</span>
          <span>{t("callback")}</span>
        </div>
        <div>
          <nav>
            <img src={logo} alt="" />
            <a href="">{t("home")}</a>
            <a href="">{t("catalog")}</a>
            <a href="">{t("wholesale")}</a>
            <a href="">{t("aboutUs")}</a>
          </nav>
          <div>
            <PhoneCall className={styles.image} />
            <span className={styles.phoneNumber}>+380967777777</span>
            <Heart className={styles.image} />
            <ShoppingCart className={styles.image} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
