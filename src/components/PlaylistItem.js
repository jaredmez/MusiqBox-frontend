import playicon from '../images/play-button2.png'
import moreicon from '../images/more-icon.png'
import MoreMenu from './MoreMenu'
import { getSimArtist, getSimSongs } from '../services/musiq'
import axios from 'axios'

function PlaylistItem(props) {
    const { name, artist, id } = props.data;

    const onRemove = () => {
        console.log(`want to remove ${name} song with id: ${id}`)
        axios.delete(`http://localhost:3002/api/songs/${id}`)
    }

    const getArtist = async (artistName) => {
      console.log('get similar artists code block')
      console.log(artistName)
      const simArtists = await getSimArtist(artistName)
                                .then(results => results.json())
      console.log(simArtists.similarartists.artist.slice(0, 10))
    }

    
    return (
        <>
          <ul>
            <li>
              <ul className="playlist-item-ctn">
                <li 
                  className="play-ctn">
                  <img 
                    src={playicon} 
                    alt="" 
                    onClick={() => props.onPlay(props.data)}
                  />
                </li>
                <li className="track-name">{name}</li>
                <li className="track-artist">{artist}</li>
                <li id="more-icon"> 
                  <div className="dropdown">
                    <img id="more-img" src={moreicon} alt="" />
                    <MoreMenu 
                      onRemove={onRemove} 
                      getSimArtist={() => getArtist(artist)} 
                      getSimSongs={() => props.getSongs(artist, name)}/>
                  </div>
                </li>
              </ul>
            </li>
          </ul> 
        </>
        
    )
}

export default PlaylistItem