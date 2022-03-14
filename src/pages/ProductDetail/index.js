import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchProduct } from "../../api"
import ImageGallery from "react-image-gallery"
import { Box, Text, Button } from '@chakra-ui/react';
import { useBasket } from '../../contexts/BasketContext'

function ProductDetail() {

    const {product_id} = useParams();
    const { addToBasket, items } = useBasket();
    
    const { isLoading, error, data } = useQuery(["product",product_id], () => fetchProduct(product_id) );
    //?? burdaki kullanımla products sayfasındaki kullanım neden farklı

    if(isLoading) {
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error.</div>
    }
    

    const findBasketItem = items.find((item) => item._id === product_id);

    const images = data.photos.map((url => ({original:url})))

  return (
    <div>
        <Button colorScheme={findBasketItem ? "pink" : "green"} onClick={() => addToBasket(data, findBasketItem)}>
            
            {
                findBasketItem ? "Remove from basket" : "Add to basket"
            }
            </Button>
        <Text as="h2" fontSize="2xl">{data.title}</Text>
        <Text>{new Date(data.createdAt).toLocaleString()}</Text>
        <p>{data.description}</p>

        <Box margin="10">
            
            <ImageGallery items={images} />     
        </Box>

    </div>
  )
}

export default ProductDetail