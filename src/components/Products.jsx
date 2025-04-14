import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Products = ({products, AddToCart}) => {


  return (
    <>

        {
            products.map((product,id) => {
                    return (
                      <Card style={{ width: '18rem' }} key={id}>
                        <Card.Img variant="top" src={product.image}/>
                        <Card.Body>
                          <Card.Title>{product.category}</Card.Title>
                          <Card.Text>
                         {product.title}
                          </Card.Text>
                          <Card.Title>
                        $ {product.price}
                          </Card.Title>
                          <Button variant="primary" onClick={() => AddToCart(product)}>add to cart</Button>
                        </Card.Body>
                      </Card>
                    );
                  }
                  
                 
                )
            }
        
 
   
    </>
  );
}

export default Products;