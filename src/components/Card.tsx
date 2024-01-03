import { Box, Button, CardBody, CardFooter, Card as ChakraCard, Image } from '@chakra-ui/react';

interface CardDetails {
    image: string;
    title: string;
    price: number;
    percentage_discount: number;

}

const Card = (props: CardDetails) => {
  return (
    <>
        {props ? 
        <ChakraCard>
          <CardBody>
            <Image objectFit='cover' alt={props.title} src={props.image} />
            <Box pt="30px">
              {props.title}
            </Box>
            <Box pt='10px' pb='10px'>
              ${props.price}
            </Box>
          </CardBody>
          <CardFooter>
            <Button>
              Add To Cart
            </Button>
          </CardFooter>
        </ChakraCard>
        : <Box></Box>}
    </>
  )
}

export default Card