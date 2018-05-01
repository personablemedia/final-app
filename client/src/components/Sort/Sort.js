import React from "react";
import "./Sort.css";

const Sort = props => (
    <nav className="navbar fixed-top navbar-light bg-dark">
    <div className="container-fluid">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">ALL</button>
                <button type="button" class="btn btn-primary active">USED</button>
                <button type="button" class="btn btn-primary">NEW</button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" class="btn btn-primary active">CAR</button>
                <button type="button" class="btn btn-primary">TRUCK</button>
                <button type="button" class="btn btn-primary">SUV</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-primary">PRICE RANGE</button>
            </div>
        </div>
    </div>
    </nav>
);
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