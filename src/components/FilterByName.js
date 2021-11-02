import '../styles/app.scss';

function FilterByName(props) {
    return (
        <>

            <label htmlFor='name'>Filter by Name</label>
            <input className='form__firstPart--filterByName'
                type='text'
                name='name'
                id='name'
                placeholder=' e.g. Morty'
                value={props.searchName}
                onChange={props.handleName}

            />

        </>
    );
}

export default FilterByName;