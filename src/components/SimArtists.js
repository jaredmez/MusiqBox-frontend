import { useState, useEffect } from 'react'

function SimArtists(props) {
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        setArtistData(props.data)
    },[props])

    console.log(artistData[0])

    return (
        <div className="sim-artist-ctn">
            <h1 className="sim-artist">Similar Artists</h1>
            {artistData.map((song, index) => 
            <p key={index}> {song.name}</p>)}
        </div>
    )


}

export default SimArtists