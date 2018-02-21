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

            <fieldset>
                <label>What do you need a size for?</label><br />
                <select className="selection" id="clothingtype" name="type" onChange={props.handleInputChange}>
                    <option> Select clothing type. </option>
                    <option value="shoes"> Shoes</option>
                    <option value="dresses"> Dresses</option>
                </select>
            </fieldset>

            {props.type === "shoes" 
                ? <ShoeSearch handleInputChange={props.handleInputChange} /> 
                : ( props.type === "dresses" )
                    ? <DressSearch handleInputChange={props.handleInputChange} /> 
                    : "" }

            <fieldset>
                <button className="searchButton" type="submit" onClick={props.handleSearch}>
                    Submit
                </button>
            </fieldset>

            <SignIn_SignOut />

        </form>
    </div>

export default Search;


