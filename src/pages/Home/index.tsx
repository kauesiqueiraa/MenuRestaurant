import itens from "data/itensMenu.json";

import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";

import OurHome from "assets/Home/ourHome.png";
import { useNavigate } from "react-router-dom";
import { Dish } from "types/Dish";

export default function Home() {
  let recommendedDishes = [...itens];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);

  const navigate = useNavigate();

  function redirectToDetals(dish: Dish) {
    navigate(`/dish/${dish.id}`, { state: { ...dish } });
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>
        Recomendações da Cozinha
      </h3>

      <div className={styles.recommended}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.recommend} onClick={() => redirectToDetals(item)}>
            <div className={styles.recommend__photo}>
              <img src={item.photo} alt={item.title} />
            </div>

            <div>
              <h1 className={styles.recommend__title}>{item.title}</h1>
            </div>

            <button
              className={styles.recommend__button}
              onClick={() => redirectToDetals(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>
        Nossa Casa
      </h3>

      <div className={styles.ourHome}>
        <img src={OurHome} alt="Casa do Nosso Restaurante Aluroni" />
        <div className={styles.ourHome__adress}>
          Av. Rei Pelé, n°0101 <br /> <br /> Centro - Tres Corações - MG
        </div>
      </div>
    </section>
  );
}