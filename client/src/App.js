import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import Sort from "./components/Sort";
import friends from "./friends.json";

class App extends Component {

  //axios request

  render() {

    const friendsComponents = friends.map(friend => {
      return (
        <FriendCard
          vehicle={friend.vehicle}
          image={friend.image}
          miles={friend.miles}
          price={friend.price}
          newused={friend.newused}
          vehicle_type={friend.vehicle_type}
        />
      )
    })

    return (
      <div>
        <Wrapper>
          <Title>Ultimate Vehicle Index</Title>
          <Sort>Sort By: </Sort>
          {friendsComponents}
        </Wrapper>
      </div>
    );
  }
}

export default App;
