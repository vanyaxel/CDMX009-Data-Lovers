import React, { Fragment } from 'react';
import '../css/login.css';

import logo from '../images/logo1.png';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import gmail from '../images/google.svg';

function LogInView() {
    return (
        <Fragment>
            <div className='background-view'>
                <div>
                    <p className='title-text'>Pokendia Go!</p>
                </div>
                <div className='container-login-info'>
                    <p className='login-text'>INICIAR SESIÓN</p>
                    <input type='text' placeholder='Nombre de usuario' className='login-info' />
                    <input type='password' placeholder='Contraseña' className='login-info' />
                    <button type='submit' className='btn-login'><a href="/home" className='text-btn-login'>Ingresar</a> </button>
                </div>
                <div className='container-opt-login'>
                    <img src={instagram} alt="instagram" className='logo-social-media' />
                    <img src={facebook} alt="facebook" className='logo-social-media' />
                    <img src={gmail} alt="gmail" className='logo-social-media' />
                </div>
                <div className='opt-new-user'>
                    <p >¿Eres usuario nuevo?</p>
                    <a href="/signin" className='opt-create-new-user'>Crear cuenta</a>
                </div>
            </div>
        </Fragment>
    );
}

export default LogInView; 