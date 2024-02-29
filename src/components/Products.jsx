import React from 'react'
import { useState, useEffect } from 'react'
import { readData } from '../util'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

const URL = 'https://raw.githubusercontent.com/mkatay/json_products/main/products'


export const Products = () => {
  const [product, setProduct] = useState([])


  useEffect(() => {
    readData(URL, setProduct)
  }, [])

  console.log(product);

  return (
    <>
    <h2 className='text-primary m-2 p-3'>Our Products</h2>
    <div className='container p-2 gap-2 shadow d-flex flex-wrap justify-content-center '>
      {product.map(obj =>
        <Card key={obj.id} className='p-2 justify-content-center align-items-center m-2'
          style={{
            width: '18rem'
          }}>
          <img src={obj.thumbnail} alt={obj.title} className='img-fluid' />
          <CardBody>
            <CardTitle>
              {obj.title}
            </CardTitle>
            <CardSubtitle>
              {obj.category}
            </CardSubtitle>
            <CardText>
              {obj.description}
            </CardText>
            <Button className='w-100'>
              Add to Cart
            </Button>
          </CardBody>
        </Card>
      )}
    </div>
    </>
  )
}

