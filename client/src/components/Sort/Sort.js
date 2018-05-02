import React, { Component } from "react";
import "./Sort.css";

class Sort extends Component {

    handleClick = (filter) => {
        this.props.filterCars(filter)
    };


    render() { 
        return (
            <nav className="navbar fixed-top navbar-light bg-dark">
            <div className="container-fluid">
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-primary active" onClick={() => this.handleClick("used")}>USED</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.handleClick("new")}>NEW</button>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-primary active" onClick={() => this.handleClick("car")}>CAR</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.handleClick("truck")}>TRUCK</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.handleClick("suv")}>SUV</button>
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