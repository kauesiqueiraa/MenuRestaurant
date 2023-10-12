import { useEffect, useState } from "react";

import Item from "./Item";
import itens from "data/itensMenu.json";

import styles from "./Itens.module.scss";
import { ItensMenu } from "types/Dish";

interface Props {
  search: string;
  filter: number | null;
  sort: string;
}

export default function Itens(props: Props) {
  const [list, setList] = useState(itens);
  const { search, filter, sort } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function order(newList: ItensMenu) {
    switch (sort) {
    case "portion":
      return sortPropsGrowing(newList, "size");
    case "amount_of_peaples":
      return sortPropsGrowing(newList, "serving");
    case "price":
      return sortPropsGrowing(newList, "price");
    default:
      return newList;
    }
  }

  const sortPropsGrowing = (
    list: typeof itens,
    props: "size" | "serving" | "price"
  ) => {
    return list.sort((a, b) => (a[props] > b[props] ? 1 : -1));
  };

  // function order(newList: typeof itens) {
  //   switch (sort) {
  //     case 'portion':
  //       return newList.sort((a, b) => a.size > b.size ? 1 : -1)
  //     case 'amount_of_peaples':
  //       return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)
  //     case 'price':
  //       return newList.sort((a, b) => a.price > b.price ? 1 : -1)
  //     default:
  //       return newList;
  //   }
  // }

  useEffect(() => {
    const newList = itens.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(order(newList));
  }, [search, filter, sort]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        < Item key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}
