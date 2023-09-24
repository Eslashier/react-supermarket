import Product from "../organisms/product";
import "./products-styles.css";

const info = [
  {
    id: "an id",
    name: "Leche",
    price: "7000",
    stock: "20",
    uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
  },
  {
    id: "an id2",
    name: "Leche",
    price: "7000",
    stock: "30",
    uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
  },
  {
    id: "an id3",
    name: "Leche",
    price: "7000",
    stock: "20",
    uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
  },
  {
    id: "an id4",
    name: "Leche",
    price: "7000",
    stock: "30",
    uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
  },
  {
    id: "an id5",
    name: "Leche",
    price: "7000",
    stock: "20",
    uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
  },
  {
    id: "an id6",
    name: "Leche",
    price: "7000",
    stock: "30",
    uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
  },
];

const Products = () => {
  return (
    <>
      <div className="body">
        <div className="products">
          {info.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
