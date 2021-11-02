import '../styles/app.scss';

import rick from "../images/rick.gif";
import morty from "../images/morty.gif";
import rickAndMorty from "../images/rickAndMorty.gif";
import all from "../images/all.gif";

import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';

function Filters(props) {

    return (
        <>
            <form className='form'>

                <fieldset className='form__firstPart'>

                    <FilterByName searchName={props.searchName}
                        handleName={props.handleName}
                    />

                    <FilterBySpecies searchSpecies={props.searchSpecies}
                        handleSpecies={props.handleSpecies}
                    />

                </fieldset>
                <img
                    className='rick'
                    src={rick}
                    alt='Pic from Rick'
                    title='Pic from Rick'
                />
                <fieldset className='form__secondPart'>
                    <FilterByStatus searchStatus={props.searchStatus}
                        handleStatus={props.handleStatus}
                    />

                    <img
                        className='rickAndMorty'
                        src={rickAndMorty}
                        alt='Pic from Rick and Morty'
                        title='Pic from Rick and Morty'
                    />
                    <img
                        className='all'
                        src={all}
                        alt='Pic from Rick and Morty and Sally'
                        title='Pic from Rick and Morty and Sally'
                    />
                </fieldset>
            </form>
        </>
    );
}

export default Filters;