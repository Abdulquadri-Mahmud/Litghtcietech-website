import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Sidemenu from './Sidemenu';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentAdmin } = useSelector((state) => state.admin);

  return (
    <Box position={'sticky'} top={0} zIndex={100} shadow={'md'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} py={3} px={{md: 8, base: 3}} bg={'whiteAlpha.400'} color={'white'} className='glass'>
            <Box>
              <Link to={'/'}>
                <Image src='/logo.png' maxW={'160px'}/>
              </Link>
            </Box>
            <Box alignItems={'center'} className='nav' display={{md: 'block', base: 'none'}}  color={'gray.800'}>
              <Flex alignItems={'center'}>
                <Link className='px-3 hover:text-red-500 duration-200 text-xl font-extralight' to={'/'}>Home</Link>
                <Link className='px-3 hover:text-red-500 duration-200 text-xl font-extralight' to={'/about'}>About</Link>
                <Link className='px-3 hover:text-red-500 duration-200 text-xl font-extralight' to={'/blog'}>Blog</Link>
                <Link className='px-3 hover:text-red-500 duration-200 text-xl font-extralight' to={'/service'}>Services</Link>
                <Link className='px-3 hover:text-red-500 duration-200 text-xl font-extralight' to={'/contact'}>Contact Us</Link>
                {
                  currentAdmin && (
                    <Link className='px-3 hover:text-red-500 duration-200 text-xl font-extralight' to={'/create-blog'}>Create Blog</Link>
                  )
                }
                <Link className=' hover:text-red-500 duration-200 text-xl font-extralight' to={'/admin-login'}>
                  <MdOutlineAdminPanelSettings className='text-xl'/>
                </Link>
              </Flex>
            </Box>
            <Box display={{md: 'none', base: 'block'}}>
              <Sidemenu/>
            </Box>
        </Flex>
    </Box>
  )
}
