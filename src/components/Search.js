import {useState} from 'react'
import getTopTracks from '../services/musiq';

function Search() {
const [searchValue, setSearchValue] = useState("")
const [trackResults, setTrackResults] = useState([])

const onChange = (e) => {
    setSearchValue(e.target.value);
}

const onClick = (e) => {
    getTopTracks(searchValue)
        .then(results => results.json())
        .then(returnedTracks => {
            const firstTenTracks = returnedTracks.toptracks.track.slice(0, 10)
            setTrackResults(firstTenTracks)
        })

}
    return (
        <div>
            <input 
                type='text'
                value={searchValue}
                onChange={onChange}
            />
            <button onClick={onClick}>search</button>

            <div className="track-content">
                {trackResults.map(track => {
                    return <p>{track.name}</p>
                })}
            </div>
        </div>
      
    )
}

export default Search