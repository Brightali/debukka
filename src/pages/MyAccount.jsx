import { useState } from "react";

const MyAccount = () => {
  const [order, setOrder] = useState("active");

  return (
    <div className="frame">
      <div className="inner-frame min-h-[700px]">
        <h2 className="text-2xl font-bold">My Orders</h2>
      </div>
    </div>
  );
};

export default MyAccount;
