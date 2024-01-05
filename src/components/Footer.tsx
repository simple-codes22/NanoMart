import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const FooterDetails = [
    {
      title: "About NanoMart",
      contentLinks: [
        {
          title: "About Us",
          link: "#"
        },
        {
          title: "Terms and Conditions",
          link: "#"
        },
        {
          title: "Documentation",
          link: "#"
        },
      ]
    },
    {
      title: 'Need Help?',
      contentLinks: [
        {
          title: "Contact Us",
          link: "#"
        },
        {
          title: "Chat With Us",
          link: "#"
        },
        {
          title: "Help Center",
          link: "#"
        },
      ]
    },
    {
      title: "Payment Methods",
      contentLinks: [
        {
          title: "CardMaster",
          link: "#"
        },
        {
          title: "Viz",
          link: "#"
        },
        {
          title: "CryptoCurrency",
          link: "#",
        },
      ]
    },
    {
      title: "Social",
      contentLinks: [
        {
          title: "LinkedIn",
          link: "#"
        },
        {
          title: "GitHub",
          link: "#",
        },
      ]
    }
  ]

  return (
    <Box as='footer' mt='auto' display='flex' justifyContent='center' alignItems='center' pt="50px" pb="50px" background="#000000c9" color="white">
      <Flex width="100%" alignItems='center' maxW='1280px'>
        <Flex justify='center' width='30%' align='center'>
          Image Here
        </Flex>
        <Flex width='70%' justify="space-evenly" flexWrap='wrap' align='flex-start'>
          {FooterDetails.map(elem => (
            <Flex direction='column' key={FooterDetails.indexOf(elem)}>
              <Text mb="10px">{elem.title}</Text>
              {elem.contentLinks.map(link_ => (
                <Link pb="5px" fontSize='14px' _hover={{
                  textDecoration: 'underline'
                }} as={RouterLink} key={`${FooterDetails.indexOf(elem)}${elem.contentLinks.indexOf(link_)}`} to={link_.link}>{link_.title}</Link>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer