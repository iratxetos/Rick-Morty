import '../styles/app.scss';

import logo from "../images/logo.png";

function Header(props) {
    return (
        <>
            <header className='header'>
                <img
                    className='header__image'
                    src={logo}
                    alt='logo'
                    title='logo'
                />
                <h1 className='header__title'>The awesome Rick and Morty character finder</h1>
            </header>
        </>
    );
}

export default Header;