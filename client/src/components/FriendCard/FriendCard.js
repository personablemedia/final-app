import React from "react";
import "./FriendCard.css";
//import friends from ".../friends.json";

//will need to split this component into two, just the photo & vehicle name, just the miles-price etc, add a third component for "dealer notes"
const FriendCard = props => (

<div className="card">
    <div className="img-container">
      {/* {props.friends.map(friend => (
        <img alt={friend.vehicle} key={friend.id} src={friend.image} />
      ))} */}
      <img alt={props.vehicle} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
        <strong>Category</strong> {props.newused} - {props.vehicle_type}
        </li>
        <li>
          <strong>Vehicle:</strong> {props.vehicle}
        </li>
        <li>
          <strong>Miles:</strong> {props.miles}
        </li>
        <li>
          <strong>Price:</strong> {props.price}
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
