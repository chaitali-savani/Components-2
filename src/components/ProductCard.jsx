export default function ProductCard({product}) {
  return (
    <div style={{border: '1px solid black', padding: '10px'}}>

      <h3>
        {product.name}
      </h3>
      <p>
       {product.description}
      </p>
      <div className="price">{product.price}</div>
      <img src={product.imageUrl} alt="hp 15" />
      <div className="isInStock">{!product.isInStock && <h6>Unavailable</h6>}</div>
    
      <button>Add to Cart</button>
    </div>
  );
}
