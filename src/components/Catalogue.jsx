import React, { Fragment, useState } from 'react';
import data from './pokemon.json';
import '../css/catalogue.css';

import Characters from './Characters';
import SelectFilter from './SelectFilter';
import SelectOrder from './SelectOrder';
import Search from './Search';

function Catalogue() {

    const [searchText, setSearchText] = useState('');

    const characters = data.pokemon.filter((character) => character.name.match(new RegExp(searchText, 'ig')));

    const cards = characters.map((character) => {
        return (
            <Characters key={character.id} character={character} />
        );
    });

    return (
        <Fragment>
            <div>
                <p className='title-catalogue'>POKÉMONES</p>
            </div>
            <div className='container-search'>
                <Search searchText={searchText} setSearchText={setSearchText} />
            </div>
            <div className='cards-characters'>
                {cards}
            </div>
            <div><a href="/home">regresar</a></div>

        </Fragment>
    );
}

export default Catalogue;