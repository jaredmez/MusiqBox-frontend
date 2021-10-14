import { useState, useEffect } from 'react'
import PlaylistItem from './PlaylistItem'
import axios from "axios";

function UserPage(props) {
    const [playlist, setPlaylist] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3002/api/songs')
            .then(playlist => setPlaylist(playlist.data))
    }, [])
    
    return (
        <>
            <h1>list of saved songs</h1>
            
            {playlist.map(song => 
                <PlaylistItem key={song.name} data={song} /> )}
        </>
        
    )
}

export default UserPage