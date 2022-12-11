import './Card.css';

function UnitCard() {
    var iconType = "infantry";
    return (
        <>
        <div className='card-outline'>
            <img src={ require(`../symbols/${iconType}.jpg`)} alt="Type Icon" width="100" height="100"></img>
        </div>
        </>
    )
}

export default UnitCard;