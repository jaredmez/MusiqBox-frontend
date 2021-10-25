import { useState, useEffect } from 'react'

function SimArtists(props) {
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        setArtistData(props.data)
    },[props])

    console.log(artistData[0])

    return (
        <div>
        <h1 className="sim-artist"> List of Similar Artists to go here</h1>
        {artistData.map((song, index) => 
           <p key={index}> {song.name}</p>)}
        </div>
    )
}

export default SimArtists