import { FC } from "react";
import { getValidClassNames } from "helpers/get-valid-class-names.helper";
import styles from "./index.module.scss";

interface ButtonProps {
  title: string;
  style?: string;
}

const Button: FC<ButtonProps> = ({ style, title }) => {
  return (
    <button className={getValidClassNames(styles.button, style)}>
      {title}
    </button>
  );
};

export default Button;
