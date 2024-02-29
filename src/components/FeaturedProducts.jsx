import React from 'react'
import {featuredProducts} from '../data'
import { Card, CardBody, CardTitle } from 'reactstrap'


const FeaturedProducts = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center m-2">
      {featuredProducts.map(product => 
        <Card key={product.id}
        className="d-flex justify-content-center align-items-center m-2"
        style={{
          width: '18rem'
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
            {product.title}
          </CardTitle>
        </CardBody>
        <img
          alt={product.title}
          src={product.thumbnail}
          width="100%"
        />
      </Card>
      )}
    </div>
  )
}

export default FeaturedProducts