import classNames from "classnames";
import styles from "./TagsDishes.module.scss";
import { Dish } from "types/Dish";

export default function TagsDishes({
  category,
  size,
  serving,
  price
}: Dish) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__type]: true,
        [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
      })}
      >
        {category.label}
      </div>
      <div className={styles.tags__portion}>
        {size}g
      </div>

      <div className={styles.tags__amount_of_peaples}>
        Serve {serving}
        {serving === 1 ? " pessoa" : " pessoas"}
      </div>

      <div className={styles.tags__price}>
        R$ {price.toFixed(2)}
      </div>
    </div>
  );
}