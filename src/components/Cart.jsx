import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { removeFromCartIcon } from "../assets/images";

const Cart = () => {
  const {
    cartOpen,
    setCartOpen,
    cartItem,
    removeFromCart,
    currency,
    increaseItemQuantity,
    decreaseItemQuantity,
    deliveryFee,
    total,
    subtotal,
    cashback,
  } = useContext(AppContext);

  return (
    <>
      <div
        onClick={() => setCartOpen((prev) => !prev)}
        className={`w-dvw h-dvh fixed bg-black/90 bottom-o left-0 z-30 ${
          cartOpen ? "" : "hidden pointer-events-none"
        }`}
      ></div>
      <div
        className={`overflow-y-auto noScrollbar fixed h-[90%] rounded-t-3xl w-dvw left-0 bottom-0 max-w-[620px] min-h-[400px] p-6  bg-white z-40 ${
          cartOpen ? "slide-in" : "slide-out"
        } `}
      >
        {cartItem.length > 0 ? (
          cartItem.map((item) => (
            <div
              key={item.name}
              className="py-2  my-2 rounded-xl px-4 border-b border-b-gray-400  "
            >
              <div className="flex gap-3 justify-between items-center py-2 ">
                <div className="flex items-center gap-2 pb-4 ">
                  <div className="w-[60px] min-w-[60px] min-h-[60px]  h-[60px] rounded-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs max-w-[80%]">{item.description}</p>
                  </div>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  <img src={removeFromCartIcon} alt="" width={30} />
                </button>
              </div>

              <div className="flex gap-2 justify-between items-center pb-2 ">
                <p className="text-main_red font-semibold">{`${currency} ${
                  item.price * item.quantity
                }`}</p>

                <div className="flex gap-4 items-center p-1 bg-gray-200 rounded-full">
                  <span
                    onClick={() => decreaseItemQuantity(item.id)}
                    className=" w-6 h-6 grid place-items-center rounded-sm"
                  >
                    -
                  </span>
                  <span className="font-semibold">{item.quantity}</span>
                  <span
                    onClick={() => increaseItemQuantity(item.id)}
                    className=" w-6 h-6 grid place-items-center rounded-sm"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>opps there is no meal here</p>
        )}

        {subtotal > 0 && (
          <div className="mt-32 w-[95%] py-4 px-4 bg-main_red mx-auto rounded-xl">
            <div className="px-3 text-white">
              <div className="flex justify-between">
                <span>Sub-Total</span>
                <span>{`${currency} ${subtotal}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>{`${currency} ${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Cashback</span>
                <span>- {`${currency} ${cashback}`}</span>
              </div>
              <div className="flex justify-between font-bold mt-4">
                <span>Total</span>
                <span>{`${currency} ${total}`}</span>
              </div>
            </div>

            <button className="w-full h-12 rounded-xl font-bold text-main_red bg-white mt-8">
              Place My Order
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
