import Header from "../components/Header"
import Footer from "../components/Footer"
import { Box, SimpleGrid } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { productCardModel } from "../components/userContext";
import { SmallCard } from "../components/Card";
import { ellipsize } from "../components/misc"

const Search = () => {
  const { product } = useParams();
  const [results, setResults] = useState<productCardModel[] | null>(null);

  useEffect(() => {
    const getResults = async () => {
      const response = await fetch(`${import.meta.env.VITE_HOST_SEARCH}/${product}`);
      const result_ = await response.json()
      setResults(result_);
    };

    getResults();
  }, [product]);

  return (
    <>
        <Header />
        <Box as="main" maxW="1280px">
          <Box>
            <Box padding="30px" fontSize='18px' letterSpacing='.6px' fontWeight='600'>
              Search results for: {product}
            </Box>

            {
              results ? 
                  <SimpleGrid as='section' width="100%" columns={{base:2, md:4}} spacing='15px' padding='20px'>
                    {results.map((elem) => (
                      <SmallCard title={ellipsize(elem.name)} image={null} price={parseInt(elem.price)} percentage_discount={elem.discount} />
                    ))}
                  </SimpleGrid>
                : 
                  <></>
            }
          </Box>

        </Box>
        <Footer />
    </>
  )
}

export default Search