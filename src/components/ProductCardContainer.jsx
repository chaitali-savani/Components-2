import ProductCard from "./ProductCard";

export default function ProductCardContainer({products}) {
  return (
    <>
      {console.log(products)}
      <h1>Discover Your Favorites</h1>
      {products.map((product)=><ProductCard product={product}/>)}
    </>
  );
}
