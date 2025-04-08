import { useTranslation } from "react-i18next";
import Heart from "assets/svg/Heart.tsx";
import ShoppingCart from "assets/svg/ShoppingCart.tsx";
import HeaderNavigation from "modules/core/components/HeaderNavigation";
import styles from "./index.module.scss";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.promoBox}>
          <span>{t("discountPromo")}</span>
        </div>
        <div>
          <HeaderNavigation />
          <div>
            <button className={styles.button}>
              <Heart className={styles.image} />
            </button>
            <button className={styles.button}>
              <ShoppingCart className={styles.image} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
