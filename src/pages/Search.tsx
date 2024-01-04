import Header from "../components/Header"
import Footer from "../components/Footer"
import { Box } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

const Search = () => {
    const { product } = useParams();
  return (
    <>
        <Header />
        <Box as="main">
            Search Results
            {product}
        </Box>
        <Footer />
    </>
  )
}

export default Search