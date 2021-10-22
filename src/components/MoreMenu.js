function MoreMenu(props) {
    return ( 
      <div className="dropdown-content">
        <ul>
          <li onClick={props.getSimSongs}>find similar songs</li>
          <li onClick={props.getSimArtist}>find similar artist </li>
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