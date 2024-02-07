import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getStarshipDetails } from '../../services/sw-api'

const StarshipDetails = () => {
  const { id } = useParams()
  const [starship, setStarship] = useState({})

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const data = await getStarshipDetails(id)
        setStarship(data)
      } catch (error) {
        console.error('Error fetching starship details:', error)
      }
    }

    fetchStarship();
  }, [id])

  if (!starship.name) return <h1>Loading details...</h1>

  return (
    <div>
      <h1>Starship Details</h1>
      <p>Name: {starship.name}</p>
      <p>Model: {starship.model}</p>
      <Link to="/starships">Return to Starship List</Link>
    </div>
  )
}

export default StarshipDetails

