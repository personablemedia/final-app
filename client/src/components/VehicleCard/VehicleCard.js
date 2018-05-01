import React from "react";
import "./VehicleCard.css";
import DexDetails from './components/dex-details';
import DexPhoto from './components/dex-photo';
import DexNotes from './components/dex-notes';
//import friends from ".../friends.json";

//will need to split this component into two, just the photo & vehicle name, just the miles-price etc, add a third component for "dealer notes"
const VehicleCard = props => ( 
      <div className="container">
        <div className="row">
          <div className="col-md-4">
              <DexPhoto 
                vehicle={props.vehicle}
                image={props.image}
              />
          </div>
          <div className="col-md-4">
              <DexDetails 
                vehicle={props.vehicle}
                newused={props.newused}
                vehicle_type={props.vehicle_type}
                vehicle_color={props.vehicle_color}
                miles={props.miles}
                price={props.price}
              />
          </div>
          <div className="col-md-4">
              <DexNotes 
                dealer_notes={props.dealer_notes}
              />
          </div>
        </div>
      </div>
);

export default VehicleCard;
