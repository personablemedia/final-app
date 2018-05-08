import React, { Component } from "react";
import "./adminWrapper.css";

class AdminWrapper extends Component {

    state = {
         group1 : "all"
    }

    handleClick = (adminPage) => {
        console.log(adminPage);
    };

    render() { 
        return (
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <button type="button" className="btn btn-primary" id="dashboard" onClick={() => this.handleClick("dashbaord")}>dashboard</button>
                    <button type="button" className="btn btn-primary" id="manage" onClick={() => this.handleClick("manage")}>Manage Inventory</button>
                    <button type="button" className="btn btn-primary" id="front" onClick={() => this.handleClick("front")}>Front End</button>
                </div>
            </nav>
        );
    };

};

export default AdminWrapper;