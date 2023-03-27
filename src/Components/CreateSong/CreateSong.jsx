import React, { useState } from 'react';
import './CreateSong.css'

const CreateSong = (props) => {
    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState('');
    const[album, setAlbum] = useState('');
    const[release_date, setReleaseDate] = useState('');
    const[genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        console.log(newSong);
        props.createNewSong(newSong);
    }

    return ( 
        <div className='createSongTitle' id='createSongContainer'>
            <h1>Add Song to the Library!</h1>
            <form onSubmit={handleSubmit} className="createSong-form">
                <div className='form-row'>
                        <label>Title</label>
                        <input type='text' className='form-control' id='title' value={title} onChange={(event) => setTitle(event.target.value)}/>

                        <label>Artist</label>
                        <input type='text' className='form-control' id='artist' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                </div>
                <div className='form-row'>

                        <label>Album</label>
                        <input type='text' className='form-control' id='album' value={album} onChange={(event) => setAlbum(event.target.value)}/>

                        <label>Release Date</label>
                        <input type='date' className='form-control' id='release_date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>

                </div>

                    <div className='form-row'>
                        <label>Genre</label>
                        <input type='text' className='form-control' id='genre' value={genre} onChange={(event) => setGenre(event.target.value)}/>

                        <button type='submit' className='btn btn-primary'>Add Song!</button>


                </div>
            </form>
        </div>
        );
}
 
export default CreateSong;