import React from "react";
import Card from "./Card";
import {robots} from './Robots'

let y = 0;
const random = () => {
    let x = Math.floor(Math.random() * robots.length)
    y = x
    return y
}


const CardList = () => {
    return (
        <div>
            <Card id={robots[random(y)].id} name={robots[y.name]} email={y.email}/>
            <Card id={robots[random(y)].id} name={robots[y.name]} email={y.email}/>
            <Card id={robots[random(y)].id} name={robots[y.name]} email={y.email}/>
        </div>
    );
}

export default CardList