import React from "react";
//import friends from ".../friends.json";

//will need to split this component into two, just the photo & vehicle name, just the miles-price etc, add a third component for "dealer notes"
const DexNotes = props => (

    <div className="content">
      <h3 align="center">Dealer Notes</h3> 
      <p align="center">{props.dealer_notes}</p>
    </div>

);

export default DexNotes;
