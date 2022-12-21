import './Card.css';
import defaults from '../constants/statics/defaults';
import React from 'react';

const UnitCard = React.forwardRef(
    ({name, commander, ancestry, unit, exp, equip, race, size, tier, traits, abilityScores}, ref) => {
    UnitCard.defaultProps = defaults
    //console.log(name, commander, ancestry, unit, exp, equip, race, size, traits)
    //console.log(abilityScores)


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
                        {traits.map((trait) => (<div><div className='trait-name'>• {trait.name}</div> <div className='trait-description'>{trait.description}</div></div>))}
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
                    <div className='ability-score-bar'>
                        <div className='ability-score-title2'>{abilityScores[0] + " x "}</div>
                        <div className='ability-score-title2'>{abilityScores[1] >=0 ? "+" + abilityScores[1] : abilityScores[1]}</div> 
                        <div className='ability-score-title2'>{abilityScores[2]}</div>
                    </div>
                    <div className='ability-score-title-zone'>
                        <div className='ability-score-title'>ATK</div> 
                        <div className='ability-score-title2'>DEF</div>
                    </div>  
                </div>
                <div className='atk-pow-block'>
                    <div className='ability-score-bar'>
                        <div className='ability-score-title'>{abilityScores[3] >=0 ? "+" + abilityScores[3] : abilityScores[3]}</div> 
                        <div className='ability-score-title'>{abilityScores[4]}</div> 
                        <div className='ability-score-title'>{abilityScores[5]}</div> 
                    </div>
                    <div className='ability-score-title-zone'>
                        <div className='ability-score-title'>POW</div> 
                        <div className='ability-score-title'>TOU</div> 
                        <div className='ability-score-title'>DMG</div> 
                    </div>
                </div>
                <div className='mor-com-block'>
                    <div className='ability-score-bar2'>
                        <div className='ability-score-title'>{abilityScores[6] >=0 ? "+" + abilityScores[6] : abilityScores[6]}</div> 
                        <div className='ability-score-title'>{abilityScores[7] >=0 ? "+" + abilityScores[7] : abilityScores[7]}</div> 
                    </div>
                    <div className='ability-score-title-zone'>
                        <div className='ability-score-title'>MOR</div> 
                        <div className='ability-score-title'>COM</div> 
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