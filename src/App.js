import Header from './components/Header'
import Search from './components/Search'
import UserPage from './components/UserPage';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import './App.css';
import axios from 'axios'

function App() {
const [savedSongs, setSavedSongs] = useState([])

const saveSong = (songInfo) => {
  console.log('procedure to add song to DB')
  axios.post(`http://localhost:3002/api/songs`, songInfo)
    .then(res => console.log(res.data))
  setSavedSongs([...savedSongs, songInfo])
}
  return (
    <div className="App">
        
        <BrowserRouter>
          <Switch>
            <Route path="/userpage">
              <Header />
              <UserPage list={savedSongs}/>
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
