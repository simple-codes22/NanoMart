
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Button, useToast } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../components/userContext';
import { useNavigate } from 'react-router-dom';



const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const Toast = useToast();
  
  return (
    <>
      <Header />
        <Box as="main" maxWidth='1280px'>
          { user ? 
            <>
            {user.email}
              <Button onClick={() => {
                  setUser(null)
                  Toast({
                    title: "Logged Out Successfully",
                    status: 'success',
                    duration: 5000,
                  })
                  navigate('/')
                }
              }>
                Log Out
              </Button>
            </> 
            : 
            <></>
          }
        </Box>
      <Footer />
    </>
  )
}

export default Account