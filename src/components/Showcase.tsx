import { Box } from "@chakra-ui/react";
import firstImage from './../assets/Showcase/One.jpg';
import { Image } from "@chakra-ui/react";

interface showReel {
  title: string;
  imageSrc: string;
  color: string;
}

const Showcase = () => {
  const showcaseReel: showReel[] = [
    {
      title: 'Image 1',
      imageSrc: firstImage,
      color: '#000',
    },

  ]
  return (
    <Box maxWidth='1280px' width="100%" display='flex' justifyContent="center" alignItems='center'>
        {showcaseReel.map(elem =>
          (
            <Box width='100%' height='400px' display='flex' color={elem.color} fontSize="30px" fontWeight='700' justifyContent='center' alignItems='center' style={{
              background: `url(${elem.imageSrc})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize:'cover',
            }}>
              {elem.title}
            </Box>
          ))}
    </Box>
  )
}

export default Showcase