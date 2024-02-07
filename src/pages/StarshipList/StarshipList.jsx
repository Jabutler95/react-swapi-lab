import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllStarships } from '../../services/sw-api'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])
  
  useEffect(() => {
    const fetchStarshipList = async () => {
      try {
        const data = await getAllStarships()
        setStarshipList(data.results)
      } catch (error) {
        console.error('Error fetching starship list:', error)
      }
    }

    fetchStarshipList()
  }, [])

  if (!starshipList.name) return <h1>Loading Starships...</h1>

  return (
    <main>
      <h1>Starship List</h1>
      {starshipList.map(starship => (
        <div key={starship.url} className="starship-card">
          <Link to={`/starships/${starship.url.split('/').slice(-2, -1)[0]}`} className="starship-link">
            {starship.name}
          </Link>
        </div>
      ))}
    </main>
  )
}

export default StarshipList
