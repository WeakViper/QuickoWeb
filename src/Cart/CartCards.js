import demo from '../images/testProduct.jpeg'

const CartCard = () => {
  return (
    <div className="card p-3 d-flex flex-row justify-content-between align-items-center m-3">
      {/* Product Image */}
      <div className="aside" style={{ maxWidth: '20%' }}>
        <img
          src={demo}
          className="img-sm mx-auto d-block"
          alt="Product"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      {/* Product Info */}
      <div className="text-center flex-grow-1">
        <a href="#" className="title text-dark">Some name of item goes here nice</a>
        <div className="price-wrap mt-2">
          <var className="price">$1156.00</var>
        </div>
      </div>

      {/* Quantity Selection and Price Information */}
      <div className="d-flex flex-column align-items-center">
        <select className="form-control mb-2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        {/* Action Buttons */}
        <button className="btn btn-light">
          <i className="fa fa-trash"></i> Remove
        </button>
      </div>
    </div>
  );
}
const CartCards = () => {
  const cartItems = [
    {
      id: 1,
      name: "Item 1",
      price: "$1156.00",
      image: demo,
    },
    {
      id: 2,
      name: "Item 2",
      price: "$950.50",
      image: demo,
    },
    {
      id: 3,
      name: "Item 3",
      price: "$799.99",
      image: demo,
    },
    {
      id: 4,
      name: "Item 4",
      price: "$649.95",
      image: demo,
    },
    {
      id: 5,
      name: "Item 5",
      price: "$299.99",
      image: demo,
    },
    {
      id: 6,
      name: "Item 6",
      price: "$499.50",
      image: demo,
    },
    {
      id: 7,
      name: "Item 7",
      price: "$899.00",
      image: demo,
    },
    {
      id: 8,
      name: "Item 8",
      price: "$349.99",
      image: demo,
    },
    {
      id: 9,
      name: "Item 9",
      price: "$599.00",
      image: demo,
    },
    {
      id: 10,
      name: "Item 10",
      price: "$799.50",
      image: demo,
    },
    // Add more cart items as needed
  ];
  

  return (
    <div>
      {cartItems.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartCards;



