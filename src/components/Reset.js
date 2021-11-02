import '../styles/app.scss';


function Reset(props) {


    return (
        <>
            <button type='reset' className='resetbutton' onClick={props.handleReset}>Reset</button>
        </>
    );
}

export default Reset;