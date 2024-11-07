"use client";

import { useItem } from "@/hooks";
import { MouseEvent, useEffect, useState } from "react";
import styles from "./styles.module.css";
import type { Item } from "@/constants/items";

interface Props {}

function ItemBase({ x, y, width, height, className, name }: Props & Item) {
  const { position, size } = useItem({
    x,
    y,
    width: width || 5,
    height: height || 3,
  });
  const [activePosition, setActivePosition] = useState({ left: "0", top: "0" });
  const [active, setActive] = useState(false);

  const _initMouseMove = (state: Boolean = true) => {
    if (state === true) {
      document.addEventListener("mousemove", (e) => {
        setActivePosition({
          top: e.pageY + "px",
          left: e.pageX - 508 + "px",
        });
      });
    }
  };

  useEffect(() => {
    _initMouseMove();
  }, []);

  const handleOnClick = (e: MouseEvent) => {
    // setActive(!active);
  };

  return (
    <div
      className={`${styles.item} ${active ? styles["item--is-active"] : ""} `}
      style={{
        left: !active ? position.left : activePosition.left,
        top: !active ? position.top : activePosition.top,
        height: size.height,
        width: size.width,
      }}
      onClick={(e) => {
        handleOnClick(e);
      }}
    >
      <div className={className}></div>
    </div>
  );
}

export { ItemBase };
