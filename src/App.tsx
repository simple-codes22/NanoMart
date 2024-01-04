import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserContextProvider } from "./components/userContext";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Product from "./pages/Product";
import Authentication from "./pages/Authentication";

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
    ],
  },
  {
    path: 'cart/',
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
    path: 'auth/',
    element: <Authentication />
  },
  {
    path: 'product/',
    element: <Product />
  },
])


const App = () => {

  return (
    <UserContextProvider>
      <ChakraProvider theme={mainTheme}>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </UserContextProvider>
  )
}

export default App
