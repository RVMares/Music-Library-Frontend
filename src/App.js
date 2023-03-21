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
  
  function filterSongs() {
    let filteredSongs =
    this.songs.filter(song => song.toLowerCase().includes(this.filterValue.toLowerCase()));
    filteredSongs(filteredSongs);
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
          <SearchBar filterValue={filterSongs}/>
        </div>
        <div className='border-box'>
          <DisplayMusic parentSongs={songs}/>
        </div>
      </div>
    </div>
  );
}

export default App;
