import { Button, Flex, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../components/userContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  useEffect(() => {
    document.title = "NanoMart | Cart"
  })

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  return (
    <>
    <Header />
    <Flex as='main'  align='center' width="100%">
      {user ? 
      <>
        {user.cart.length !== 0 ? 
          <></> 
        : 
          <Flex justify='center' align='center' width="100%" minH='500px' direction='column'>
            <Text fontSize='35px' fontWeight='600' color="#0000009a">Your Cart Is Empty</Text>
          </Flex>
        }
      </>: 
        <Flex justify='center' align='center' width="100%" minH='500px' direction='column'>
          <Text fontSize='35px' fontWeight='600' color="#0000009a">Your Cart Is Empty</Text>
          <Button mt='20px' mb='20px' onClick={() => {navigate('/auth')}}>Sign In</Button>
        </Flex>
      }
    </Flex>
    <Footer />
    </>
  )
}

export default Cart