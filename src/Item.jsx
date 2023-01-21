import { useState } from "react";
const Item = ({ product, setProductFavorite, productsFiltered }) => {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
    setProductFavorite(
      productsFiltered.map((productito) => {
        if (productito.id === product.id) {
          productito.fav = !productito.fav;
          return productito;
        } else {
          return productito;
        }
      })
    );
    setTimeout(() => {
      setActive(active);
    }, 800);
  }
  return (
    <li onClick={handleClick} className={active ? "livclick" : null}>
      {product.title} <span> {product.emoji}</span>
    </li>
  );
};

export default Item;
