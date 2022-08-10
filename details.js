import React from "react";
import "./Details.css";

const Details = (props) => {
  
  return (
    <div  className="friends-container">
      <div>
        <img src={props.detail.img} alt=""/>
      </div>
      <div>
        <h3>{props.detail.name}</h3>
        <h5>Email: {props.detail.email}</h5>
        <button onClick={() => props.handleAddFriend(props.detail)}
        className="main-button">Add Friend</button>
      </div>
    </div>
  );
};

export default Details;