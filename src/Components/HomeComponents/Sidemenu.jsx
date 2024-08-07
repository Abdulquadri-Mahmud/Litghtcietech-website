import React from 'react';
import { Box, Button, Flex, Image, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuBoxed } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { useSelector } from 'react-redux';

export default function Sidemenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState('right');
    const { currentAdmin } = useSelector((state) => state.admin);

  return (
    <Box fontWeight={500}>
        <Button colorScheme='blue' onClick={onOpen} bg={'transparent'} _hover={{bg: 'transparent'}}><CgMenuBoxed className='text-red-500 text-4xl'/></Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton bg={useColorModeValue('gray.800', 'white')} color={'red.500'} fontSize={'16px'}/>
                <DrawerHeader>
                    <Image src='/logo.png' maxW={'140px'}/>
                </DrawerHeader>
                <DrawerBody bg={'gray.800'}>
                    <Flex mt={'5rem'} alignItems={'start'} flexDir={'column'} color={'white'} gap={8} fontWeight={600}>
                        <Link className='hover:text-red-500 duration-200' to='/'>Home</Link>
                        <Link className='hover:text-red-500 duration-200' to='/about'>About Us</Link>
                        <Link className='hover:text-red-500 duration-200' to='/blog'>Blogs</Link>
                        <Link className='hover:text-red-500 duration-200' to='/products'>Our Products</Link>
                        <Link className='hover:text-red-500 duration-200' to='/Service'>Our Services</Link>
                        <Link className='hover:text-red-500 duration-200' to='/contact'>Contact Us</Link>
                        {
                            currentAdmin && (
                                <Link className=' hover:text-red-500 duration-200' to={'/create-blog'}>Create Blog</Link>
                            )
                        }
                        <Link className=' hover:text-red-500 duration-200 flex items-center gap-2' to={'/admin-login'}>
                            <MdOutlineAdminPanelSettings className='text-xl'/>Admin
                        </Link>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Box>
  )
}
