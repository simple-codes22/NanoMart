import { Box, Flex, Input, Button, HStack, Tag, TagLabel, useToast } from "@chakra-ui/react";
import { UserContext } from "./userContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Header = () => {

  const { user, details, setDetails } = useContext(UserContext);
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();
  const Toast = useToast();

  useEffect(() => {

    const getCart = async () => {
      const cartResponse = await fetch(`${import.meta.env.VITE_HOST_USER}${user?.customer_id}`);
      if (cartResponse.status === 200) {
        const data = await cartResponse.json()
        setDetails(data)
      } else {
        console.log(cartResponse.status);
      }
    };

    user && getCart();

  }, [user, setDetails])

  return (
    <Flex as='header' justify='center' align='center' pt='20px' pb='20px'>
      <Flex maxWidth='1280px' width="100%" justify='space-evenly' align='center'>

        <Box as={Link} to='/' display='flex' justifyContent="center" alignItems='center'>NanoMart | Logo</Box>

        <Flex justify="center" align="center">
          <Input variant='outline' placeholder="Search Products and Brands" width="100%" minWidth={{base: '300px', sm: '350px', md:'400px', lg: '500px' }} onKeyUp={(elem) => {
            setSearch(elem.currentTarget.value);
          }} />
          <Button variant="outline" ml='10px' onClick={() => {
            if (search !== '') {
              navigate(`/search/${search}`)
            } else {
              Toast({
                title: "Search is empty",
                position: "bottom-right",
                // description: "You haven't searched for a product",
                status: 'info',
                duration: 4000,
                isClosable: false
              })
            }
          }}>Search</Button>
        </Flex>

        <HStack align='center' spacing='70px'>
          { user ? 
            <Link to={`/profile/`}>Account</Link>
            : 
            <Link to={`/auth/`}>Login / Sign Up</Link>
          }
          <Link to="/cart">Cart <Tag display='inline-flex' justifyContent='center' alignItems='center' colorScheme="orange" size='md'><TagLabel>{details ? <>{details.cart.length}</>: <>0</>}</TagLabel></Tag></Link>
        </HStack>

      </Flex>
    </Flex>
  )
}

export default Header