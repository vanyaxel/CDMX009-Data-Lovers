import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import data from './pokemon.json';

import ModalPokemon from './ModalPokemon';


function Characters({ character }) {
    return (
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
    );
}

export default Characters;