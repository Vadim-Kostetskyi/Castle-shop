import { useTranslation } from "react-i18next";
import { data } from "./data";
import styles from "./index.module.scss";

const FooterInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div></div>
      <ul>
        {data.map(({ title, text, subtitles }, index) =>
          index ? (
            subtitles ? (
              <li>
                <p>{t(title)}</p>
                {subtitles.map(({ subtitle, text }) => (
                  <>
                    <p>{t(subtitle)}</p>
                    {text.map((item) => (
                      <p>{item}</p>
                    ))}
                  </>
                ))}
              </li>
            ) : (
              <li>
                <p>{t(title)}</p>
                {text ? text.map((item) => <p>{t(item)}</p>) : null}
              </li>
            )
          ) : (
            <li>
              <nav>
                <p>{t(title)}</p>
                {text ? text.map((item) => <a href="#">{t(item)}</a>) : null}
              </nav>
            </li>
          )
        )}
      </ul>
      <p>© 2021 Golden Soft All rights reserved.</p>
    </div>
  );
};

export default FooterInfo;
