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

    getClass = () => {
        document.addEventListener('click', function(e) {
            let className = e.path[0].className.split(' ');
            if (!className.includes('link')) return;
            let links = document.getElementsByClassName('active');
            for (let link of links) {
                link.classList.remove('active');
                e.path[0].classList.add('active');
            }
        });
    };

    componentDidMount () {
        this.getClass();
    }



    handleClick = (filter) => {
        console.log("activeSearch: " + this.props.activeSearch);

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
                    <div className="button1" role="group" aria-label="First group">
                        <button type="button" className="btn btn-primary link active" id="used" onClick={() => this.handleClick("used")}>USED</button>
                        <button type="button" className="btn btn-primary link" id="new" onClick={() => this.handleClick("new")}>NEW</button>
                    </div>
                    <div className="button1" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-primary link" id="car" onClick={() => this.handleClick("car")}>CAR</button>
                        <button type="button" className="btn btn-primary link" id="truck" onClick={() => this.handleClick("truck")}>TRUCK</button>
                        <button type="button" className="btn btn-primary link" id="suv" onClick={() => this.handleClick("suv")}>SUV</button>
                    </div>
                    <div className="button1" role="group" aria-label="Third group">
                        <button type="button" className="btn btn-primary">PRICE RANGE</button>
                    </div>
                </div>
            </div>
            </nav>
        );
    };

};
export default Sort;