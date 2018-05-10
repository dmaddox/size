import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignIn_SignOut from "../SignIn_SignOut";

const ShoeSearch = props =>
	<div>
        <fieldset className="form-group">
            <label>
              Are you shopping for men's or women's sizes?
            </label>
            <br />

        {/* <div className="btn-group btn-group-toggle" data-toggle="buttons"> */} 
            <div className="gender-toggle">
                <input type="radio" name="gender" value="male" id="gender-male"  onClick={props.handleInputChange} />
                <label for="gender-male">Male</label>
                    
                <input type="radio" name="gender" value="female" id="gender-female"  onClick={props.handleInputChange} />
                <label for="gender-female">Female</label>
            </div>


        </fieldset>

        <fieldset className="form-group">
        <label htmlFor="footlength">How long is your foot (in inches)?</label><br />
        <input placeholder='' type="text" className="footSize form-control" id="footlength" name="shoe" onChange={props.handleInputChange}></input>
        </fieldset>

        <fieldset className="form-group">
           <label htmlFor="brand">If you want to specify a brand, select one below.</label><br />
            <select className="selection form-control" id="brand" name="brand" onChange={props.handleInputChange}>
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