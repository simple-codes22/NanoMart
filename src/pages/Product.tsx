import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import one from './../assets/Products/1 (1).jpg';

const Product = () => {
  const { product_id } = useParams();

  return (
    <>
    <Header />
    <Box as="main" maxWidth='1280px' display='flex' width="100%" alignSelf='center' alignItems='center' flexDirection='column'>
      <Flex justifyContent='center' width="100%" >
        <Flex justify='center' align="center" width='40%' pr='10px'>
          <Image src={one} width='100%' height="100%" alt="Image Carousel" />
        </Flex>
        <Flex direction="column" width="60%" padding='30px'>
          <Box pt="30px" pb="20px" fontSize="25px" fontWeight='600'>Name {product_id}</Box>
          <Flex alignItems='center'>
            <Box pr='20px' fontSize="23px" fontWeight='700'>{'$'}Current Price</Box> <Box pr='20px' color="#00000095" fontSize='18px' textDecoration="line-through">Original Price</Box> <Box pr='20px' color="green" letterSpacing='.5px'>-Discount%</Box>
          </Flex>
          <Box pt="50px" width="80%" >
            <Button width="100%">Add To Cart</Button>
          </Box>
        </Flex>
      </Flex>
      <Box display='flex' width="100%" flexDirection='column'>
        <Text fontSize="25px" >Description</Text>
        <Box width='100%' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque odio laboriosam, quae in fugiat asperiores fuga impedit. Iure deserunt quo odio et voluptates earum dicta quidem itaque tenetur laudantium!
        </Box>
      </Box>
      <Box display='flex' width="100%" flexDirection='column'>
        <Text fontSize="25px" >Customer Reviews</Text>
        <Box>

        </Box>
      </Box>
    </Box>
    <Footer />
    </>
  )
}

export default Product