import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Account from "./pages/Account";



const mainTheme = extendTheme({
  colors: {
    brand: {
      100: '#000'
    }
  },
  fonts: {

  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: 'cart',
        element: <Cart />,
        children: [
          {
            path: 'checkout',
          }
        ]
      },
      {
        path: 'profile/:profile-id',
        element: <Account />
      },
      {
        path: 'auth',
      },
      {
        path: 'product'
      },
    ]
  },
])


const App = () => {
  return (
    <ChakraProvider theme={mainTheme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  )
}

export default App
