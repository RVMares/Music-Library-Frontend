import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateSong from './Components/CreateSong/CreateSong';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar'

function App() {

  const [songs, setSongs] = useState([
    {
      title: 'When It Rains It Pours',
      artist: 'Luke Combs',
      album: 'This One\'s For You',
      release_date: '2019-06-19',
      genre: 'Country'

    }
  ]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getAllSongs();
  }, []);

  const getAllSongs = async () => {
    let response = await axios
    .get('http://127.0.0.1:8000/api/music/')
    .then(response=>{setSongs(response.data)});
    console.log(response);
  }

  async function addNewSong(newSong){
    try {
      let response = await axios
      .post('http://127.0.0.1:8000/api/music/', newSong);
      if (response.status === 201){
        await getAllSongs();
      }
    } catch (error){
      console.log(error.message);
    }
  }

 async function filterSongByTerm () {
  try{
    let response = await axios
    .get('http://127.0.0.1:8000/api/music/')
    .then(response=>setSearchInput(response.data));
    console.log(response)
    if (!searchInput) {
      getAllSongs();
    }
    songs.filter((song) =>{
      return (
        song.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchInput.toLowerCase()) ||
        song.album.toLowerCase().includes(searchInput.toLowerCase()) ||
        song.release_date.includes(searchInput) ||
        song.genre.toLowerCase().includes(searchInput.toLowerCase()));
      })
  }
  catch (error){
      console.log(error.message)
    }
  }

  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='container'>
        <div className='border-box'>
          <CreateSong createNewSong={addNewSong}/>
        </div>
      </div>
      <div className='container'>
        <div className='border-box'>
          <SearchBar filterSongsByValue={filterSongByTerm}/>
        </div>
        <div className='border-box'>
          <DisplayMusic parentSongs={songs}/>
        </div>
      </div>
    </div>
  );
}

export default App;
