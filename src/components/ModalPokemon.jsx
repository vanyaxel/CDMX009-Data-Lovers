import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import '../css/modal-characters.css';


export default function ModalPokemon({ character }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className='btn-open-modal'>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    {character.name}</Button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="pokemon"
                aria-describedby="pokemon description"
            >
                <DialogContent className='modal-character'>
                    <DialogActions style={{ padding: 0 }}>
                        <Button onClick={handleClose} color="primary" className='btn-close'>
                            X
                        </Button>
                    </DialogActions>
                    <div className='name-image-character'>
                        <h2 className='text-character-name'>{character.name}</h2>
                        <p className='text-character-type'>{character.type}</p>
                        <img src={character.img} />
                    </div>
                    <div className='detail-container'>
                        <p className='text-character-detail'><b>Estatus: </b>{character.num}</p>
                        <p className='text-character-detail'><b>Género: </b>{character.weight}</p>
                        <p className='text-character-detail'><b>Especie: </b>{character.height}</p>
                        <p className='text-character-detail'><b>Typo: </b>{character.type}</p>
                        <p className='text-character-detail'><b>Typo: </b>{character.candy}</p>
                        <p className='text-character-detail'><b>Typo: </b>{character.candy_count}</p>
                        <p className='text-character-detail'><b>Typo: </b>{character.egg}</p>
                        <p className='text-character-detail'><b>Typo: </b>{character.spawn_chance}</p>
                        <p className='text-character-detail'><b>Ubicación:</b>{character.avg_spawns}</p>
                        <p className='text-character-detail'><b>weaknesses:</b></p>
                        <div className='text-weakness'>
                            {character.weaknesses.map(mult => (
                                <p className='text-character-detail'>{mult}</p>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    );
}
