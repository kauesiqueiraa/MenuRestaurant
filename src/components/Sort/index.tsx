import { useState } from "react";

import styles from "./Sort.module.scss";
import options from "./options.json";
import classNames from "classnames";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface Props {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>
}

export default function Sort({ sort, setSort }: Props) {
  const [open, setOpen] = useState(false);
  const nameSort = sort && options.find(option => option.value === sort)?.name;

  return (
    <button
      className={classNames({
        [styles.sort]: true,
        [styles["sort--active"]]: sort !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameSort || "Ordenar Por"}</span>
      {open ? < MdKeyboardArrowUp size={20} /> : < MdKeyboardArrowDown size={20} />}
      < div
        className={classNames({
          [styles.sort__options]: true,
          [styles["sort__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.sort__option}
            key={option.value}
            onClick={() => setSort(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button >
  );
}