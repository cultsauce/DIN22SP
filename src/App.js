import {useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../src/components/Card'

const App = () => {
  const [burgers, setBurgers] = useState(null)

  const fetchData = async () => {
    const burgerData = await axios.get('http://localhost:8000/burgers')
    setBurgers(JSON.parse(burgerData.data))
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="App">
      <h1>My Favourite Burgers</h1>
      <div className="burger-feed">
        {burgers?.map(burger => <Card key={burger.id} burger={burger}/>)}
      </div>
    </div>
  )
}

export default App