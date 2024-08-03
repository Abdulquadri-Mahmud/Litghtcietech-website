import React from 'react';
import { Box, Button, Flex, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react';
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
import { Link } from 'react-router-dom';

export default function Sidemenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState('right');

  return (
    <Box fontWeight={500}>
        <Button colorScheme='blue' onClick={onOpen} bg={'transparent'} _hover={{bg: 'transparent'}}><GiHamburgerMenu className='text-white text-3xl'/></Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton bg={useColorModeValue('red.500', 'white')} color={useColorModeValue('white', 'gray.800')} fontSize={'16px'}/>
                <DrawerHeader borderBottomWidth='1px' fontSize={'20px'}>LightCieTech<sub className='text-red-500'>LTD</sub></DrawerHeader>
                <DrawerBody>
                    <Flex mt={'5rem'} alignItems={'start'} flexDir={'column'} gap={8} fontWeight={600}>
                        <Link className='hover:text-red-500 duration-200 hover:underline' to='/'>Home</Link>
                        <Link className='hover:text-red-500 duration-200 hover:underline' to='/'>About Us</Link>
                        <Link className='hover:text-red-500 duration-200 hover:underline' to='/blogs'>Blogs</Link>
                        <Link className='hover:text-red-500 duration-200 hover:underline' to='/create-blog'>Our Services</Link>
                        <Link className='hover:text-red-500 duration-200 hover:underline' to='/create-blog'>Contact Us</Link>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Box>
  )
}
