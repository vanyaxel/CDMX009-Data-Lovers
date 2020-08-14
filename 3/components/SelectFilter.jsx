import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import data from './pokemon.json';
import '../css/select-filter.css';

export default function SelectFilter({ setPokemonFilter }) {

    const handleChange = (event) => {
        const name = event.target.value;
        setPokemonFilter(name);
    };

    return (
        <div>
            <FormControl variant="filled" className=''>
                <InputLabel htmlFor="filled-age-native-simple">Filtrar por:</InputLabel>
                <Select
                    className='select-opt'
                    native
                    value={data.pokemon.id}
                    onChange={handleChange}
                    inputProps={{
                        name: 'type',
                    }}
                    style={{ width: '140px' }}
                >
                    <option aria-label="None" value="" />
                    <option value='Normal'>Normal</option>

                    <option value='Fire'>Fire</option>
                    <option value='Grass'>Planta</option>
                    <option value='Electric'>Eléctrico</option>
                    <option value='Bug'>Insecto</option>
                    <option value='Water'>Agua</option>
                    <option value='Poison'>Veneno</option>
                    <option value='Ground'>Tierra</option>
                    <option value='Flying'>Volador</option>
                    <option value='Fighting'>Luchador</option>
                    <option value='Psychic'>Psíquico</option>
                    <option value='Rock'>Roca</option>
                    <option value='Ice'>Hielo</option>
                    <option value='Ghost'>Fantasma</option>
                    <option value='Dragon'>Dragón</option>
                </Select>
            </FormControl>
        </div>
    );
}
