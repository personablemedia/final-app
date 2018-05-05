import React, { Component } from "react";
import "./Sort.css";

class Sort extends Component {

    state = {
         group1 : "all",
         group2 : "all"

    }

    carFilter = () => {
        this.props.filterCars(this.state.group1, this.state.group2);
    }

    handleClick = (filter) => {
        if (filter === "new" || filter === "used") {
            this.setState({group1 : filter});
            this.props.filterCars(filter, this.state.group2);
        }
        if (filter === "car" || filter === "truck" || filter === "suv") {
            this.setState({group2 : filter})
            this.props.filterCars(this.state.group1, filter);
        }
    };


    render() { 
        return (
            <nav className="navbar fixed-top navbar-light bg-dark">
            <div className="container-fluid">
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-primary" id="used" onClick={() => this.handleClick("used")}>USED</button>
                        <button type="button" className="btn btn-primary" id="new" onClick={() => this.handleClick("new")}>NEW</button>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-primary" id="car" onClick={() => this.handleClick("car")}>CAR</button>
                        <button type="button" className="btn btn-primary" id="truck" onClick={() => this.handleClick("truck")}>TRUCK</button>
                        <button type="button" className="btn btn-primary" id="suv" onClick={() => this.handleClick("suv")}>SUV</button>
                    </div>
                    <div className="btn-group" role="group" aria-label="Third group">
                        <button type="button" className="btn btn-primary">PRICE RANGE</button>
                    </div>
                </div>
            </div>
            </nav>
        );
    };

};
export default Sort;


{/*         <div className="navbar-header">
        <a className="navbar-brand" href="">UVDex</a>
        <a className="btn btn-primary active" href="" role="button">ALL</a>
<a className="btn btn-primary" href="" role="button">USED</a>
<a className="btn btn-primary" href="" role="button">NEW</a>
<a className="btn btn-primary" href="" role="button">CAR</a>
<a className="btn btn-primary" href="" role="button">TRUCK</a>
<a className="btn btn-primary" href="" role="button">SUV</a>
<a className="btn btn-primary" href="" role="button">PRICE RANGE</a> */}