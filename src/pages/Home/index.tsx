import itens from "data/itensMenu.json";

import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";

import OurHome from "assets/Home/ourHome.png";

export default function Home() {
  let recommendedDishes = [...itens];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h3 className={stylesTheme.title}>
        Recomendações da Cozinha
      </h3>

      <div className={styles.recommended}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.recommend}>
            <div className={styles.recommend__photo}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button className={styles.recommend__button}>
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