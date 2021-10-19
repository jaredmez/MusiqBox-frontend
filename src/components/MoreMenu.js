

function MoreMenu(props) {
    return ( 
        <div className="dropdown-content">
           <ul>
               <li onClick={props.onRemove} className="remove-btn">Remove</li>
           </ul>
        </div>
    )
}

export default MoreMenu