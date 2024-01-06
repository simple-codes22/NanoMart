import { Box, Button, Flex, Image, Text, Link, Badge } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams, Link as RouterLink } from "react-router-dom";
import one from "./../assets/Products/1 (1).jpg";

const Product = () => {
  const { product_id } = useParams();

  return (
    <>
      <Header />
      <Box
        as="main"
        maxWidth="1280px"
        display="flex"
        width="100%"
        alignSelf="center"
        alignItems="center"
        flexDirection="column"
      >
        <Flex justifyContent="center" width="100%">
          <Flex justify="center" align="center" width="40%" pr="10px">
            <Image src={one} width="100%" height="100%" alt="Image Carousel" />
          </Flex>
          <Flex direction="column" width="60%" padding="30px">
            <Box pt="30px" pb="20px" fontSize="25px" fontWeight="600">
              Hp EliteBook 840 G6 Intel Core I5 16GB RAM/512GB SSD/Backlit
              Keyboard/FP Reader Windows 11 Pro +BAG {product_id}
            </Box>
            <Box pb="20px">
              Brand:{" "}
              <Link as={RouterLink} to="#" color="#1974be">
                HP
              </Link>
            </Box>
            <Flex alignItems="flex-end">
              <Box pr="15px" fontSize="23px" fontWeight="700">
                {"$"} 20,000
              </Box>{" "}
              <Box
                pr="20px"
                color="#00000095"
                fontSize="18px"
                textDecoration="line-through"
              >
                50,000
              </Box>{" "}
              <Badge
                colorScheme="green"
                fontSize="1rem"
                variant='subtle'
                alignSelf='center'
              >
                -60%
              </Badge>
            </Flex>
            <Box pt="20px">Rating: 4.5/5</Box>
            <Box pt="50px" width="90%">
              <Button width="100%">Add To Cart</Button>
            </Box>
          </Flex>
        </Flex>
        <Box display="flex" width="100%" flexDirection="column">
          <Text fontSize="30px" pt="30px" pb="30px">
            Description
          </Text>
          <Box width="100%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            atque odio laboriosam, quae in fugiat asperiores fuga impedit. Iure
            deserunt quo odio et voluptates earum dicta quidem itaque tenetur
            laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illum tempore vel dolorem hic saepe eum beatae expedita itaque
            molestias sunt, illo ullam quaerat dicta alias animi voluptatibus
            quam? Consequuntur, rerum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam illo, laborum qui doloribus officiis aperiam.
            Accusantium dolorem beatae velit ipsa aut commodi in quaerat a,
            ducimus magnam vero, nemo odit? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Impedit, voluptate praesentium.
            Provident, ad corrupti ea blanditiis odit voluptatum voluptas quia,
            vero sed soluta illum saepe ducimus aut fugit reprehenderit
            nesciunt?
          </Box>
        </Box>
        <Box display="flex" width="100%" flexDirection="column">
          <Text fontSize="30px" pt="30px" pb="30px">
            Customer Reviews
          </Text>
          <Box pb="30px">
            <Box>Stars: 4.5/5</Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, sapiente omnis. Soluta natus facilis excepturi quidem
              animi eius aliquid accusamus. At odit ab nemo minima recusandae
              quaerat deserunt dicta impedit.
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Product;
