import { Box, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Product = () => {
  return (
    <>
    <Header />
    <Box>
      <Box>
        Image Display Carousel
      </Box>
      <Box>
        <Box>Name</Box>
        <Box>Price</Box>
        <Button>
          Add To Cart
        </Button>
        
      </Box>
    </Box>
    <Footer />
    </>
  )
}

export default Product