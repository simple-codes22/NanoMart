import { Box, SimpleGrid } from "@chakra-ui/react";
import Showcase from "../components/Showcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import one from './../assets/Products/1 (1).jpg';
// import two from './../assets/Products/1 (2).jpg';
// import three from './../assets/Products/1 (3).jpg';
// import four from './../assets/Products/1 (4).jpg';
import { useEffect, useState } from "react";
import { ellipsize } from "../components/misc";
import { productCardModel } from "../components/userContext";

const Home = () => {
  console.log(import.meta.env.VITE_HOST_PRODUCT)
  const [productList, setProductList] = useState([] as productCardModel[]);

  useEffect(() => {
    const getProducts = async () => {
      const product = await fetch(import.meta.env.VITE_HOST_PRODUCT, {
      method: "GET",
    })
      const response = await product.json();
      
      return setProductList(response);
      
    }
    getProducts();
  }, [])

  return (
    <>
      <Header />
      <Box as="main" display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
          <Showcase />
          <SimpleGrid as='section' maxWidth='1280px' columns={{base:2, md:4}} spacing='15px' sx={{
            transform: 'translateY(-5%);',
          }}>
            {
              productList ?
              <>
              {productList.map(elem => (
                <Card key={elem.product_id} image={null} title={ellipsize(elem.name)} price={parseFloat(elem.price)} percentage_discount={elem.discount} />
              ))}
              </>
            : 
            <></>
            }

          </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default Home