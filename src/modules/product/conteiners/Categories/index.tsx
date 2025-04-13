import { useTranslation } from "react-i18next";
import { categories } from "./data";
import styles from "./index.module.scss";
import Button from "components/Button";

const Categories = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <p>{t("categories.categories")}</p>
      <div>
        {categories.map(({ text, image, image_x2 }) => (
          <div key={text} className={styles.item}>
            <img srcSet={`${image} 1x, ${image_x2} 2x`} alt={text} />
            <p>{t(text)}</p>
          </div>
        ))}
      </div>
      <Button title={t("categories.allCategories")} style={styles.button} />
    </div>
  );
};

export default Categories;
