import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import VehicleCard from "./components/VehicleCard";
import Sort from "./components/Sort";
import cards from "./cards.json";

class App extends Component {

  //axios request

  render() {

    const cardComponents = cards.map(card => {
      return (
        <VehicleCard
          vehicle={card.vehicle}
          image={card.image}
          miles={card.miles}
          price={card.price}
          newused={card.newused}
          vehicle_color={card.vehicle_color}
          vehicle_type={card.vehicle_type}
          dealer_notes={card.dealer_notes}
        />
      )
    })

    return (
      <div>
        <Wrapper>
          <Title></Title>
          <Sort />
          {cardComponents}
        </Wrapper>
      </div>
    );
  }
}

export default App;
