import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import SignIn_SignOut from "../SignIn_SignOut";

const DressSearch = props =>
	
    <div>       

        <fieldset className="form-group">
            <p htmlFor="group-title">
                In the following measurements (in inches):
            </p>
            <label htmlFor="chestWidth">
                Chest: 
            </label>
            <br />
            <input placeholder="" 
                type="text" 
                className="form-control inch_input" 
                id="chestWidth" 
                name="bust" 
                onChange={props.handleInputChange}>
            </input>
        </fieldset>

        <fieldset className="form-group">
            <label htmlFor="waistWidth">
                Waist: 
            </label>
            <input placeholder="" 
                type="text" 
                className="form-control inch_input" 
                id="waistWidth" 
                name="waist" 
                onChange={props.handleInputChange}>
            </input>
        </fieldset>

        <fieldset className="form-group">
            <label htmlFor="hipWidth">
                Hips: 
            </label>
            <input placeholder="" 
                type="text" 
                className="form-control inch_input" 
                id="hipWidth" 
                name="hips" 
                onChange={props.handleInputChange}>
            </input>
        </fieldset>

        <fieldset className="form-group">
            <label htmlFor="brand">
                If you want to specify a brand, select one below.
            </label>
            <br />
            <select className="selection" 
                id="brand" 
                name="brand" 
                onChange={props.handleInputChange}>
                    <option value="">  Brand (optional)</option>
                    <option value="14"> ASOS</option>
                    <option value="15"> Calvin Klein</option>
                    <option value="16"> Ralph Lauren</option>
                    <option value="17"> Zara</option>
                    <option value="18"> H&M</option>
                    <option value="19"> Michael Kors</option>
                    <option value="20"> Adrianna Papell</option>
            </select>
            <br/>
        </fieldset>


        
                
                

    </div>

export default DressSearch;