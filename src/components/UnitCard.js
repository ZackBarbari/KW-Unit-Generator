import { useState } from 'react';
import './Card.css';

const UnitCard = ({name, commander, ancestry, unit, exp, equip, race}) => {

    //setType(unit);

    //console.log("EEEE " + unit)
    
    return (
        <>
        <div className='card-outline'>
            <img src={ require(`../symbols/${unit}.jpg`)} alt="Type Icon" width="50" height="50"></img>
        </div>
        </>
    )
}

UnitCard.defaultProps = {
    unit: "levy"
}

export default UnitCard;