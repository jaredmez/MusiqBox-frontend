import Search from './pages/search/Search'
import UserPage from './components/UserPage';
import SimArtists from './components/SimArtists'
import SimSongs from './components/SimSongs'
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
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
  axios.post(`https://evening-everglades-19373.herokuapp.com/api/songs`, songInfo)
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
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Switch>
          <Route path="/similarartists">
            <SimArtists data={simArtists}/>
          </Route>
          <Route path="/similarsongs">
            <SimSongs data={simSongs}/>
          </Route>
          <Route path="/userpage">
            <UserPage list={savedSongs} getSongs={getSongs} getArtist={getArtist} />
          </Route>
          <Route path="/search">
            <Search saveSong={saveSong}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          </Switch>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
