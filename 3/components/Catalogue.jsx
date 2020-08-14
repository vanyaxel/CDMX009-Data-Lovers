import React, { Fragment, useState } from 'react';
import data from './pokemon.json';
import '../css/catalogue.css';

import Characters from './Characters';
import SelectFilter from './SelectFilter';
import SelectOrder from './SelectOrder';
import Search from './Search';
import BtnFloating from './BtnFloating';

function Catalogue() {

    const [pokemonFilter, setPokemonFilter] = useState([]);
    const [searchText, setSearchText] = useState('');

    const characters = data.pokemon.filter((character) => character.name.match(new RegExp(searchText, 'ig')));

    const filterPokemon = data.pokemon.map((character) =>
        console.log(character.type.forEach(poke => console.log(poke))));

    const cards = (pokemonFilter === '' ? characters : pokemonFilter).map((character) => {
        return (
            <Characters key={character.id} character={character} />
        );
    });

    console.log(pokemonFilter);

    return (
        <Fragment>
            <div>
                <p className='title-catalogue'>POKÉMONES</p>
            </div>
            <div className='container-search'>
                <Search searchText={searchText} setSearchText={setSearchText} />
            </div>
            <div className='container-selects'>
                <SelectFilter setPokemonFilter={setPokemonFilter} />
                <SelectOrder />
            </div>
            <div className='cards-characters'>
                {cards}
            </div>
            <BtnFloating />

            <div><a href="/home">regresar</a></div>

        </Fragment>
    );
}

export default Catalogue;