import React from "react";
//import friends from ".../friends.json";

//will need to split this component into two, just the photo & vehicle name, just the miles-price etc, add a third component for "dealer notes"
const DexDetails = props => (
    <div className="content">
      <p align="center"><strong> {props.newused} - {props.vehicle} </strong></p>
      <p align="center"><strong>Miles:</strong> {props.miles} </p>
      <p align="center"><strong>Color:</strong> {props.vehicle_color} </p>
      <p align="center"><strong>Passengers:</strong> 4 </p>
      <p align="center"><strong>Your Price:</strong> {props.price} </p>
    </div>
);

export default DexDetails;
