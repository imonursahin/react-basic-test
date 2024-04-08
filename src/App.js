import React, { useState } from "react";

const product = {
  id: 1,
  name: "iPhone 15 Pro",
  image: "https://onursahin.net/wp-content/uploads/2022/03/images.png",
  price: 100,
};

function ProductCard() {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const handleRemoveFromCart = () => {
    setCount(0);
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add Cart</button>
      <p>
        <strong>Count: {count}</strong>
      </p>
      {count > 0 && (
        <button onClick={handleRemoveFromCart}>Remove Cart</button>
      )}
    </div>
  );
}

export default ProductCard;