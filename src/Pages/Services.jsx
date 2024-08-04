import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ServicesSect from '../Components/ServicesComponent/ServicesSect'

export default function Services() {
  return (
    <Box>
        <Flex justifyContent={'center'} alignItems={'center'} backgroundPosition={{md: 'bottom', base: "center"}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={'45vh'} w={'full'} bgBlendMode="multiply" className='deep'>
            <Box color={'white'}>
                <Heading textAlign={'center'} fontSize={{md: 45, base: 30}}>Our Services</Heading>
                <Box mt={3} textAlign={'center'}>
                    <Link to={'/'}>Home / </Link>
                    <Link to={'/blog'}>About Us</Link>
                </Box>
            </Box>
        </Flex>
        <Box py={''} bg={'gray.800'}>
            <ServicesSect/>
        </Box>
    </Box>
  )
}
