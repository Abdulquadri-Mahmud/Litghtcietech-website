import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import Sidemenu from './Sidemenu';

export default function Header() {
  return (
    <Box position={'sticky'} top={0} zIndex={100}>
        <Flex justifyContent={'space-between'} alignItems={'center'} py={2} px={{md: 8, base: 3}} bg={'whiteAlpha.400'} color={'white'} className='glass'>
            <Box>
              <Link to={'/'}>
                <Image src='/logo.png' maxW={'200px'}/>
              </Link>
            </Box>
            <Box className='nav' display={{md: 'block', base: 'none'}}  color={'gray.800'}>
                <Link className='px-3 hover:text-red-500 duration-200 text-lg' to={'/'}>Home</Link>
                <Link className='px-3 hover:text-red-500 duration-200 text-lg' to={'/about'}>About</Link>
                <Link className='px-3 hover:text-red-500 duration-200 text-lg' to={'/blog'}>Blog</Link>
                <Link className='px-3 hover:text-red-500 duration-200 text-lg' to={'/service'}>Services</Link>
                <Link className='px-3 hover:text-red-500 duration-200 text-lg' to={'/contact'}>Contact Us</Link>
            </Box>
            <Box display={{md: 'none', base: 'block'}}>
              <Sidemenu/>
            </Box>
        </Flex>
    </Box>
  )
}
