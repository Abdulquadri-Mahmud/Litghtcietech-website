import React from 'react'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",
        }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", 
            
        }}
        onClick={onClick}
      />
    );
}

export default function Section5() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    };

  return (
    <Box py={10} mb={'10vh'} bg={'gray.800'} color={'white'}>
        <Box>
            <Heading textAlign={'center'} fontWeight={500} fontSize={30}>Our Major Clients</Heading>
        </Box>
        <Box pt={10} maxW={{'2xl': '80%', md: '90%', base: '100%'}} mx={'auto'}>
            <Slider {...settings}>
                <Box>
                    <Flex justifyContent={'center'} alignItems={'center'} px={3} rounded={5} bg={'white'} height={'180px'} mx={2}>
                        <Image maxW={'100%'} maxH={'180px'} src='/logo1.jpg'/>
                    </Flex>
                </Box>
                <Box>
                    <Flex justifyContent={'center'} alignItems={'center'} px={3} rounded={5} bg={'white'} height={'180px'} mx={2}>
                        <Image maxW={'100%'} maxH={'180px'} src='/logo2.jpg'/>
                    </Flex>
                </Box>
                <Box>
                    <Flex justifyContent={'center'} alignItems={'center'} px={3} rounded={5} bg={'white'} height={'180px'} mx={2}>
                        <Image maxW={'100%'} maxH={'180px'} src='/logo3.png'/>
                    </Flex>
                </Box>
                <Box>
                    <Flex justifyContent={'center'} alignItems={'center'} px={3} rounded={5} bg={'white'} height={'180px'} mx={2}>
                        <Heading textAlign={'center'} color={'gray.700'} fontSize={30} fontWeight={500} className='flex '>Mega<span className="flex items-center flex-col">Letrics<span className='font-thin'>LIMITED</span></span></Heading>
                    </Flex>
                </Box>
                <Box>
                    <Flex justifyContent={'center'} alignItems={'center'} px={3} rounded={5} bg={'white'} height={'180px'} mx={2}>
                        <Box>
                            <Heading textAlign={'center'} color={'gray.700'} fontSize={30} fontWeight={500}>MELCON M NIG. LTD.</Heading>
                            <Text textAlign={'center'} color={'gray.700'}>Chartered Engineers & Project Managers</Text>
                        </Box>
                    </Flex>
                </Box>
                {/* <Box>
                    <Image src='/logo1.jpg'/>
                </Box>
                <Box>
                    <Image src='/logo1.jpg'/>
                </Box> */}
            </Slider>
        </Box>
    </Box>
  )
}
