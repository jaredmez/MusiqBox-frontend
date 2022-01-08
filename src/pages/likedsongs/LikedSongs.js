import { useState, useEffect } from 'react'
import PlaylistItem from '../../components/playlist/PlaylistItem'
import axios from "axios";
import VideoPlayer from '../../components/videoPlayer'
import { getTrackInfo} from '../../services/musiq'
import "./likedsongs.css"

function UserPage(props) {
    const [playlist, setPlaylist] = useState([])
    const [playVid, setPlayVid] = useState({info: {}, play: false});
    const [pullFromDB, setPullFromDB] = useState(false);
    
    useEffect(() => {
      axios
        .get('https://musiqbox.herokuapp.com/api/songs')
        .then(playlist => setPlaylist(playlist.data))
    }, [pullFromDB])

    const onPlay = async (songInfo) => {
        if (songInfo.videoId) {
            setPlayVid({info: songInfo, play: true})
        }
        else {
          //call function to get video ID
          const youtubeInfo = await getTrackInfo(songInfo.artist, songInfo.name);
          await axios.put(`https://musiqbox.herokuapp.com/api/songs/${songInfo.id}`, {videoId: youtubeInfo});
          await setPullFromDB(!pullFromDB);
          setPlayVid({info: {...songInfo, videoId: youtubeInfo}, play: true})
        }  
    }

    const closePlayer = () => {
        setPlayVid({info: {}, play: false});
    }
    
    return (
        <div className="likedsongs">
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