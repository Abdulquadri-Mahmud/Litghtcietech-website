import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import AboutSect from '../Components/AboutComponents/AboutSect'

export default function About() {
  return (
    <Box>
        <Flex justifyContent={'center'} alignItems={'center'} backgroundPosition={{md: 'bottom', base: "center"}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={'45vh'} w={'full'} bgBlendMode="multiply" className='deep'>
            <Box color={'white'}>
                <Heading textAlign={'center'} fontSize={{md: 45, base: 30}} fontWeight={500}>Our Company</Heading>
                <Box mt={3} textAlign={'center'}>
                    <Link to={'/'}>Home / </Link>
                    <Link to={'/blog'}>About Us</Link>
                </Box>
            </Box>
        </Flex>
        <Box py={'10vh'}>
            <AboutSect/>
        </Box>
    </Box>
  )
}
