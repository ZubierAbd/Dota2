import React, { useState } from 'react';
import Strength from '../assets/Strength.png'
import Agi from '../assets/Agi.png'
import Int from '../assets/Int.png'
import './Hero.css'


const Hero = (data, i) => {
    let name = data.data ? data.data.localized_name : ''
    let atkType = data.data ? data.data.attack_type : ''
    let id = data.data ? data.data.id : ''
    let primary = data.data ? data.data.primary_attr : ''
    let roles = data.data ? data.data.roles : ''
    let fileName = data.data ? data.data.name + '.png' : '';
    let filePath = process.env.PUBLIC_URL + '/portraits/';
    return (<div className="hero-box">

        <img
            className="hero-thumbnail" key={data.data ? data.data.id : ''}
            src={filePath + fileName} alt={`hero portrait of ` + { name }}></img>

        <p className="hero-name"> {name}</p>
        <p> {atkType}</p>
        <ul>
            {roles.map(role => {
                return (
                    <li>{role}</li>
                )
            })}
        </ul>
        <img src={chooseImage(primary)} alt="primaryAttribute"></img>
    </div>)
}

export default Hero

function chooseImage(attr) {
    if (attr === 'str') {
        return Strength;
    } else if (attr === 'agi') {
        return Agi
    } else if (attr === 'int') {
        return Int
    }
}