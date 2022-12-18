import './Card.css';
import defaults from '../constants/statics/defaults';
import React from 'react';
const UnitCard = React.forwardRef(
    ({name, commander, ancestry, unit, exp, equip, race, size, traits}, ref) => {

    //ref={ref}console.log(name, commander, ancestry, unit, exp, equip, race, size, traits, ref)

    return (
        <>
        <div className='card-outline' ref={ref}>
            <img src={ require(`../symbols/type/${unit}.png`)} alt="Type Icon" width="140" height="140"></img>
            <div className='size-rhombus'></div>
            <div className='tier-rhombus'></div>
            <img src={ require(`../symbols/ancestry/${ancestry}.png`)} alt="Ancestry Icon" className='ancestry-icon'></img><br />
            {size}<br />
            {name}<br />
            Commander {commander}<br />
            {ancestry}<br />
            {exp}<br />
            {equip}<br />
            {race}<br />
            {traits.map((trait) => (<div>{trait.name} {trait.description}</div>))}
        </div>
        </>
    )
}
);

UnitCard.defaultProps = defaults

export default UnitCard;