import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

const FooterInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div>© 2021 Golden Soft All rights reserved.</div>
    </div>
  );
};

export default FooterInfo;
