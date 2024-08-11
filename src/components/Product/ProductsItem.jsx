import { Link } from "react-router-dom"


function ProductsItem({ product }) {
  return (
    <Link to="#" className="main-product-item">
      <div className="main-product-item__img">
        <img src={product.imgUrl} alt={product.productName} />
      </div>
      <div className="main-product-item__text">
        <div className="main-product-item__text-name">{product.productName}</div>
        <div className="main-product-item__text-price">{product.price} PLN</div>
      </div>
    </Link>
  );
}



export default ProductsItem;


