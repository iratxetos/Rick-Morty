import '../styles/app.scss';


function RandomNumber(props) {


    return (
        <>
            <button className='randombutton' onClick={props.handleRandomNumber}>Get random characters</button>
        </>
    );
}

export default RandomNumber;