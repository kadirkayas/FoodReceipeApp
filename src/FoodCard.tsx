import { Card, ListGroup } from "react-bootstrap"

const FoodCard = ({ title, image, ingredientLines ,url}: { title: string; image: string; ingredientLines: string[] , url: string}) => {
  
    return (
    <>
    
    <Card className="food-card ">
    <a href={url} target="_blank">
      <Card.Img variant="top" src={image} />
    </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Ingredients:</Card.Text>
        <ListGroup variant="flush">
        {ingredientLines.map((ingredient, index) => (
            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
          ))}  
        </ListGroup>
      </Card.Body>
    </Card>
        </>
    )
}
export default FoodCard