import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import VehicleCard from "./components/VehicleCard";
import Sort from "./components/Sort";
import cards from "./cards.json";

class App extends Component {

  //axios request

  state = {
    filteredCars : [...cards],
  };

  filterCars = (arg) => {
    console.log(arg);

    // if (arg1 === "new" && arg2 === )

    switch(arg) {
      case "new":
        const newCards = cards.filter(card => card.newused === "new");
        return this.setState({filteredCars:newCards})
      case "used":
        const usedCards = cards.filter(card => card.newused === "used");
        return this.setState({filteredCars:usedCards})
      case "car":
        const carCards = cards.filter(card => card.vehicle_type === "car");
        return this.setState({filteredCars:carCards})
      case "truck":
        const truckCards = cards.filter(card => card.vehicle_type === "truck");
        return this.setState({filteredCars:truckCards})
      case "suv":
        const suvCards = cards.filter(card => card.vehicle_type === "suv");
        return this.setState({filteredCars:suvCards})
      default:
        return this.setState({filteredCars:cards})
    };
  };


  render() {

    const cardComponents = this.state.filteredCars.map(card => {
      
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
          <Sort filterCars={this.filterCars}/>
          {cardComponents}
        </Wrapper>
      </div>
    );
  }
}

export default App;
