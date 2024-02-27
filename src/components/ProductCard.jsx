export default function ProductCard({name,description,price,imageUrl,isInstock}) {
  return (
    <>
      <h3>
        {name}
      </h3>
      <p>
       {description}
      </p>
      <div className="price">{price}</div>
      <img src={imageUrl} alt="hp 15" />
      <div className="isInStock">{!isInstock && <h6>Unavailable</h6>}</div>
      <button>Add to Cart</button>
    </>
  );
}
