import { Box, Button, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const getFirstName = useRef();
    const getLastName = useRef();
    const getMessage = useRef();

    const myEmail = 'adeyemiabdulquadri30@gmail.com';
   
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        });
    }

    
    const hanldeSubmit = (e) => {
        e.preventDefault();

        const checkFirstname = getFirstName.current.value === '';
        const checkLastname = getLastName.current.value === '';
        const checkMessage = getMessage.current.value === '';

        if (checkFirstname) {
            setError('Firstname input field is required!');
            return;
        };
        if (checkLastname) {
            setError('Lastname input field is required!');
            return;
        };
        if (checkMessage) {
            setError('Message input field is required!');
            return;
        };

        const sendMessage = () => {
            setError(false);
            const addName = `${formData.firstname} ${formData.lastname}`;
            // const email = formData.email;
            const message = formData.message;
            window.location.href = `mailto:${myEmail}?subject=${addName}&body=${message}`;
        }
        sendMessage();
    }
  return (
    <Box>
        <Flex justifyContent={'center'} alignItems={'center'} backgroundPosition={{md: 'bottom', base: "center"}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={'45vh'} w={'full'} bgBlendMode="multiply" className='deep'>
            <Box color={'white'}>
            <Heading fontWeight={500}>Let's <span className="text-red-500">Get</span> In <span className="text-red-500">Touch</span> Now</Heading>
                <Box mt={3} textAlign={'center'}>
                    <Link to={'/'}>Home / </Link>
                    <Link to={'/blog'}>Contact</Link>
                </Box>
            </Box>
        </Flex>
        <Flex  my={'10vh'} maxW={{'2xl': '80%',xl: '85%',md: '97%'}} bg={'gray.800'} color={'white'} shadow={'md'} rounded={10} flexWrap={'wrap'} mx={'auto'}>
            <Box width={{md:'45%', base: '100%'}} height={{md: '500px', base: '300px'}} pt={5} px={{md: 5, base: 5}}>
                <iframe width={'100%'} style={{height: '100%', borderRadius: '10px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.467927614716!2d3.524071474081166!3d6.588611922405158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee4740bd527b%3A0xb19235da2044f4d9!2s1%20Akin%20Ogunlewe%20Rd%2C%20Ikorodu%2C%20104102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1721227419085!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
            <Box width={{md: '55%', base: '100%'}} p={{xl: 8,md: 4, base: 4}} mt={{md: 0, base: 5}}>
                <Box>
                    <Heading fontWeight={500}>Let's <span className="text-red-500">Get</span> In <span className="text-red-500">Touch</span> Now</Heading>
                    <Text color={'gray.500'} mt={4}>(We will Recieve Your Message)</Text>
                </Box>
                <Box mt={3}>
                    <form onSubmit={hanldeSubmit}>
                        <Box width={'100%'} position={'relative'}>
                            <label htmlFor="lastname">Lastname</label>
                            <input ref={getLastName} onChange={handleChange} type="text" id='lastname' className='py-3 pl-7 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Lastname'/>
                            <Box position={'absolute'} left={2} top={10}>
                                <FaUser className='text-red-500'/>
                            </Box>
                        </Box>
                        <Box mt={5} width={'100%'} position={'relative'}>
                                <label htmlFor="firstname">Firstname</label>
                                <input ref={getFirstName} onChange={handleChange} type="text" id='firstname'  className='py-3 pl-7 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Firstname'/>
                                <Box position={'absolute'} left={2} top={10}>
                                    <FaUser className='text-red-500'/>
                                </Box>
                            </Box>
                        <Box mt={5} height={'150px'} width={'100%'}>
                            <textarea ref={getMessage} onChange={handleChange} style={{height: '100%', width: '100%'}} id="message" className='py-3 pl-7 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Type your message here...'></textarea>
                        </Box>
                        {
                            error ? (
                                <>
                                    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                                    <AlertDialogOverlay>
                                        <AlertDialogContent>
                                        <AlertDialogBody fontWeight={500} fontSize={18} mt={5} color={'red.500'}>
                                            {error && error}
                                        </AlertDialogBody>
                                        <AlertDialogFooter>
                                            <Button ref={cancelRef} onClick={onClose} bg={'gray.800'} color={'white'} _hover={{bg: 'gray.700'}}>
                                                Close
                                            </Button>
                                        </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialogOverlay>
                                    </AlertDialog>
                                </>
                            ) : ''
                        }
                        <Flex justifyContent={'center'} mt={5}>
                            <Button onClick={onOpen} type='submit' rounded={'full'} height={'45px'} bg={'red.500'} _hover={{bg: 'red.600'}} color={'white'}>
                                Send Message
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Box> 
        </Flex>
    </Box>
  )
}
