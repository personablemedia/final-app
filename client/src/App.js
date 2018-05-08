import React, { Component } from 'react';
import './App.css';
import AdminWrapper from "./components/AdminWrapper";
import SearchWrapper from "./components/SearchWrapper";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import VehicleCard from "./components/VehicleCard";
import Sort from "./components/Sort";
import cards from "./cards.json";

class App extends Component {

  //axios request

  state = {
    filteredCars : [...cards],
    activeSearch : []
  };

  filterCars = (arg1,arg2) => {
    if (arg1 === "all" || arg2 === "all") {
      if (arg1 === "all" && arg2 !== "all") {
        if (arg2 === "car") {
          this.setState({activeSearch:["all", "car"]});
          const carCards = cards.filter(card => card.vehicle_type === "car");
          return this.setState({filteredCars:carCards})
        }
        if (arg2 === "truck") {
          this.setState({activeSearch:["all", "truck"]});
          const truckCards = cards.filter(card => card.vehicle_type === "truck");
          return this.setState({filteredCars:truckCards})
        }
        if (arg2 === "suv") {
          this.setState({activeSearch:["all", "suv"]});
          const suvCards = cards.filter(card => card.vehicle_type === "suv");
          return this.setState({filteredCars:suvCards})
        }
      }
      if (arg2 === "all" && arg1 !== "all") {
        if (arg1 === "new") {
          this.setState({activeSearch:["new", "all"]});
          const newCards = cards.filter(card => card.newused === "new");
          return this.setState({filteredCars:newCards})
        }
        if (arg1 === "used") {
          this.setState({activeSearch:["used", "all"]});
          const usedCards = cards.filter(card => card.newused === "used");
          return this.setState({filteredCars:usedCards})
        }
      }
    }
    else {
      this.setState({activeSearch:[arg1,arg2]});
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
          <Title />
          <AdminWrapper></AdminWrapper>
          <Sort filterCars={this.filterCars} activeSearch={this.activeSearch}/>
          <SearchWrapper>{cardComponents}</SearchWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default App;
