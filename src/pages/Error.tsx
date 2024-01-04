import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";

const Error = () => {
  useEffect(() => {
    document.title = "NanoMart | Error"
  })
  return (
    <>
      <Header />
        <Flex as="main" justify='center' align='center' height='80vh'>
          <Text fontSize="35px" fontWeight='700' color="grey">
            Oops, Something went Wrong!!
          </Text>
        </Flex>
      <Footer />
    </>
  )
}

export default Error