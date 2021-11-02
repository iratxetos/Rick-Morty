import '../styles/app.scss';

// COMPONENTE DE LAS CARDS
import { Link } from "react-router-dom";

function CharacterItem(props) {

    let statusIcon = props.characterData.status;
    if (props.characterData.status === 'Dead') {
        statusIcon = '💀';
    } else if (props.characterData.status === 'unknown')
        statusIcon = '🧐';
    else {
        statusIcon = '💓';
    }


    return (
        <>
            <Link to={`./${props.characterData.id}`}>
                <img className='card__character--img'
                    src={props.characterData.image}
                    alt={`Pic from ${props.characterData.name} `}
                    title={`Pic from${props.characterData.name} `}
                />
                <section className='card__character--text'>
                    <div className='features'>
                        <h4 className='card__character--title'>{props.characterData.name}</h4>
                        <p className='card__character--species'>{props.characterData.species}</p>
                    </div>
                    <p className='card__character--status'> {statusIcon}</p>
                </section>
            </Link>
        </>
    );

}

export default CharacterItem;