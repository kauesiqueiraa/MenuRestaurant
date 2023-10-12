import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import DefaultPage from "components/DefaultPage";
import TagsDishes from "components/TagsDishes";

import NotFound from "pages/NotFound";

import itens from "data/itensMenu.json";

import styles from "./Dish.module.scss";

export default function Dish() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dish = itens.find(item => item.id === Number(id));

  if (!dish) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route index element={
          <>
            <button
              className={styles.back}
              onClick={() => navigate(-1)}
            >
              {"< Voltar"}
            </button>

            <section className={styles.container}>
              <h1 className={styles.title}>
                {dish.title}
              </h1>

              <div className={styles.image}>
                <img src={dish.photo} alt={dish.title} />
              </div>

              <div className={styles.content}>
                <p className={styles.content__description}>
                  {dish.description}
                </p>

                <TagsDishes {...dish} />
              </div>
            </section>
          </>
        } />
      </Route>
    </ Routes>
  );
}