import './Card.css';
import defaults from '../constants/statics/defaults';

const UnitCard = ({name, commander, ancestry, unit, exp, equip, race, size}) => {
    
    return (
        <>
        <div className='card-outline'>
            <img src={ require(`../symbols/type/${unit}.jpg`)} alt="Type Icon" width="140 * 50%" height="140 * 50%"></img>
            <div className='size-rhombus'></div>
            <div className='tier-rhombus'></div>
            {size} <br></br>
            {name}<br></br>
            {commander}<br></br>
            {ancestry}<br></br>
            {exp}<br></br>
            {equip}<br></br>
            {race}<br></br>
        </div>
        </>
    )
}

UnitCard.defaultProps = defaults

export default UnitCard;