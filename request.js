import React, { useState } from "react";
import fakedata from "../Fakedata/Friends.json";
import Details from "../Details/Details";
import Cart from "../Cart/Cart";
import "./Request.css";

const Request = () => {
  const require = fakedata;
  const [friends, setFriends] = useState(require);
  const [cart, setCart] = useState([]);

  const handleAddFriend = (detail) => {
    const newCart = [...cart, detail];
    setCart(newCart);
  };

  return (
    <div className="request-container">
      <div className="friend-container">
        {friends.map((fs) => (
          <Details handleAddFriend={handleAddFriend} detail={fs}></Details>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Request;
