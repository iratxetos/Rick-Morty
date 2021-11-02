import '../styles/app.scss';
import next from "../images/next.jpg";

// COMPONENTE DE LA UL
import CharacterItem from "./CharacterItem";


function CharacterList(props) {

    // PINTO LA DATA DE CADA CARD RECORRIENDO EL ARRAY CON UN MAP
    const html = props.data.map((characterData) => {
        return (
            // COMPONENTE DE LAS CARDS
            < li className='card' key={characterData.id} >
                <CharacterItem characterData={characterData} />
            </li >
        );
    });

    return (
        <>
            <ul className='character__list'>
                {html}
                <li className="card card-next" onClick={props.handlePage}>
                    <img
                        className='card__character--img'
                        src={next}
                        alt='next'
                        title='next'
                    />
                    <section className='card__character--text'>
                        <div className='features'>
                            <h4 className='card__character--title title-next'>Go to next page</h4>
                            <p className='card__character--species text-next'>Click here for more characters</p>
                        </div>
                        <p className='card__character--status'>👉</p>
                    </section>
                </li>
            </ul>
        </>
    );
}

export default CharacterList;