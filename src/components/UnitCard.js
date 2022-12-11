import './Card.css';
import basic from "../symbols/basic.jpg";

function UnitCard() {
    return (
        <div className='card-outline'>
            <img src={basic} alt="Basic" width="100" height="100"></img>
        </div>
    )
}

export default UnitCard;