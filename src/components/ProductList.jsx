import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const ProductList = ({products, AddToCart}) => {


  return (
    <>

        {
            products.map((product,id) => {
                    return (
                      <Card style={{ width: '18rem' }} key={id}>
                        <Card.Img variant="top" src={product.image}/>
                        <Card.Body>
                          <Card.Title>{product.title}</Card.Title>
                          <Card.Text>
                         {product.description}
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

export default ProductList;