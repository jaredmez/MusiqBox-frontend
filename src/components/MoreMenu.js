import { Link } from 'react-router-dom'

function MoreMenu(props) {
    return ( 
      <div className="dropdown-content">
        <ul>
          <Link className="songLink" to="/similarsongs"><li onClick={props.getSimSongs}>find similar songs</li></Link>
          <Link className="artistLink" to="/similarartists"><li onClick={props.getSimArtist}>find similar artists</li></Link>
          <li 
            onClick={props.onRemove} 
            className="remove-btn">
            remove
          </li>
        </ul>
      </div>
    )
}

export default MoreMenu