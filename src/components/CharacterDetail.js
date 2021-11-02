import '../styles/app.scss';

import ivan from "../images/ivan.jpg";

import Modal from './Modal';

function CharacterDetail(props) {

    if (props.character === undefined) {
        return (
            <Modal className='modal__notFound' title="Personaje no encontrado">
                <img
                    className='detail__character--img'
                    src={ivan}
                    alt='Pic from Ivan'
                    title='Pic from Ivan'
                />
                <p className='text__notFound'>¡Yo no soy un personaje, tas equivocao!</p>
            </Modal>

        );

    } else {
        return (
            <Modal title={props.character.name} className='modal__dialog'>
                <>

                    <img className='detail__character--img'
                        src={props.character.image}
                        alt={`Pic from ${props.character.name} `}
                        title={`Pic from ${props.character.name} `}
                    />

                    <ul className='detail__list'>
                        <li className='detail__list--name'>{`Name: ${props.character.name}`}
                        </li>
                        <li className='detail__list--status'>{`Status: ${props.character.status}`}
                        </li>
                        <li className='detail__list--species'>
                            {`Species: ${props.character.species}`}
                        </li>
                        <li className='detail__list--origin'>{`Origin: ${props.character.origin}`}
                        </li>
                        <li className='detail__list--numberOfEpisodes'>{`Episodes where it appears: ${props.character.numberOfEpisodes}`}
                        </li>
                    </ul>


                </>
            </Modal>

        );
    }
}

export default CharacterDetail;