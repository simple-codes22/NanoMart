import { Box, Card as ChakraCard } from '@chakra-ui/react';

interface CardDetails {
    image: string;
    title: string;
    price: number;
    percentage_discount: number;

}

const Card = (props: CardDetails) => {
  return (
    <Box>
        {props ? 
        <ChakraCard>

        </ChakraCard>
        : <Box></Box>}
    </Box>
  )
}

export default Card