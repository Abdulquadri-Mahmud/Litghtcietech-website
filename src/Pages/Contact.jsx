import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { RiInstagramLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <Box>
        <Flex justifyContent={'center'} alignItems={'center'} backgroundPosition={{md: 'bottom', base: "center"}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={'45vh'} w={'full'} bgBlendMode="multiply" className='deep'>
            <Box color={'white'}>
            <Heading fontWeight={500}>Let's <span className="text-red-500">Get</span> In <span className="text-red-500">Touch</span> Now</Heading>
                <Box mt={3} textAlign={'center'}>
                    <Link to={'/'}>Home / </Link>
                    <Link to={'/blog'}>About Us</Link>
                </Box>
            </Box>
        </Flex>
        <Flex  my={'10vh'} maxW={{md: '80%', base: '97%'}} bg={'gray.800'} color={'white'} shadow={'md'} rounded={10} flexWrap={'wrap'} mx={'auto'}>
            <Box width={{md:'45%', base: '100%'}} height={{md: '500px', base: '300px'}} pt={5} px={{md: 5, base: 5}}>
                <iframe width={'100%'} style={{height: '100%', borderRadius: '10px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.467927614716!2d3.524071474081166!3d6.588611922405158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee4740bd527b%3A0xb19235da2044f4d9!2s1%20Akin%20Ogunlewe%20Rd%2C%20Ikorodu%2C%20104102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1721227419085!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
            <Box width={{md: '55%', base: '100%'}} p={{md: 8, base: 4}} mt={{md: 0, base: 5}}>
                <Box>
                    <Heading fontWeight={500}>Let's <span className="text-red-500">Get</span> In <span className="text-red-500">Touch</span> Now</Heading>
                    <Text color={'gray.500'} mt={4}>(We will Recieve Your Message)</Text>
                </Box>
                <Box mt={6}>
                    <form>
                        <Flex flexWrap={'wrap'} justifyContent={'center'} gap={{md: 2, base: 5}}>
                            <Box width={{md:'48%', base: '100%'}} position={'relative'}>
                                <label htmlFor="firstname">Firstname</label>
                                <input type="text" id='firstname' className='py-3 pl-7 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Firstname'/>
                                <Box position={'absolute'} left={2} top={10}>
                                    <FaUser className='text-red-500'/>
                                </Box>
                            </Box>
                            <Box width={{md:'48%', base: '100%'}} position={'relative'}>
                                <label htmlFor="firstname">Lastname</label>
                                <input type="text" id='firstname' className='py-3 pl-7 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Lastname'/>
                                <Box position={'absolute'} left={2} top={10}>
                                    <FaUser className='text-red-500'/>
                                </Box>
                            </Box>
                        </Flex>
                        <Box width={'100%'} mt={5} position={'relative'}>
                            <label htmlFor="firstname">Your Address</label>
                            <input type="text" id='firstname' className='py-3 pl-7 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Example@gmail.com'/>
                            <Box position={'absolute'} left={2} top={10}>
                                <MdOutlineEmail className='text-red-500'/>
                            </Box>
                        </Box>
                        <Box mt={5} height={'150px'} width={'100%'}>
                            <textarea name="" style={{height: '100%', width: '100%'}} id="body" className='py-3 pl-7 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Type your message here...'></textarea>
                        </Box>
                        <Flex justifyContent={'center'} mt={5}>
                            <Button type='submit' rounded={'full'} height={'45px'} bg={'red.500'} _hover={{bg: 'red.600'}} color={'white'}>Send Message</Button>
                        </Flex>
                    </form>
                </Box>
            </Box> 
        </Flex>
    </Box>
  )
}
