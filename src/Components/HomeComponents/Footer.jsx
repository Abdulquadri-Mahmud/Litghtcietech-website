import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosSend } from "react-icons/io";

export default function Footer() {
  const [send, setSend] = useState({});

  const myEmail = 'adeyemiabdulquadri30@gmail.com';

  const handleChange = (e) => {
    setSend({
      ...send,
      [e.target.id] : e.target.value
    });
  }

  return (
    <Box bg={'gray.800'} p={{md: 10, base: 4}} >
      <Box maxW={{'2xl': '80%', md: '95%', base: '100%'}} mx={'auto'}>
        {/* <Box bg={'white'} mx={'auto'} width={{md: '270px', base: '100%'}} p={1} rounded={3}>
          <Image src='/logo.png' maxW={'200px'}/>
        </Box> */}
        <Box mt={10} color={'gray.300'} fontSize={14} className='grid grid-cols-1 gap-7 xl:grid-cols-4 md:grid-cols-2 md:place-content-center'>
          <Box>
            <Flex alignItems={'center'} justifyContent={{md:'start', base: 'start'}} gap={1} position={'relative'} mb={4}>
              <Box width={'12px'} height={'12px'} bg={'red.50'} rounded={'50%'}></Box>
              <Heading fontWeight={500} fontSize={{md: 25, base: 20}} textAlign={{md: 'start', base: 'start'}}>About Us</Heading>
            </Flex>
            <Stack textAlign={{md: 'start', base: 'start'}}>
              <Text>We are earthing and lighting hazard consultants, with appreciable experience in the design, procurement, supply, installation, inspection, and maintenance of effective and up-to-date system for checking earthing deficiency and lightning strikes.</Text>
              <Link className='text-red-500' to={'/about'}>Read More...</Link>
            </Stack>
          </Box>
          <Box>
            <Flex alignItems={'center'} justifyContent={{md:'start', base: 'start'}} gap={1} position={'relative'} mb={4}>
              <Box width={'12px'} height={'12px'} bg={'red.50'} rounded={'50%'}></Box>
              <Heading fontWeight={500} fontSize={{md: 25, base: 20}} textAlign={{md: 'start', base: 'start'}}>Address</Heading>
            </Flex>
            <Stack textAlign={{md: 'start', base: 'start'}}>
              <Text>163 Bayeku Road Igbogbo, Ikorodu, Lagos state,Nigeria,</Text>
              <Text>Tel: <Link to={'/tel:08028309774'}>(+234)802-8319-774</Link></Text>
              <Text>Email: lightcietechltd@gmail.com</Text>
              <Text>Email: lightcietechltd@yahoo.com</Text>
            </Stack>
          </Box>
          <Box>
            <Flex alignItems={'center'} justifyContent={{md:'start', base: 'start'}} gap={1} position={'relative'} mb={4}>
              <Box width={'12px'} height={'12px'} bg={'red.50'} rounded={'50%'}></Box>
              <Heading fontWeight={500} fontSize={{md: 25, base: 20}} textAlign={{md: 'start', base: 'start'}}>Quick Links</Heading>
            </Flex>
            <Stack textAlign={{md: 'start', base: 'start'}}>
              <Link className='text-md ' to={'/'}>Home</Link>
              <Link className='text-md ' to={'/about'}>About</Link>
              <Link className='text-md ' to={'/blog'}>Blog</Link>
              <Link className='text-md ' to={'/service'}>Services</Link>
              <Link className='text-md ' to={'/contact'}>Contact Us</Link>
            </Stack>
          </Box>
          <Box>
            <Flex alignItems={'center'} justifyContent={{md:'start', base: 'start'}} gap={1} position={'relative'} mb={4}>
              <Box width={'12px'} height={'12px'} bg={'red.50'} rounded={'50%'}></Box>
              <Heading fontWeight={500} fontSize={{md: 25, base: 20}} textAlign={{md: 'start', base: 'start'}}>Leave A Message</Heading>
            </Flex>
            <Flex>
              <input onChange={handleChange} type="text" id='message' placeholder='Leave a amessage' className='p-3 w-[75%] outline-none border-none rounded-none text-black'/>
              <Button height={'49px'} px={4} rounded={'0'} bg={'red.500'} _hover={{bg: 'red.400'}} color={'white'}><Link to={`mailto:${myEmail}?subject=You can type your name here.&body=${send.message}`}><IoIosSend className='text-3xl'/></Link></Button>
            </Flex>
            <Text color={'gray.400'} py={2}>(We will Recieve Your Message)</Text>
          </Box>
        </Box>
        <Box pt={8} color={'white'}>
          <Text textAlign={'center'} fontSize={14} fontWeight={400}>&copy Lightcietech Limited, All right reserved.</Text>
        </Box>
      </Box>
    </Box>
  )
}
