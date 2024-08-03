import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box bg={'gray.800'} p={{md: 10, base: 4}} >
      <Box maxW={{'2xl': '80%', md: '90%', base: '100%'}} mx={'auto'}>
        <Box bg={'white'} mx={'auto'} width={{md: '270px', base: '230px'}} p={2} rounded={3}>
          <Heading fontWeight={500} fontSize={{md: 30, base: 25}} color={'gray.700'}>LIGHTCIE<span className="text-red-500">TECH</span><sub className='text-gray-700'>LTD</sub></Heading>
        </Box>
        <Box mt={16} color={'white'} className='grid grid-cols-1 gap-5 md:grid-cols-3 md:place-content-center'>
          <Box>
            <Box mb={4}>
              <Heading fontWeight={500} fontSize={{md: 25, base: 20}}>Address</Heading>
            </Box>
            <Stack>
              <Text>4A Abule Nla Street,Off Apapa Road,</Text>
              <Text>Ebute Metta West, Lagos, Nigeria.</Text>
              <Text>Tel: <Link to={'/tel:08028309774'}>(+234)802-8309-774</Link></Text>
              <Text>Email: lightcietechlimited@yahoo.com</Text>
            </Stack>
          </Box>
          <Box>
            <Box mb={4}>
              <Heading fontWeight={500} fontSize={{md: 25, base: 20}}>Quick Links</Heading>
            </Box>
            <Stack>
              <Link className='text-md ' to={'/'}>Home</Link>
              <Link className='text-md ' to={'/'}>About</Link>
              <Link className='text-md ' to={'/'}>Blog</Link>
              <Link className='text-md ' to={'/'}>Services</Link>
              <Link className='text-md ' to={'/'}>Contact Us</Link>
            </Stack>
          </Box>
          <Box>
            <Box mb={4}>
              <Heading fontWeight={500} fontSize={{md: 25, base: 20}}>Send A Message</Heading>
            </Box>
            <Flex>
              <input type="text" className='p-3 rounded-none w-[80%] bg-white outline-none border-red-500' placeholder='Leave a message...'/>
              <Button py={6} bg={'red.500'} color={'white'} rounded={0}>Send Now</Button>
            </Flex>
          </Box>
        </Box>
        <Box pt={8} color={'white'}>
          <Text textAlign={'center'} fontSize={14} fontWeight={400}>&copy Lightcietech Limited, All right reserved.</Text>
        </Box>
      </Box>
    </Box>
  )
}
