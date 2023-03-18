import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateSong from './Components/CreateSong/CreateSong';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    console.log('Hello World');
  }, [])

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response);
    setSongs(response.data)
  }

  async function addNewSong (song){
    const response = await axios.post('http://127.0.0.1:8000/api/music/')
    let tempSongs = [...songs, song];
    console.log(response)
    setSongs(tempSongs);
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
        <div className='border-box'>
          <DisplayMusic parentSongs={songs}/>
        </div>
      </div>
    </div>
  );
}

export default App;
