import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className = "cart-container">
      <img className = "cart-icon" src="https://res.cloudinary.com/dqkq5gmcw/image/upload/v1669666928/bag%20store/5a364b752c0633.9984354215135077011803_zmc6ia.png" />
      <p className="cart-numero">3</p>
    </div>
  );
};

export default CartWidget;
