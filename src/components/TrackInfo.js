

function TrackInfo(props) {
    const internalData = {
        artist: props.track.artist.name,
        artistId: props.track.artist.mbid,
        name: props.track.name,
        playcount: props.track.playcount
    }
    
    return (<>
        <p><strong>{props.track.name}</strong></p>
        <p>playcount: {props.track.playcount}</p>
        <button>play</button>
        <button onClick={() => props.saveSong(internalData)}>save</button>

    </>)
}

export default TrackInfo