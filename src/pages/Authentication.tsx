import { Box, Image, Input, Button, Divider, AbsoluteCenter, Flex, Text, HStack } from "@chakra-ui/react"
import { useState } from "react"
import usePreventZoom from "../components/usePreventDefault";
import image from './../assets/Showcase/pexels-karolina-grabowska-5632402.jpg';
// import { useContext } from "react";
// import { UserContext } from "../components/userContext";

interface loginModel<Type> {
  username: Type;
  email: Type;
}

const Authentication = () => {
  usePreventZoom();
  
  // const { user, setUser } = useContext(UserContext);

  const completeAuth = async () => {
    const request = await fetch(import.meta.env.VITE_HOST_USER, {
      method: 'POST',
      headers: {
        "content-type": 'application/json',
      },
      body: JSON.stringify({
        username: loginState.username,
        email: loginState.email
      })
    });
    const response = await request.json();
    console.log(request.status)
    console.log(await response);
    // setUser(response);
  }

  const [loginState, setLoginState] = useState<loginModel<string>>({
    username: "",
    email: "",
  })

  return (
    <Box position='fixed' top={0} bottom={0} left={0} right={0} display='flex'>
        <Flex width="60%" justify='center' align='center'>
          <Image src={image} objectFit='cover' height="100%" width="100%" alt="Photo by Karolina Grabowska" />
        </Flex>
        <Box width="40%" display='flex' justifyContent="center" alignItems='center'>
          <Flex justify='center' align='center' direction='column' width="70%">
            <Text fontSize="25px" mb={10}>Sign In</Text>

            <Input name="Username" variant='flushed' mb="20px" placeholder="Username" onKeyUp={(elem) => {
              setLoginState({
                username: elem.currentTarget.value,
                email: loginState.email,
              })
            }} />
            <Input name="email" variant='flushed' mb="20px" placeholder="Email" onKeyUp={(elem) => {
              console.log((typeof elem).toString());
              setLoginState({
                username: loginState.username,
                email: elem.currentTarget.value,
              })
            }} />

            <Button onClick={() => {
              // elem.preventDefault();
              completeAuth();
            }}>
              Sign In
            </Button>

            <Box position='relative' padding='10'>
            
            <Divider />
            <AbsoluteCenter bg='white' px='4'>
              Or
            </AbsoluteCenter>
            </Box>
            <HStack spacing='40px'>
              <Button>Google</Button>
              <Button>X</Button>
              <Button>GitHub</Button>
            </HStack>
          </Flex>
        </Box>
      {/* <Footer /> */}
    </Box>
  )
}

export default Authentication