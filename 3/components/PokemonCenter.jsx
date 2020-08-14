import React, { Fragment } from 'react';
import '../css/pokemon-center.css';

function PokemonCenter() {
    return (
        <Fragment>
            <p className='heade-pokemon-center'>CENTROS POKÉMON</p>
            <div className='current-pokemon-center'>
                <p className='title-pokemon-center'>Cerca de tu ubicación</p>
                <p className='text-pokemon-center'>Calle Querétaro 225, Roma Nte., Cuauhtémoc, 06700 Ciudad de México.</p>
                <p className='text-pokemon-center'>Calle Querétaro 246, Roma Nte., Cuauhtémoc, 06700 Ciudad de México.</p>
                <p className='text-pokemon-center'>Jose Alvarado 30, Roma Nte., Cuauhtémoc, 06700 Ciudad de México.</p>
            </div>
            <div className='current-pokemon-center'>
                <p className='title-pokemon-center'>Vota por una nueva ubicación</p>
                <div className='vote-section'>
                    <p className='text-pokemon-center'>Calle Querétaro 225, Roma Nte., Cuauhtémoc, 06700 Ciudad de México.</p>
                    <p className='container-rate'>75%</p>
                </div>
                <div className='vote-section'>
                    <p className='text-pokemon-center'>Calle Querétaro 246, Roma Nte., Cuauhtémoc, 06700 Ciudad de México.</p>
                    <p className='container-rate'>20%</p>
                </div>
                <div className='vote-section'>
                    <p className='text-pokemon-center'>Jose Alvarado 30, Roma Nte., Cuauhtémoc, 06700 Ciudad de México.</p>
                    <p className='container-rate'>05%</p>
                </div>
            </div>
            <div className='new-pokemon-center'>
                <p style={{ textAlign: 'center' }}>Si quieres sugerir un nuevo Centro Pokemón,  ubicate en la zona y da click en el botón</p>
                <button type='button' className='btn-vote'>NUEVO CENTRO POKÉMON</button>
            </div>
            <div><a href="/home">regresar</a></div>
        </Fragment>
    );
}

export default PokemonCenter; 