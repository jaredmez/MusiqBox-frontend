import playicon from '../images/play-button2.png'
import moreicon from '../images/more-icon.png'

function PlaylistItem(props) {
    const { name, artist, } = props.data
    console.log(props.data);
    
    return (
        <>
            <ul>
                <li>
                    <ul className="playlist-item-ctn">
                        {/* <li>{indx + 1}</li> */}
                        <li><img src={playicon} alt="" onClick={() => props.onPlay(props.data)}/></li>
                        <li className="track-name">{name}</li>
                        <li className="track-artist">{artist}</li>
                        <li id="more-icon"> <img src={moreicon} alt="" /></li>
                    </ul>
                </li>
            </ul> 
        </>
        
    )
}

export default PlaylistItem