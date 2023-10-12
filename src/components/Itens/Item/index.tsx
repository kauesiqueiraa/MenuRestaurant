import styles from "./Item.module.scss";

import { Dish } from "types/Dish";
import TagsDishes from "components/TagsDishes";
import { useNavigate } from "react-router-dom";

export default function Item(props: Dish) {
  const { id, photo, title, description } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
      <div className={styles.item__photo}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <TagsDishes {...props} />
      </div>
    </div>
  );
}