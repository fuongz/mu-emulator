import { Fragment } from "react";
import styles from "./style.module.css";

function Board() {
  return [...Array(8)].map((_, i: number) => (
    <Fragment key={i}>
      {[...Array(8)].map((_, j) => (
        <div key={`board-item-${i}-${j}`} className={styles.boardItem} />
      ))}
    </Fragment>
  ));
}

export { Board };
