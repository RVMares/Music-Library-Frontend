import React, { useState } from 'react';


const CreateSong = (props) => {
    const[songTitle, setTitle] = useState('');
    const[songArtist, setArtist] = useState('');
    const[songAlbum, setAlbum] = useState('');
    const[songReleaseDate, setReleaseDate] = useState('');
    const[songGenre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: songTitle,
            artist: songArtist,
            album: songAlbum,
            releaseDate: songReleaseDate,
            genre: songGenre
        };
        console.log(newSong);
        props.createNewSong(newSong)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label>Title</label>
                    <input type='text' className='form-control' id='songTitle' value={songTitle} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label>Artist</label>
                    <input type='text' className='form-control' id='songArtist' value={songArtist} onChange={(event) => setArtist(event.target.value)}/>
                </div>
            </div>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label>Album</label>
                    <input type='text' className='form-control' id='songAlbum' value={songAlbum} onChange={(event) => setAlbum(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label>Release Date</label>
                    <input type='date' className='form-control' id='songReleaseDate' value={songReleaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
                </div>
            </div>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label>Genre</label>
                    <input type='text' className='form-control' id='songGenre' value={songGenre} onChange={(event) => setGenre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <button type='submit' className='btn btn-primary'>Add Song!</button>
                </div>
            </div>
        </form>
        );
}
 
export default CreateSong;