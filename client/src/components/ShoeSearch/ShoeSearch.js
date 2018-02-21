import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignIn_SignOut from "../SignIn_SignOut";

const ShoeSearch = props =>
	<div>
        <fieldset>
            <label>What is your gender?</label><br />
            <input className = "radio" type="radio" name="gender" value="male" onChange={props.handleInputChange}/> Male
            <input className = "radio" type="radio" name="gender" value="female" onChange={props.handleInputChange}/> Female
            <input className = "radio" type="radio" name="gender" value="other" onChange={props.handleInputChange}/> Other
        </fieldset>

        <fieldset>
        <label for="footlength">How long is your foot (in inches)?</label><br />
        <input placeholder='' type="text" className="footSize" id="footlength" name="shoe" onChange={props.handleInputChange}></input>
        </fieldset>

        <fieldset>
           <label for="brand">If you want to specify a brand, select one below.</label><br />
            <select className="selection" id="brand" name="brand" onChange={props.handleInputChange}>
                <option value="">  Brand (optional)</option>
                <option value="13"> BCBG </option>
                <option value="3"> Adidas</option>
                <option value="12"> Asics</option>
                <option value="4"> Converse</option>
                <option value="10"> DCShoes</option>
                <option value="8"> New Balance</option>
                <option value="2"> Nike</option>
                <option value="1"> Nine West</option>
                <option value="9"> Puma</option>
                <option value="11"> Reebok</option>
                <option value="6"> Steve Madden</option>
                <option value="7"> Under Armor</option>
                <option value="5"> Vans</option>
            </select>
        </fieldset>
       
    </div>

export default ShoeSearch;