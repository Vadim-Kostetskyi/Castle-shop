import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div>© 2021 Golden Soft All rights reserved.</div>
    </footer>
  );
};

export default Footer;
