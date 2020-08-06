import React, { Fragment } from 'react';
import data from './pokemon.json';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import '../css/catalogue.css';

import ModalPokemon from './ModalPokemon';
import SelectFilter from './SelectFilter';
import SelectOrder from './SelectOrder';
import Search from './Search';
import BtnFloating from './BtnFloating';

function Catalogue() {
    return (
        <Fragment>
            <div>
                <p className='title-catalogue'>POKÉMONES</p>
            </div>
            <div className='container-search'>
                <Search />
            </div>
            <div className='container-selects'>
                <SelectFilter />
                <SelectOrder />
            </div>
            <div className='cards-characters'>
                {data.pokemon.map((character) => (
                    <Card className='card'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="pokemon"
                                height="140"
                                image={character.img}
                                title="pokemon"
                                style={{ objectFit: 'none' }}
                            />
                            <CardContent>
                                <ModalPokemon character={character} />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
            <BtnFloating />

            <div><a href="/home">regresar</a></div>

        </Fragment>
    );
}

export default Catalogue; 
