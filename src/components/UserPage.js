import { Link } from "react-router-dom";

function UserPage(props) {
    return (
        <>
            <h1>list of saved songs</h1>
            {props.list.map(song => 
                <h3>{song.artist}: {song.name}</h3>)}
        </>
        
    )
}

export default UserPage