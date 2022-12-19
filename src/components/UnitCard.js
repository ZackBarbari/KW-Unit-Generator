import './Card.css';
import defaults from '../constants/statics/defaults';
import React from 'react';
const UnitCard = React.forwardRef(
    ({name, commander, ancestry, unit, exp, equip, race, size, traits}, ref) => {

    //ref={ref}console.log(name, commander, ancestry, unit, exp, equip, race, size, traits, ref)

    return (
        <>
        <div className='card-outline' ref={ref}>
            <div className='first-container'>
                <div className='info-container'>
                    <div className='name-container' />
                    <div className='trait-container' />
                </div>
                <div className='rhombus-container'/>
            </div>
            <div className='stats-container' />
        </div>
        </>
    )
}
);

/*
<img src={ require(`../symbols/ancestry/${ancestry}.png`)} alt="Ancestry Icon" className='ancestry-icon'></img><br />
            {name}<br />
            Commander {commander}<br />
            {exp}<br />
            {equip}<br />
            <img src={ require(`../symbols/type/${unit}.png`)} alt="Type Icon" className='type-icon'></img>
            {race}<br />
            {traits.map((trait) => (<div>{trait.name} {trait.description}</div>))}*/
UnitCard.defaultProps = defaults

export default UnitCard;