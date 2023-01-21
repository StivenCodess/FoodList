import products from "./data";
import Item from "./Item";

function List({ show, setProductFavorite }) {
  let productsFiltered = [];

  switch (show) {
    case "all":
      productsFiltered = products;
      break;
    case "fruits":
      const fruits = products.filter((product) => product.isFruit);
      productsFiltered = fruits;
      break;
    case "vegetables":
      const vegetables = products.filter((product) => !product.isFruit);
      productsFiltered = vegetables;

      break;
    case "favorites":
      const favorite = products.filter((product) => product.fav);
      productsFiltered = favorite;
      break;
    default:
      null;
      break;
  }

  return (
    <>
      <hr />
      <ul>
        {productsFiltered.length > 0 ? (
          productsFiltered.map((product) => {
            return (
              <Item
                key={product.id}
                product={product}
                index={product.id}
                setProductFavorite={setProductFavorite}
                productsFiltered={productsFiltered}
              ></Item>
            );
          })
        ) : (
          <h3>No Hay Favoritos 😥</h3>
        )}
      </ul>
      <hr />
    </>
  );
}

export default List;

//$ TENGO UN ARRAY DE PRODUCTOS, QUIERO CAMBIAR EL VALOR DE UNA PROPIEDAD
//$ SPREAD OPERATOR ME COPIA LA LISTA DE PRODUCTOS CON LOS ...
//$ HAGO UN OBJETO QUE TENGA LAS CARACTERISTICAS QUE TENGA EL PRODUCTO QUE RECIBI
//$ CON LA COMA LE DIGO LO QUE QUIERO REMPLAZAR, O LO QUE SE SOBRESCRIBIRIA
// show === "favorites" ? "lifav" : ""
