import { Link } from '@chakra-ui/react'
import { useContext } from 'react'
import { UserContext } from './userContext'
import Cookies from 'js-cookie'

const Logout = () => {
    const { setUser, setUserToken } = useContext(UserContext)
  return (
    <Link onClick={() => {
        setUser(null);
        setUserToken(null)
        Cookies.remove('authToken')
    }}>
        Logout
    </Link>
  )
}

export default Logout