import './Card.css';

const UnitCard = ({name, commander, ancestry, unit, exp, equip, race, size}) => {
    
    return (
        <>
        <div className='card-outline'>
            <img src={ require(`../symbols/${unit}.jpg`)} alt="Type Icon" width="140 * 50%" height="140 * 50%"></img>
            <div className='rhombus'></div>
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

UnitCard.defaultProps = {
    unit: "levy"
    //size: 6
}

export default UnitCard;