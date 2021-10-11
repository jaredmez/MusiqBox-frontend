import {useState} from 'react'
import { getTopTracks, getTopAlbums, getTrackInfo} from '../services/musiq';
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
    //     .then( async (tracks) => {
    //         const trackInfo =[];

    //         for (let i=0; i < tracks.length; i++) {
    //             const newUTubeInfo = await getTrackInfo(searchValue, tracks[i].name)
    //             trackInfo.push(newUTubeInfo);
    //             console.log(newUTubeInfo);
    //         }
    //         // tracks.forEach(async track => {
    //         //     console.log(track.name)
    //         //     const newTrackInfo = await getTrackInfo(searchValue, track.name)
    //         //     console.log(typeof newTrackInfo)
    //         //     trackInfo.push(newTrackInfo);
    //         // });
    //         console.log(trackInfo.length);
    //         // return trackInfo;
    //     })
    //     // .then(tracks => {
            
    //     //     console.log(tracks.length);
    //     // })
    //         // getTrackInfo(searchValue, tracks)
    //         //     .then()
        }

    // // getTopAlbums(searchValue)
    // //     .then(res => res.json())
    // //     .then(res => console.log(res))


    return (
        <div>
            <input 
                type='text'
                value={searchValue}
                onChange={onChange}
            />
            <button onClick={onClick}>search</button>

            <div className="track-content">
                {trackResults.map(track => 
                    <TrackInfo track={track} saveSong={props.saveSong} />
                )}
            </div>

            <div className="top-albums-list">

            </div>
        </div>
      
    )
}

export default Search