import react from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
        <h1 className="mainHeader"><Link className="rLink" to="/">Musiq Box</Link></h1>
        <Link className="rLink" to="/userpage">Saved Songs</Link>
        </header>
    )
}

export default Header