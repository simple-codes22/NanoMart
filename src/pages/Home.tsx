import { Box, SimpleGrid } from "@chakra-ui/react";
import Showcase from "../components/Showcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import one from './../assets/Products/1 (1).jpg';
import two from './../assets/Products/1 (2).jpg';
import three from './../assets/Products/1 (3).jpg';
import four from './../assets/Products/1 (4).jpg';

const cards = [
  {
    image: one,
    title: 'Card Test',
    price: 2000,
    percentage_discount: 20,
  },
  {
    image: two,
    title: 'Card Test',
    price: 6000,
    percentage_discount: 20,
  },
  {
    image: three,
    title: 'Card Test',
    price: 6000,
    percentage_discount: 20,
  },
  {
    image: four,
    title: 'Card Test',
    price: 6000,
    percentage_discount: 20,
  },
  {
    image: four,
    title: 'Card Test',
    price: 6000,
    percentage_discount: 20,
  },
  {
    image: one,
    title: 'Card Test',
    price: 2000,
    percentage_discount: 20,
  },
  {
    image: two,
    title: 'Card Test',
    price: 6000,
    percentage_discount: 20,
  },
  {
    image: three,
    title: 'Card Test',
    price: 6000,
    percentage_discount: 20,
  },
  {
    image: one,
    title: 'Card Test',
    price: 2000,
    percentage_discount: 20,
  },
  {
    image: two,
    title: 'Card Test',
    price: 6000,
    percentage_discount: 20,
  },
  {
    image: three,
    title: 'Card Test',
    price: 6000,
    percentage_discount: 20,
  },
]

const Home = () => {
  return (
    <>
      <Header />
      <Box as="main" display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
          <Showcase />
          <SimpleGrid as='section' maxWidth='1280px' columns={{base:2, md:4}} spacing='15px' sx={{
            transform: 'translateY(-5%);',
          }}>
            {cards.map(elem => (
              <Card key={cards.indexOf(elem)+1} image={elem.image} title={elem.title} price={elem.price} percentage_discount={elem.percentage_discount} />
            ))}
          </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default Home