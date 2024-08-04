import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box bg={'gray.800'} p={{md: 10, base: 4}} >
      <Box maxW={{'2xl': '80%', md: '90%', base: '100%'}} mx={'auto'}>
        {/* <Box bg={'white'} mx={'auto'} width={{md: '270px', base: '100%'}} p={1} rounded={3}>
          <Image src='/logo.png' maxW={'200px'}/>
        </Box> */}
        <Box mt={10} color={'white'} className='grid grid-cols-1 gap-7 md:grid-cols-3 md:place-content-center'>
          <Box>
            <Flex alignItems={'center'} justifyContent={{md:'start', base: 'start'}} gap={1} position={'relative'} mb={4}>
              <Box width={'12px'} height={'12px'} bg={'red.50'} rounded={'50%'}></Box>
              <Heading fontWeight={500} fontSize={{md: 25, base: 20}} textAlign={{md: 'start', base: 'start'}}>About Us</Heading>
            </Flex>
            <Stack textAlign={{md: 'start', base: 'start'}}>
              <Text>We are earthing and lighting hazard consultants, with appreciable experience in the design, procurement, supply, installation, inspection, and maintenance of effective and up-to-date system for checking earthing deficiency and lightning strikes.</Text>
              <Link className='text-red-500'>Read More...</Link>
            </Stack>
          </Box>
          <Box>
            <Flex alignItems={'center'} justifyContent={{md:'start', base: 'start'}} gap={1} position={'relative'} mb={4}>
              <Box width={'12px'} height={'12px'} bg={'red.50'} rounded={'50%'}></Box>
              <Heading fontWeight={500} fontSize={{md: 25, base: 20}} textAlign={{md: 'start', base: 'start'}}>Address</Heading>
            </Flex>
            <Stack textAlign={{md: 'start', base: 'start'}}>
              <Text>4A Abule Nla Street,Off Apapa Road,</Text>
              <Text>Ebute Metta West, Lagos, Nigeria.</Text>
              <Text>Tel: <Link to={'/tel:08028309774'}>(+234)802-8309-774</Link></Text>
              <Text>Email: lightcietechlimited@yahoo.com</Text>
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
        </Box>
        <Box pt={8} color={'white'}>
          <Text textAlign={'center'} fontSize={14} fontWeight={400}>&copy Lightcietech Limited, All right reserved.</Text>
        </Box>
      </Box>
    </Box>
  )
}
