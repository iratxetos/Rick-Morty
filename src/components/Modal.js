import '../styles/app.scss';

import { Link } from 'react-router-dom';

function Modal(props) {
    return (
        <div className='modal'>
            <div className='modal__dialog'>
                <div className='modal__content'>
                    <header className='modal__header'>
                        <h2 className='modal__title'>{props.title}</h2>
                        <Link to='/'>
                            <span className='modal__close icon fal fa-times-circle'></span>
                        </Link>
                    </header>
                     <section className='modal__text'>
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Modal;
