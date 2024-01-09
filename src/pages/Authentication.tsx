import {
  Box,
  Image,
  Input,
  Button,
  Divider,
  AbsoluteCenter,
  Flex,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import usePreventZoom from "../components/usePreventDefault";
import image from "./../assets/Showcase/pexels-karolina-grabowska-5632402.jpg";
import { useContext } from "react";
import { UserContext } from "../components/userContext";
// import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface loginModel<Type> {
  email: Type;
  password: Type;
}

const Authentication = () => {
  usePreventZoom();
  // const navigator = useNavigate();
  const Toast = useToast();
  const { setUser } = useContext(UserContext);
  const [statusText, setStatus] = useState("");
  // const [comp, setComp] = useState({} as userModel);
  const [loginState, setLoginState] = useState<loginModel<string>>({
    email: "",
    password: "",
  });

  const completeAuth = async () => {
    const request = await fetch(
      `${import.meta.env.VITE_HOST_AUTH}`,
      {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          email: loginState.email,
          password: loginState.password
        })
      }
    );

    const response = await request.json();
    if (request.status === 200) {
      setUser(jwtDecode(response.access));
      console.log(jwtDecode(response.access));
      // return navigator("/");
    } else if (request.status === 404) {
      setStatus("Not Found");
      Toast({
        title: statusText,
        duration: 5000,
        status: "info",
      });
    }
  };

  return (
    <Box position="fixed" top={0} bottom={0} left={0} right={0} display="flex">
      <Flex width="60%" justify="center" align="center">
        <Image
          src={image}
          objectFit="cover"
          height="100%"
          width="100%"
          alt="Photo by Karolina Grabowska"
        />
      </Flex>
      <Box
        width="40%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex justify="center" align="center" direction="column" width="70%">
          <Text fontSize="25px" mb={10}>
            Sign In
          </Text>

          <Input
            name="email"
            type="email"
            variant="flushed"
            mb="20px"
            placeholder="Email"
            onKeyUp={(elem) => {
              setLoginState({
                email: elem.currentTarget.value,
                password: loginState.password,
              });
            }}
          />
          <Input
            name="password"
            type="password"
            variant="flushed"
            mb="20px"
            placeholder="Password"
            onKeyUp={(elem) => {
              console.log((typeof elem).toString());
              setLoginState({
                email: loginState.email,
                password: elem.currentTarget.value,
              });
            }}
          />

          <Button
            onClick={(elem) => {
              elem.preventDefault();
              completeAuth();
            }}
          >
            Sign In
          </Button>

          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter bg="white" px="4">
              Or
            </AbsoluteCenter>
          </Box>
          <HStack spacing="40px">
            <Button>Google</Button>
            <Button>X</Button>
            <Button>GitHub</Button>
          </HStack>
        </Flex>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Authentication;
