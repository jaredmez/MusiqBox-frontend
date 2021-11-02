import Header from './components/Header'
import Search from './components/Search'
import UserPage from './components/UserPage';
import SimArtists from './components/SimArtists'
import SimSongs from './components/SimSongs'
import Landing from './components/Landing'
import { useState } from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import { getSimArtist, getSimSongs } from './services/musiq'
import './App.css';
import axios from 'axios'

function App() {
const [savedSongs, setSavedSongs] = useState([])
const [simSongs, setSimSongs] = useState([])
const [simArtists, setSimArtists] = useState([])

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

const getArtist = async (artistName) => {
  await setSimArtists([]);
  console.log('get similar artists code block')
  console.log(artistName)
  const simArtist = await getSimArtist(artistName)
                            .then(results => results.json())
                            .then(results => results.similarartists.artist.slice(0,10))
  // console.log(simArtists.similarartists.artist.slice(0, 10))
  setSimArtists(simArtist);
}

  return (
    <div className="App">
        
        <BrowserRouter>
          <Switch>
            <Route path="/similarartists">
              <Header list={savedSongs}/>
              <SimArtists data={simArtists}/>
            </Route>
            <Route path="/similarsongs">
              <Header list={savedSongs} />
              <SimSongs data={simSongs}/>
            </Route>
            <Route path="/userpage">
              <Header />
              <UserPage list={savedSongs} getSongs={getSongs} getArtist={getArtist} />
            </Route>
            <Route path="/home">
              <Header list={savedSongs}/>
              <Search saveSong={saveSong}/>
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
