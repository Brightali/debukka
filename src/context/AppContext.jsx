import { createContext, useState, useEffect, useMemo } from "react";
import { foods } from "../constants/mockApi";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = "NGN";
  const deliveryFee = 1500;

  const [total, setTotal] = useState(0);
  const [cashback, setCashback] = useState(1000);
  const [subtotal, setSubtotal] = useState(0);
  const [loggedin, setLoggedin] = useState(false);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState(() => {
    const savedItems = window.localStorage.getItem("CART_ITEMS");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const allFoodItems = useMemo(() => {
    return foods
      .slice()
      .map((category) => {
        const key = Object.keys(category)[0];
        return category[key].items;
      })
      .flat();
  }, [foods]);

  const addToCart = (itemid) => {
    const itemToAdd = allFoodItems.find((item) => item.id === itemid);
    const itemInCart = cartItem.find((cartItem) => cartItem.id === itemid);

    setCartItem((prevCartItems) => {
      if (itemInCart) {
        return prevCartItems;
      } else {
        return [...prevCartItems, { ...itemToAdd, quantity: 1 }];
      }
    });

    if (itemInCart) {
      toast.error("Item already in Cart", {
        autoClose: 1500,
        position: "top-right",
        theme: "light",
        hideProgressBar: true,
      });
    }
  };

  const removeFromCart = (itemid) => {
    const remainingItems = cartItem.filter((item) => item.id !== itemid);
    setCartItem(remainingItems);
  };

  const increaseItemQuantity = (itemid) => {
    setCartItem((prev) => {
      return prev.map((item) => {
        if (item.id === itemid) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    });
  };

  const decreaseItemQuantity = (itemid) => {
    setCartItem((prev) => {
      return prev.map((item) => {
        if (item.id === itemid) {
          if (item.quantity === 1) {
            return item;
          }
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });
    });
  };

  useEffect(() => {
    let subTotalPrice = 0;

    for (const item of cartItem) {
      subTotalPrice += item.price * item.quantity;
    }
    setSubtotal(subTotalPrice);
  }, [cartItem]);

  useEffect(() => setTotal(subtotal + deliveryFee - cashback), [subtotal]);

  useEffect(() => {
    window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItem));
  }, [cartItem]);

  const value = {
    foods,
    currency,
    deliveryFee,
    loggedin,
    setLoggedin,
    setSearch,
    search,
    allFoodItems,
    cartItem,
    setCartItem,
    cartOpen,
    setCartOpen,
    addToCart,
    removeFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    total,
    subtotal,
    cashback,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
