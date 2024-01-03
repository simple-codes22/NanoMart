import { Box } from "@chakra-ui/react";
import Showcase from "../components/Showcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const cards = [
  {
    image: 'src',
    title: 'Card Test',
    price: 2000,
    percentage_discount: 20,
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <Box as="main" display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
          <Showcase />
          <Box as='section'>
            {cards.map(elem => (
              <Card key={cards.indexOf(elem)+1} image={elem.image} title={elem.title} price={elem.price} percentage_discount={elem.percentage_discount} />
            ))}
          </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Home