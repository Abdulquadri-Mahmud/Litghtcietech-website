import React from 'react'
import {Box, Flex, Heading,Text, Stack, Button, useColorModeValue, Image } from '@chakra-ui/react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Header from './Header';

// import img1 from '/bg1.jpg';
// import img2 from '/bg2.jpg';
// import img3 from '/bg3.jpg';

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

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Box h={{'2xl': '90vh',md:'100vh', base: '100vh'}} w={'full'}>
        <Slider {...settings}>
          <Box position={'relative'} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg.jpg'} h={{'2xl': '90vh',md:'100vh', base: '100vh'}} w={'full'} bgBlendMode="multiply" className='deep'>
            {/* <Header/> */}
            <Flex justifyContent={'start'} alignItems={'center'} height={'100%'} padding={{base: 4, md:10}} zIndex={20} >
              <Box width={{md: '60%', base: '1005'}} p={{md:8, base: 0}} rounded={10}>
                <Heading color={'white'} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '3xl', md: '4xl'}} mt={2}>EARTHING AND LIGHTNING CHALLENGES OR HAZARDS:
                  A PROPORTION TO BRING OUR EXPERTISE TO BEAR</Heading>
                <Text color={'white'} fontSize={{md:16, base: 16}} pt={5} fontWeight={400}>
                  We are earthing and lighting hazard consultants, with appreciable experience in the design, procurement,
                  supply, installation, inspection, and maintenance of effective and up-to-date s.s:em for checking earthing
                  deficiency and lightning strikes. The prospect of a lightning strike is profoundly disturbing and renders
                  everyone apprehensive. Lightning by its nature possesses a tremendous potentiality for inflicting untold
                  disaster and devastation....
                </Text>
                <Button w={{base: 170, md:170}} height={'45px'} mt={5} bg={'white'} _hover={{bg: 'whiteAlpha.500'}} color={'black'} rounded={3} textTransform={'uppercase'}>
                  <Link to='/about'>Read More</Link>
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box position={'relative'} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg3.jpg'} h={{'2xl': '90vh',md:'100vh', base: '100vh'}} w={'full'} bgBlendMode="multiply" className='deep'>
            {/* <Header/> */}
            <Flex justifyContent={'start'} alignItems={'center'} height={'100%'} padding={{base: 4, md:10}} zIndex={20} >
              <Box width={{md: '60%', base: '1005'}} p={{md:8, base: 0}} rounded={10}>
                <Heading color={'white'} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '3xl', md: '4xl'}} mt={2}>EARTHING AND LIGHTNING CHALLENGES OR HAZARDS:
                  A PROPORTION TO BRING OUR EXPERTISE TO BEAR</Heading>
                <Text color={'white'} fontSize={{md:16, base: 16}} pt={5} fontWeight={400}>
                  We are earthing and lighting hazard consultants, with appreciable experience in the design, procurement,
                  supply, installation, inspection, and maintenance of effective and up-to-date s.s:em for checking earthing
                  deficiency and lightning strikes. The prospect of a lightning strike is profoundly disturbing and renders
                  everyone apprehensive. Lightning by its nature possesses a tremendous potentiality for inflicting untold
                  disaster and devastation....
                </Text>
                <Button w={{base: 170, md:170}} height={'40px'} mt={5} bg={'white'} _hover={{bg: 'whiteAlpha.500'}} color={'black'} rounded={3} textTransform={'uppercase'}>
                  <Link to='/about'>Read More</Link>
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box position={'relative'} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={{'2xl': '90vh',md:'100vh', base: '100vh'}} w={'full'} bgBlendMode="multiply" className='deep'>
            {/* <Header/> */}
            <Flex justifyContent={'start'} alignItems={'center'} height={'100%'} padding={{base: 4, md:10}} zIndex={20} >
              <Box width={{md: '60%', base: '1005'}} p={{md:8, base: 0}} rounded={10}>
                <Heading color={'white'} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '3xl', md: '4xl'}} mt={2}>EARTHING AND LIGHTNING CHALLENGES OR HAZARDS:
                  A PROPORTION TO BRING OUR EXPERTISE TO BEAR</Heading>
                <Text color={'white'} fontSize={{md:16, base: 16}} pt={5} fontWeight={400}>
                We are earthing and lighting hazard consultants, with appreciable experience in the design, procurement,
                  supply, installation, inspection, and maintenance of effective and up-to-date s.s:em for checking earthing
                  deficiency and lightning strikes. The prospect of a lightning strike is profoundly disturbing and renders
                  everyone apprehensive. Lightning by its nature possesses a tremendous potentiality for inflicting untold
                  disaster and devastation....
                </Text>
                <Button w={{base: 170, md:170}} height={'40px'} mt={5} bg={'white'} _hover={{bg: 'whiteAlpha.500'}} color={'black'} rounded={3} textTransform={'uppercase'}>
                  <Link to='/about'>Read More</Link>
                </Button>
              </Box>
            </Flex>
          </Box>
        </Slider>
    </Box>
  )
}
