import { Box, Flex, Input, Button, HStack, Tag, TagLabel } from "@chakra-ui/react";
import { UserContext } from "./userContext";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {

  const { user } = useContext(UserContext);
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();


  return (
    <Flex as='header' justify='center' align='center' pt='20px' pb='20px'>
      <Flex maxWidth='1280px' width="100%" justify='space-evenly' align='center'>

        <Box as={Link} to='/' display='flex' justifyContent="center" alignItems='center'>NanoMart | Logo</Box>

        <Flex justify="center" align="center">
          <Input variant='outline' placeholder="Search Products and Brands" width="100%" minWidth={{base: '300px', sm: '350px', md:'400px', lg: '500px' }} onKeyUp={(elem) => {
            setSearch(elem.currentTarget.value);
          }} />
          <Button variant="outline" ml='10px' onClick={() => {
            navigate(`/search/${search}`)
          }}>Search</Button>
        </Flex>

        <HStack align='center' spacing='70px'>
          { user ? 
            <Link to={`/profile/`}>Account</Link>
            : 
            <Link to={`/auth/`}>Login / Sign Up</Link>
          }
          <Link to="/cart">Cart <Tag display='inline-flex' justifyContent='center' alignItems='center' colorScheme="orange" size='md'><TagLabel>0</TagLabel></Tag></Link>
        </HStack>

      </Flex>
    </Flex>
  )
}

export default Header