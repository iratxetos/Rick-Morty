import '../styles/app.scss';

function FilterBySpecies(props) {
    return (
        <>

            <label htmlFor='species'>Filter by Species</label>
            <select className='form__firstPart--filterBySpecies'
                name='species'
                id='species'
                value={props.searchSpecies}
                onChange={props.handleSpecies}>
                <option value='All'>All</option>
                <option value='Human'>Human</option>
                <option value='Alien'>Alien</option>
            </select>

        </>
    );
}

export default FilterBySpecies;