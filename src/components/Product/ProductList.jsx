import ProductsItem from './ProductsItem';
import products from '../../assets/data/products'; // Import danych produktów
import './Product.scss'

const ProductList = () => {
  return (
    <>
      {products?.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
