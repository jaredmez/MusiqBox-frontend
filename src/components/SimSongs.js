import { useState, useEffect } from 'react'
function SimSongs(props) {
    const [songData, setSongData] = useState([])

    useEffect(() => {
        setSongData(props.data)
    },[props])


    return (
        <div>
        <h1 className="sim-songs"> List of Similar Songs to go here</h1>
        {songData.map((song, index) => 
           <p key={index}> {song.name}</p>)}
        </div>
    )
}

export default SimSongs