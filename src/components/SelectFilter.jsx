import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../css/select-filter.css';

export default function SelectFilter() {
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div>
            <FormControl variant="filled" className=''>
                <InputLabel htmlFor="filled-age-native-simple">Filtrar por:</InputLabel>
                <Select
                    className='select-opt'
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'filled-age-native-simple',
                    }}
                    style={{ width: '140px' }}
                >
                    <option aria-label="None" value="" />
                    <option value={2}>Agua</option>
                    <option value={3}>Planta</option>
                    <option value={4}>Eléctrico</option>
                    <option value={5}>Hielo</option>
                    <option value={6}>Lucha</option>
                    <option value={7}>Veneno</option>
                    <option value={8}>Tierra</option>
                    <option value={9}>Volador</option>
                    <option value={10}>Psíquico</option>
                    <option value={11}>Psíquico</option>
                    <option value={12}>Fantasma</option>
                    <option value={13}>Dragón</option>
                    <option value={14}>Siniestro</option>
                    <option value={15}>Acero</option>
                    <option value={16}>Hada</option>
                </Select>
            </FormControl>
        </div>
    );
}
