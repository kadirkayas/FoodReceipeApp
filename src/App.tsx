import './App.css'
import { useState } from 'react'
import FoodCard from './FoodCard'
import { Container, Row, Col } from 'react-bootstrap'
import "./App.css"

const AppId = '51343bcd'
const AppKey = '5121416371eb2f5ad5ef01b725228f1b	'
let searchItem: string
interface Recipe {
  recipe: {
    label: string;
    url: string;
    ingredientLines: string[]
    image: string;
  };
}
function App() {
  const [data, setData] = useState<Recipe[]>([]);
  let query:string
  async function getRecipes() {
    const response = await fetch 
    (`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`); 
    const data = await response.json(); 
    setData(data.hits);
  }
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    query = searchItem
    getRecipes()
  }
  return (
    <>
  <h2>Search Food</h2>
  <form className="search-form" action="" onSubmit={handleSubmit}>
    <input className="search-input" type="text" onChange={e => searchItem = e.target.value} />
    <button className="search-button">Search</button>
  </form>

  <Container >
    <Row xs={1} md={2} lg={3} className="g-3" >
      {data.map((rec, index) => (
        <Col key={index} sm={4} >
          <FoodCard
            title={rec.recipe.label}
            image={rec.recipe.image} 
            url={rec.recipe.url}
            ingredientLines={rec.recipe.ingredientLines}          
            />
        </Col>
      ))}
    </Row>
  </Container>
    </>
  )
}
export default App
