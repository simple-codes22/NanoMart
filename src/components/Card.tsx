import { Box, Button, CardBody, CardFooter, Card as ChakraCard, Image } from '@chakra-ui/react';
import { useState } from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CardDetails {
    image: string;
    title: string;
    price: number;
    percentage_discount: number;

}

const Card = (props: CardDetails) => {
  const [buttonText, setButtonText] = useState<string>("Add To Cart");
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
        {props ? 
        <ChakraCard opacity='.9'>
          <CardBody as={Link} to={`/product/1`} _hover={{
            // To be worked on later
          }}>
            <Image objectFit='cover' width="265px" height="265px" alt={props.title} src={props.image} />
            <Box pt="30px" sx={{
              fontSize: '20px',
              fontWeight: '600',
              letterSpacing: '1px',
              overflow: 'hidden',
            }}>
              {props.title}
            </Box>
            <Box pt='10px' letterSpacing='1px'>
              ${props.price}
            </Box>
          </CardBody>
          <CardFooter>
            {/* <Button>Wishlist</Button> */}
            <Button width='100%' id="btn-cart" disabled={disabled} onClick={() => {
              setDisabled(true);
              setButtonText("Successfully Added");
              setTimeout(() => {
                setButtonText("In Cart");
              }, 5000);
              return
            }}>
              {buttonText}
            </Button>

            {/* {disabled ? 
            <Button width='100%' id="btn-cart" onClick={() => {
              setDisabled(true);
              return
            }}>
              {buttonText}
            </Button>
            : 
            <Button width="100%" disabled={true}>
              In Cart
            </Button>
            } */}
          </CardFooter>
        </ChakraCard>
        : <Box></Box>}
    </>
  )
}

export default Card