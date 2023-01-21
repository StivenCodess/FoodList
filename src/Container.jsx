import { useState } from "react";
import List from "./List";
import Form from "./Form";

function Container() {
  const [productFavorite, setProductFavorite] = useState();
  const [show, setShow] = useState("all");

  return (
    <>
      <h2>{show[0].toUpperCase() + show.slice(1)}</h2>
      <List setProductFavorite={setProductFavorite} show={show} setShow={setShow}></List>
      <Form setShow={setShow}></Form>
    </>
  );
}

export default Container;
