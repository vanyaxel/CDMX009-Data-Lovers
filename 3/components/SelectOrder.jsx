import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SelectOrder() {
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
                <InputLabel htmlFor="filled-age-native-simple" className='placeholder-select'>Ordenar por:</InputLabel>
                <Select
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
                    <option value={2}>Id</option>
                    <option value={3}>Ascendente</option>
                    <option value={4}>Descendente</option>
                </Select>
            </FormControl>
        </div>
    );
}