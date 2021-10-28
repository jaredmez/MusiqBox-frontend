import { useState, useEffect } from 'react'
import PlaylistItem from './PlaylistItem'
import axios from "axios";
import VideoPlayer from './videoPlayer'
import { getTrackInfo} from '../services/musiq'

function UserPage(props) {
    const [playlist, setPlaylist] = useState([])
    const [playVid, setPlayVid] = useState({info: {}, play: false});
    const [pullFromDB, setPullFromDB] = useState(false);
    
    useEffect(() => {
        axios
          .get('http://localhost:3002/api/songs')
          .then(playlist => setPlaylist(playlist.data))
    }, [pullFromDB])

    const onPlay = async (songInfo) => {
        if (songInfo.videoId) {
            setPlayVid({info: songInfo, play: true})
        }
        else {
            console.log('make call to get video Id from userpage')
            const youtubeInfo = await getTrackInfo(songInfo.artist, songInfo.name);
            console.log('wait to update state to show video')
            
            console.log(songInfo);
            
            
            await axios.put(`http://localhost:3002/api/songs/${songInfo.id}`, {videoId: youtubeInfo});
            await setPullFromDB(!pullFromDB);
            setPlayVid({info: {...songInfo, videoId: youtubeInfo}, play: true})
        }
        
    }

    const closePlayer = () => {
        setPlayVid({info: {}, play: false});
    }
    
    return (
        <div className="user-Page">
          <h1>Liked Songs</h1>
        
          {playlist.map(song => 
            <PlaylistItem 
              key={song.name}
              data={song}
              onPlay={onPlay}
              getSongs={props.getSongs}
              getArtist={props.getArtist}
            /> )}

          <VideoPlayer data={playVid} closePlayer={closePlayer}/>
        </div>
        
    )
}

export default UserPage