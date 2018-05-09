import React, { Component } from "react";


class DexPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
    onClick = e => {
      e.preventDefault();
      this.setState({
        active: !this.state.active
      })
    }
 
 
    render() {
      const { active } = this.state;
      console.log("What is active: ", active);
      return (
        <div>
        {!active ? (
          <div onClick={this.onClick} className="img-container">
            <img className="img-fluid"  alt={this.props.vehicle} src={this.props.image} />
          </div>
            ) : (
          <div className="img-modal-container">
          <div className="img-modal">
            <button className="close-button" onClick={this.onClick}>&times;</button>
            <img className="modal-img" alt={this.props.vehicle} src={this.props.image} />
            </div>
          </div>
        ) }
        </div>
      )
    }
  }
 
export default DexPhoto;
