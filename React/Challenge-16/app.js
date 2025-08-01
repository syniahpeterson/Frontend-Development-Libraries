const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {items: 0}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShoppingCart />);