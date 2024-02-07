import { Route, Routes } from "react-router-dom"
// components
import NavBar from "./components/NavBar/NavBar"
// pages
import StarshipList from "./pages/StarShipList/StarShipList"
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails"
// css
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/starships/:id" element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
