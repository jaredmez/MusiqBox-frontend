import Header from './components/Header'
import Search from './components/Search'
import UserPage from './components/UserPage';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
const [savedSongs, setSavedSongs] = useState([])

const saveSong = (songInfo) => {
  console.log('tried to add')
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
