import Search from './pages/search/Search'
import LikedSongs from './pages/likedsongs/LikedSongs';
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
import Landing from './pages/Landing';

function App() {
  const [simSongs, setSimSongs] = useState([])
  const [simArtists, setSimArtists] = useState([])
  const [authed, setAuth] = useState(false);

  const saveSong = (songInfo) => {
    axios.post(`https://evening-everglades-19373.herokuapp.com/api/songs`, songInfo)  
  }

  const getSongs = async (artistName, songName) => {
    await setSimSongs([]);
    const similarSongs = await getSimSongs(artistName, songName)
      .then(results => results.json())
      .then(results => results.similartracks.track.slice(0, 5))

    setSimSongs(similarSongs);
  }

  const getArtist = async (artistName) => {
    await setSimArtists([]);
    const simArtist = await getSimArtist(artistName)
      .then(results => results.json())
      .then(results => results.similarartists.artist.slice(0,10))
    setSimArtists(simArtist);
  }

  if (!authed) {
    return (
    <Landing startDemo={setAuth}/>
    )
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
          <Route path="/likedsongs">
            <LikedSongs getSongs={getSongs} getArtist={getArtist} />
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
