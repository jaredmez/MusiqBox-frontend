import react from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <>
        <h1><Link to="/">Musiq Box</Link></h1>
        <Link to="/userpage">Saved Songs</Link>
        </>
    )
}

export default Header