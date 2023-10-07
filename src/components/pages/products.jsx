import { useEffect, useState } from "react";
import Product from "../organisms/product";
import "./products-styles.css";
import { useSelector } from "react-redux";
import { getProducts } from "../../actions/users/get-products";
import { useAppDispatch } from "../../state/store";

const Products = () => {
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(false);
  const [page, setPage] = useState(1);
  const items = useSelector((state) => state.products.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts({ page }));
  }, [dispatch, page, setPage, previous]);

  useEffect(() => {
    if (items.length < 20) {
      setNext(false);
    } else {
      setNext(true);
    }
    if (page === 1) {
      setPrevious(false);
    }
  }, [items, page]);

  if (items.length === 0) {
    return (
      <div className="body">
        <h1>No se han encontrado productos</h1>
      </div>
    );
  }

  const OnNext = () => {
    const nextPage = page + 1;
    setPrevious(true);
    setPage(nextPage);
  };

  const OnPrevious = () => {
    setPage(page - 1);
  };

  return (
    <>
      <div className="body">
        <div className="page">
          <div className="products">
            {items.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
          <div className="pagination-buttons">
            {previous && (
              <button className="ok-button" onClick={OnPrevious}>
                Anterior
              </button>
            )}
            {next && (
              <button className="ok-button" onClick={OnNext}>
                Siguiente
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
