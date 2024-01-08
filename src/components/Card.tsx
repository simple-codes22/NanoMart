import { Box, Button, CardBody, CardFooter, Card as ChakraCard, Image } from '@chakra-ui/react';
import { useState } from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import noImage from './../assets/No_image_available.png';


interface CardDetails {
    image: string | null;
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
            {props.image ? 
              <Image objectFit='cover' width="265px" height="265px" alt={props.title} src={props.image} />
            : 
              <Image alt={`No image available for ${props.title}`} src={noImage} />
            }
            <Box pt="30px" sx={{
              fontSize: '18px',
              fontWeight: '600',
              letterSpacing: '.6px',
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
          </CardFooter>
        </ChakraCard>
        : <Box></Box>}
    </>
  )
}

export const SmallCard = (props: CardDetails) => {

  const [buttonText, setButtonText] = useState<string>("Add To Cart");
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
  <>
  {props ? 
        <ChakraCard display='flex' maxWidth="250px">
          <CardBody width="100%" display='flex' flexDirection='column' as={Link} to={`/product/1`} _hover={{
            // To be worked on later
          }}>
            {props.image ? 
              <Image alignSelf='center' objectFit='cover' maxWidth="150px" maxHeight="150px" alt={props.title} src={props.image} />
            : 
              <Image alignSelf='center' alt={`No image available for ${props.title}`} src={noImage} maxWidth="200px" maxHeight="200px" />
            }
            <Box pt="30px" sx={{
              fontSize: '16px',
              fontWeight: '500',
              letterSpacing: '.3px',
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
          </CardFooter>
        </ChakraCard>
        : <Box></Box>}
  </>
  )
}

export default Card