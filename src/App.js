import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateSong from './Components/CreateSong/CreateSong';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar'

function App() {

  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

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
  
  const filterSongs =async () => {
    try{
    let response = await axios
    .get('http://127.0.0.1:8000/api/music/');
    if (songs.title.toLowerCase().includes(filterValue.toLowerCase()) ||
    songs.artist.toLowerCase().includes(filterValue.toLowerCase()) ||
    songs.album.toLowerCase().includes(filterValue.toLowerCase()) ||
    songs.release_date.toString().toLowerCase().includes(filterValue.toString().toLowerCase()) ||
    songs.genre.toLowerCase().includes(filterValue.toLowerCase())){
    setFilteredSongs(response);
    }
    }catch(error){
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
          <SearchBar filterSongsByValue={filterSongs}/>
        </div>
        <div className='border-box'>
          <DisplayMusic parentSongs={songs}/>
          {filteredSongs.map((song, index) => (
            <DisplayMusic />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
