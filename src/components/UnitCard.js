import './Card.css';
import defaults from '../constants/statics/defaults';
import React from 'react';

const UnitCard = React.forwardRef(
    ({name, commander, ancestry, unit, exp, equip, race, size, tier, traits, abilityScores}, ref) => {
    UnitCard.defaultProps = defaults
    //console.log(name, commander, ancestry, unit, exp, equip, race, size, traits)
    console.log(abilityScores)


    return (
        <>
        <div className='card-outline' ref={ref}>
            <div className='first-container'>
                <div className='info-container'>
                    <div className='name-container'>
                        <img src={ require(`../symbols/type/${unit}.png`)} alt="Type Icon" className='type-icon'></img>
                        <div className='info-stripe'>
                            <div className='info-text'>{exp.name}, {equip.name}, {race}, {unit}</div>
                        </div>
                        <div className='type-background'/>
                        <div className='name'>{name}</div>
                        <div className='commander'>Commander {commander === '' ? '__________' : commander}</div>
                    </div>
                    <div className='trait-container'>
                        Traits
                        {traits.map((trait) => (<div>{trait.name} {trait.description}</div>))}
                    </div>
                </div>
                <div className='rhombus-container'>
                    <div className='size-rhombus' />
                    <div className='tier-rhombus' />
                    <div className='size-title'>SIZE</div>
                    <div className='size'>{size}</div>
                    <img src={ require(`../symbols/ancestry/${ancestry}.png`)} alt="Ancestry Icon" className='ancestry-icon'></img>
                    <div className='tier'>{tier}</div>
                    <div className='tier-title'>TIER</div>
                </div>
            </div>
            <div className='stats-container'>
                <div className='atk-pow-block'>
                    <div className='ability-score-bar'/>
                    <div className='ability-score-title-zone'>
                        <div className='ability-score-title'>{abilityScores[0]}, {abilityScores[1]} ATK</div> 
                        <div className='ability-score-title2'>{abilityScores[2]} DEF</div>
                    </div>  
                </div>
                <div className='atk-pow-block'>
                    <div className='ability-score-bar'/>
                    <div className='ability-score-title-zone'>
                        <div className='ability-score-title'>{abilityScores[3]} POW</div> 
                        <div className='ability-score-title'>{abilityScores[4]} TOU</div> 
                        <div className='ability-score-title'>{abilityScores[5]} DMG</div> 
                    </div>
                </div>
                <div className='mor-com-block'>
                    <div className='ability-score-bar2'/>
                    <div className='ability-score-title-zone'>
                        <div className='ability-score-title'>{abilityScores[6]} MOR</div> 
                        <div className='ability-score-title'>{abilityScores[7]} COM</div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
);
/*
<br />
            {name}<br />
            Commander {commander}<br />
            <img src={ require(`../symbols/type/${unit}.png`)} alt="Type Icon" className='type-icon'></img>*/

export default UnitCard;