import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box as='footer' display='flex' justifyContent='center' alignItems='center' background="#000000c9" color="white">
        <Flex width='100%' maxWidth='1280px' justify="center" align='center' >
          <Box display='flex' justifyContent='center' flexDirection='column'>
            <Text>About NanoMart</Text>
            <Box display='flex' flexDirection='column'>
              <Link to='#'>About Us</Link>
              <Link to='#'>Terms and Conditions</Link>
              <Link to='#'>Documentation</Link>
            </Box>
          </Box>
          <Box display='flex' justifyContent='center' flexDirection='column'><Text>About NanoMart</Text></Box>
          <Box display='flex' justifyContent='center' flexDirection='column'><Text>About NanoMart</Text></Box>
          <Box display='flex' justifyContent='center' flexDirection='column'><Text>About NanoMart</Text></Box>
        </Flex>
    </Box>
  )
}

export default Footer