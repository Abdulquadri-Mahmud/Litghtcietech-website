import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import Sidemenu from './Sidemenu';

export default function Header() {
  return (
    <Box position={'sticky'} top={0} zIndex={100}>
        <Flex justifyContent={'space-between'} alignItems={'center'} py={4} px={{md: 8, base: 3}} bg={'whiteAlpha.400'} color={'white'} className='glass'>
            <Box>
                <Heading fontWeight={500} fontSize={{md: 30, base: 25}} color={'gray.800'}>LIGHTCIE<span className="text-red-500">TECH</span><sub className='text-gray-700'>LTD</sub></Heading>
            </Box>
            <Box className='nav' display={{md: 'block', base: 'none'}}  color={'gray.800'}>
                <Link className='px-3 text-lg' to={'/'}>Home</Link>
                <Link className='px-3 text-lg' to={'/'}>About</Link>
                <Link className='px-3 text-lg' to={'/'}>Blog</Link>
                <Link className='px-3 text-lg' to={'/'}>Services</Link>
                <Link className='px-3 text-lg' to={'/'}>Contact Us</Link>
            </Box>
            <Box display={{md: 'none', base: 'block'}}>
              <Sidemenu/>
            </Box>
        </Flex>
    </Box>
  )
}
