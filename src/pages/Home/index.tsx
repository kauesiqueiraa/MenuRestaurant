import itens from "data/itensMenu.json";
import styles from "./Home.module.scss";

export default function Home() {
  let recommendedDishes = [...itens];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h3 className={styles.title}>
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
    </section>
  );
}