
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';

const Account = () => {
  return (
    <>
      <Header />
        <Box as="main" maxWidth='1280px'>
          Account Profile
        </Box>
      <Footer />
    </>
  )
}

export default Account