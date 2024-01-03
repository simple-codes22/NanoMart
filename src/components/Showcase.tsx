import { Box } from "@chakra-ui/react";
import firstImage from './../assets/Showcase/One.jpg';
import secondImage from './../assets/Showcase/Four.jpg';
// import thirdImage from './../assets/Showcase/Five.jpg';
// import fourth from './../assets/Showcase/Two.jpg';
import { useEffect, useState, useRef, useMemo } from "react";

// import { Image } from "@chakra-ui/react";

interface showReel {
  title: string;
  imageSrc: string;
  color: string;
}

const Showcase = () => {
  const showcaseReel = useMemo(() => [
    {
      title: 'Image 1',
      imageSrc: firstImage,
      color: '#000',
    },
    {
      title: 'Image 2',
      imageSrc: secondImage,
      color: '#ac8484'
    },
    // { 
    //   title: 'Image 4',
    //   imageSrc: fourth,
    //   color: '#9f3e3e',
    // },
    // { 
    //   title: 'Image 3',
    //   imageSrc: thirdImage,
    //   color: '#000',
    // },

  ], []);
  
  const [current, setCurrent] = useState<showReel>(showcaseReel[0])
  const counter = useRef(0);
  // const checker = useRef(null);

  useEffect(()=> {
    console.log(showcaseReel.length);
    setInterval(() => {
      if (counter.current < showcaseReel.length) {
        setCurrent(showcaseReel[counter.current]);
        counter.current++;
      } else {
        counter.current = 0;
        setCurrent(showcaseReel[counter.current]);
      }
    }, 5000)

  }, [showcaseReel])



  return (
    <Box maxWidth='1280px' width="100%" display='flex' justifyContent="center" alignItems='center'>
      {current ? 
        <Box width='100%' height='400px' display='flex' color={current.color} fontSize="30px" fontWeight='700' justifyContent='center' alignItems='center' sx={{
              // background: `url(${current.imageSrc}) no-repeat cover`,
              backgroundImage: `url(${current.imageSrc})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}>
            {current.title}
        </Box>
        : <></>}
    </Box>
  )
}

export default Showcase