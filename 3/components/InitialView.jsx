import React, { Fragment } from 'react';
import '../css/homeView.css';

function InitialView() {
    return (
        <Fragment>
            <div className='backgroud-home'>
                <div className='welcome'>
                    <p>BIENVEDIDO</p>
                </div>
                <div className='opt-home-view'>
                    <div className='container-btn-1'>
                        <button type='button' className='btn-option-home'><a href="/catalogo" className='text-option-home'> POKÉMONES</a></button>
                        <button type='button' className='btn-option-home center'><a href="/centro-pokemon" className='text-option-home'> CENTRO POKEMON</a></button>
                    </div>
                    <button type='button' className='btn-option-play'><a href="https://pokemongolive.com/es_mx/" className='text-option-home'> JUGAR</a></button>
                </div>
                <div className='container-btn-signout'>
                    <button type='button' className='btn-signout'><a href="/" className='text-btn-signout'>OFFLINE</a></button>
                    <button type='button' className='btn-signout'><a href="/" className='text-btn-signout'>CERRAR SESIÓN</a></button>
                </div>
            </div>
        </Fragment >
    );
}

export default InitialView;