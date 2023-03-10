const addToCart = (prevCart, productId) => {
  const newCart = {
    ...prevCart,
    [productId]: {
      productCount: (prevCart[productId]?.productCount || 0) + 1,
    },
  };
  return newCart;
};

const removeFromCart = (prevCart, productId) => {
  if (prevCart[productId]) {
    if (prevCart[productId].productCount > 1) {
      const updatedProductCount = prevCart[productId].productCount - 1;
      const updatedCart = {
        ...prevCart,
        [productId]: {
          productCount: updatedProductCount,
        },
      };
      return updatedCart;
    } else {
      const { [productId]: deletedProduct, ...newCart } = prevCart;
      return newCart;
    }
  } else {
    return prevCart;
  }
};

const getFilteredProducts = (products, selectedCategory) => {
  return products.filter((product) => product.categoryId === selectedCategory);
};

const calculateCartDetails = (cart, products) => {
  let totalCartCost = 0;
  for (let productId in cart) {
    const product = products.find(
      (product) => product.productId === parseInt(productId)
    );
    totalCartCost += cart[productId].productCount * product.discountedPrice;
  }

  const cartQuantity = Object.keys(cart).reduce((acc, productId) => {
    return acc + cart[productId].productCount;
  }, 0);

  return { cartQuantity, totalCartCost };
};

export { addToCart, removeFromCart, getFilteredProducts, calculateCartDetails };
