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

  filterCars = (arg1,arg2) => {
    if (arg1 === "all" || arg2 === "all") {
      if (arg1 === "all" && arg2 !== "all") {
        if (arg2 === "car") {
          const carCards = cards.filter(card => card.vehicle_type === "car");
          return this.setState({filteredCars:carCards})
        }
        if (arg2 === "truck") {
          const truckCards = cards.filter(card => card.vehicle_type === "truck");
          return this.setState({filteredCars:truckCards})
        }
        if (arg2 === "suv") {
          const suvCards = cards.filter(card => card.vehicle_type === "suv");
          return this.setState({filteredCars:suvCards})
        }
      }
      if (arg2 === "all" && arg1 !== "all") {
        if (arg2 === "all") {
          if (arg1 === "new") {
            const newCards = cards.filter(card => card.newused === "new");
            return this.setState({filteredCars:newCards})
          }
          if (arg1 === "used") {
            const usedCards = cards.filter(card => card.newused === "used");
            return this.setState({filteredCars:usedCards})
          }
        }
      }
    }
    else {
      const mixedCards = cards.filter(card => card.newused === arg1 && card.vehicle_type === arg2)
      return this.setState({filteredCars:mixedCards})
    }
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
