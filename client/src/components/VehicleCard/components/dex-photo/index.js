import React from "react";
//import friends from ".../friends.json";

//will need to split this component into two, just the photo & vehicle name, just the miles-price etc, add a third component for "dealer notes"
const DexPhoto = props => (
    <div className="img-container">
      <img className="img-fluid" alt={props.vehicle} src={props.image} />
    </div>
);

export default DexPhoto;
