import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div className="App">
      <div className='nav'>
        <h1>Music Library</h1>
      </div>
    </div>
  );
}

export default App;
