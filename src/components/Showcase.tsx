import { Box } from "@chakra-ui/react";
import firstImage from "./../assets/Showcase/One.jpg";
import secondImage from "./../assets/Showcase/Four.jpg";
import thirdImage from "./../assets/Showcase/Five.jpg";
import fourth from "./../assets/Showcase/Two.jpg";
import {
  useEffect, 
  useState, 
  useRef, 
  useMemo } from "react";

interface showReel {
  title: string;
  imageSrc: string;
  color: string;
}

const Showcase = () => {
  const showcaseReel = useMemo(
    () => [
      {
        title: "Image 1",
        imageSrc: firstImage,
        color: "#000",
      },
      {
        title: "Image 2",
        imageSrc: secondImage,
        color: "#ac8484",
      },
      {
        title: "Image 3",
        imageSrc: thirdImage,
        color: "#9f3e3e",
      },
      {
        title: "Image 4",
        imageSrc: fourth,
        color: "#000",
      },
    ],
    []
  );

  const [current, setCurrent] = useState<showReel>(showcaseReel[0])
  const counter = useRef(0);


  useEffect(()=> {
    console.log(showcaseReel.length);
    const interval = setInterval(() => {
      if (counter.current < showcaseReel.length) {
        setCurrent(showcaseReel[counter.current]);
        // console.log(`Counter in the first condition: ${counter.current}`);
        counter.current++;
      } else {
        counter.current = 0;
        // console.log("Counter is now reset to ", counter.current);
      }
    }, 5000)
    return () => clearInterval(interval);

  }, [showcaseReel])

  return (
    <Box
      maxWidth="1280px"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
      { current ?
      <Box
        width="100%"
        height="400px"
        display="flex"
        color={current.color}
        fontSize="30px"
        fontWeight="700"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage: `url(${current.imageSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: 'Center'
        }}
      >
        {current.title}
      </Box> : <></>}
    </Box>
  );
};

export default Showcase;
