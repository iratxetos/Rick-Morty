
import '../styles/app.scss';

function FilterByStatus(props) {


    return (
        <>

            <label> Filter by Status                </label>
            <div className='input-label-part'>
                <div className='input-label-partOne'>
                    <input
                        className='form__secondPart--filterByStatus'
                        type='radio'
                        name='status'
                        id='All'
                        value='All'
                        // checked={props.setSearchStatus === 'All'}
                        onChange={props.handleStatus}

                    />
                    <label className='input-label' htmlFor='All'>All 🅰</label>
                    <br />
                    <input
                        className='form__secondPart--filterByStatus'
                        type='radio'
                        name='status'
                        id='Alive'
                        value='Alive'
                        // checked={props.setSearchStatus === 'Alive'}
                        onChange={props.handleStatus}

                    />
                    <label className='input-label' htmlFor='Alive'>Alive 💓</label>
                </div>
                <div className='input-label-partTwo'>
                    <input
                        className='form__secondPart--filterByStatus'
                        type='radio'
                        name='status'
                        id='Dead'
                        value='Dead'
                        // checked={props.setSearchStatus === 'Dead'}
                        onChange={props.handleStatus}

                    />
                    <label className='input-label' htmlFor='Dead'>Dead 💀</label> <br />
                    <input
                        className='form__secondPart--filterByStatus'
                        type='radio'
                        name='status'
                        id='unknown'
                        value='unknown'
                        // checked={props.setSearchStatus === 'unknown'}
                        onChange={props.handleStatus}
                    />
                    <label className='input-label' htmlFor='unknown'>Unknown 🧐</label>
                </div>
            </div>
        </>
    );
}

export default FilterByStatus;