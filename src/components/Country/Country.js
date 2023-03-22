import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, name, population, region, flags } = props.country
    return (
        <div className='country bg-danger-subtle'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;