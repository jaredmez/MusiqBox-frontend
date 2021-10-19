function MoreMenu(props) {
    return ( 
      <div className="dropdown-content">
        <ul>
          <li>find similar songs</li>
          <li>find similar artist</li>
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