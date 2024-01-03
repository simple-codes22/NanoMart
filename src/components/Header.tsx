import { Box, Flex, Input, Button, HStack, Tag, TagLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Flex as='header' justify='center' align='center' pt='20px' pb='20px'>
      <Flex maxWidth='1280px' width="100%" justify='space-evenly' align='center'>

        <Box display='flex' justifyContent="center" alignItems='center'>Logo</Box>

        <Flex justify="center" align="center">
          <Input variant='outline' placeholder="Search Products and Brands" width="100%" minWidth={{base: '300px', sm: '350px', md:'400px', lg: '500px' }} />
          <Button variant="outline" ml='10px'>Search</Button>
        </Flex>

        <HStack align='center' spacing='70px'>
          <Link to="">Account</Link>
          <Link to="/cart">Cart <Tag display='inline-flex' justifyContent='center' alignItems='center' colorScheme="orange" size='md'><TagLabel>0</TagLabel></Tag></Link>
        </HStack>

      </Flex>
    </Flex>
  )
}

export default Header