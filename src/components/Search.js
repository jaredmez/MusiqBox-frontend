import {useState} from 'react'
import { getTopTracks, getTopAlbums } from '../services/musiq';
import TrackInfo from './TrackInfo';

function Search(props) {
    const [searchValue, setSearchValue] = useState("")
    const [trackResults, setTrackResults] = useState([])

    const onChange = (e) => {
        setSearchValue(e.target.value);
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            getTopTracks(searchValue)
            .then(results => results.json())
            .then(returnedTracks => {
                const tracks = returnedTracks.toptracks.track.slice(0, 10)
                setTrackResults(tracks)
            })
        }
    }
    if (trackResults.length === 0) {
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
                </div>
            </div>
        )
    } else {
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
}

export default Search