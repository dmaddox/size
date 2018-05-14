import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignIn_SignOut from "../SignIn_SignOut";
import ShoeSearch from "../ShoeSearch";
import DressSearch from "../DressSearch";

const Search = props =>
	<div className="search">
    
        <form className="form">
            <Link to={"/"}style={{ textDecoration: 'none' }}>
                <h1>Size</h1>
            </Link>

            <fieldset className="form-group">
                <label>I am shopping for:</label><br />
                <select className="selection form-control" id="clothingtype" name="type" onChange={props.handleInputChange}>
                    <option> Select clothing type. </option>
                    <option value="shoes"> Shoes</option>
                    <option value="dresses"> Dresses</option>
                </select>
            </fieldset>

            {props.type === "shoes" 
                ? <ShoeSearch handleInputChange={props.handleInputChange} gender={props.gender} /> 
                : ( props.type === "dresses" )
                    ? <DressSearch handleInputChange={props.handleInputChange} /> 
                    : "" }

            <fieldset className="form-group">
                <button className="searchButton" type="submit" onClick={props.handleSearch}>
                    Submit
                </button>
            </fieldset>

            <SignIn_SignOut />

        </form>
    </div>

export default Search;


