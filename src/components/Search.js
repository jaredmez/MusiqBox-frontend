import {useState} from 'react'
import { getTopTracks, getTopAlbums } from '../services/musiq';
import TrackInfo from './TrackInfo';

function Search(props) {
const [searchValue, setSearchValue] = useState("")
const [trackResults, setTrackResults] = useState([])
// const [topAlbums, setTopAlbums] = useState([])

const onChange = (e) => {
    setSearchValue(e.target.value);
}

const onClick = (e) => {
    getTopTracks(searchValue)
        .then(results => results.json())
        .then(returnedTracks => {
            const firstFiveTracks = returnedTracks.toptracks.track.slice(0, 5)
            setTrackResults(firstFiveTracks)
            console.log(firstFiveTracks)
            return firstFiveTracks
        })
}

const onEnter = (e) => {
    if (e.key === 'Enter') {
        getTopTracks(searchValue)
        .then(results => results.json())
        .then(returnedTracks => {
            const firstFiveTracks = returnedTracks.toptracks.track.slice(0, 5)
            setTrackResults(firstFiveTracks)
            console.log(firstFiveTracks)
            return firstFiveTracks
        })
    }
}


    // // getTopAlbums(searchValue)
    // //     .then(res => res.json())
    // //     .then(res => console.log(res))


    return (
        <div className="mainContentPage">
            <div className="searchCtn">
            <input 
                id="searchInput"
                type='text'
                value={searchValue}
                onChange={onChange}
                onKeyPress={onEnter}
                placeholder=". . . search music"
            />
            {/* <button onClick={onClick}>search</button> */}
            </div>
            
            <div className="trackCtn">
            <h3>Top Tracks</h3>
                {trackResults.map((track, indx) => 
                    <TrackInfo key={indx} num={indx} track={track} saveSong={props.saveSong} />
                )}
            </div>

            <div className="top-albums-list">

            </div>
        </div>
      
    )
}

export default Search