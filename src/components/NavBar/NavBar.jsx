import { Link } from "react-router-dom"

const NavBar = () => {
  return ( 
    <header>
      <nav>
        <Link to='/starships'>Starships</Link>
      </nav>
    </header>
  )
}

export default NavBar