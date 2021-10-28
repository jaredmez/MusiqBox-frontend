import { useState, useEffect } from 'react'
function SimSongs(props) {
    const [songData, setSongData] = useState([])

    useEffect(() => {
        setSongData(props.data)
    },[props])


    return (
        <div className="sim-songs-ctn">
        <h1 className="sim-songs"> Similar Songs</h1>
        {songData.map((song, index) => 
           <p key={index}> {song.name}</p>)}
        </div>
    )
}

export default SimSongs