import Header from './components/Header'
import Search from './components/Search'
import UserPage from './components/UserPage';
import SimArtists from './components/SimArtists'
import SimSongs from './components/SimSongs'
import { useState } from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import { getSimArtist, getSimSongs } from './services/musiq'
import './App.css';
import axios from 'axios'

function App() {
const [savedSongs, setSavedSongs] = useState([])
const [simSongs, setSimSongs] = useState([])

const saveSong = (songInfo) => {
  console.log('procedure to add song to DB')
  axios.post(`http://localhost:3002/api/songs`, songInfo)
    .then(res => console.log(res.data))
  setSavedSongs([...savedSongs, songInfo])
}

const getSongs = async (artistName, songName) => {
  await setSimSongs([]);
  console.log('get similar song')
  console.log(artistName + ' ' + songName)
  const similarSongs = await getSimSongs(artistName, songName)
                    .then(results => results.json())
                    .then(results => results.similartracks.track.slice(0, 5))

  setSimSongs(similarSongs);
}

  return (
    <div className="App">
        
        <BrowserRouter>
          <Switch>
            <Route path="/similarartists">
              <Header list={savedSongs}/>
              <SimArtists />
            </Route>
            <Route path="/similarsongs">
              <Header list={savedSongs} />
              <SimSongs data={simSongs}/>
            </Route>
            <Route path="/userpage">
              <Header />
              <UserPage list={savedSongs} getSongs={getSongs}/>
            </Route>
            <Route path="/">
              <Header list={savedSongs}/>
              <Search saveSong={saveSong}/>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
