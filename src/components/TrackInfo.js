import {getTrackInfo} from '../services/musiq'
import { useState } from 'react'

function TrackInfo(props) {
    const internalData = {
        artist: props.track.artist.name,
        artistId: props.track.artist.mbid,
        name: props.track.name,
        playcount: props.track.playcount
    }
    const [vidId, setVidId] = useState("");
    const [showVideo, setShowVideo] = useState(false)

    const onPlay = async () => {
        // if (internalData.videoId) {

        // }
        const youtubeInfo = await getTrackInfo(internalData.artist, internalData.name)
        
        internalData.videoId = youtubeInfo;
        setVidId(youtubeInfo);
        console.log('video id added:' + internalData.videoId);
        setShowVideo(true);
    }

    if (showVideo) {
        console.log('check internaldata for id' + vidId)
        return (<>
            <p><strong>{props.track.name}</strong></p>
            <p>playcount: {props.track.playcount}</p>
            <button onClick={onPlay}>play</button>
            <button onClick={() => props.saveSong(internalData)}>save</button>
            
            {/* <iframe id="ytplayer" type="text/html" width="420" height="320"
            src={`https://www.youtube.com/embed/${internalData.videoId}?autoplay=1`} frameBorder="0"></iframe> */}
            <iframe width="420" height="281" src={`https://www.youtube.com/embed/${vidId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>)
    }
    
    return (<>
        <p><strong>{props.track.name}</strong></p>
        <p>playcount: {props.track.playcount}</p>
        <button onClick={onPlay}>play</button>
        <button onClick={() => props.saveSong(internalData)}>save</button>

    </>)
}

export default TrackInfo