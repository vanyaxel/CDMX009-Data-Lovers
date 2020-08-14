import React, { Fragment } from 'react';
import '../css/login.css';

import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import gmail from '../images/google.svg';

function SignInView() {
    return (
        <Fragment>
            <div className='background-view'>
                <div></div>
                <div className='container-login-info'>
                    <p className='login-text'>CREAR CUENTA</p>
                    <input type='text' placeholder='Nombre de usuario' className='login-info' />
                    <input type='text' placeholder='Correo electrónico' className='login-info' />
                    <input type='password' placeholder='Contraseña' className='login-info' />
                    <input type='password' placeholder='Contraseña' className='login-info' />
                    <button type='submit' className='btn-login'><a href="/home" className='text-btn-login'>Crear cuenta</a> </button>
                </div>
                <div className='container-opt-signin'>
                    <p className='text-back'>Inicar con</p>
                    <div className='logos-sign-in'>
                        <img src={instagram} alt="instagram" className='logo-social-media' />
                        <img src={facebook} alt="facebook" className='logo-social-media' />
                        <img src={gmail} alt="gmail" className='logo-social-media' />
                    </div>
                </div>
                <div className='container-opt-back'>
                    <a href="/" className='text-back'>Regresar</a>
                </div>
            </div>
        </Fragment>
    );
}

export default SignInView; 