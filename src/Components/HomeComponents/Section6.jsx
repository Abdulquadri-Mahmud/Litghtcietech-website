import React from 'react'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function Section6() {
  return (
    <Box py={10} mb={'10vh'} maxW={{'2xl': '80%', md: '100%', base: '100%'}} mx={'auto'} bg={'gray.800'} color={''}>
        <Box>
          <Heading textAlign={'center'} fontWeight={500} fontSize={35} color={'white'}>Our <span className="text-red-500">Products</span></Heading>
          <Box width={'120px'} mx={'auto'} mt={3} height={'3px'} bg={'red.500'}></Box>
        </Box>
        <Box mt={8} className='grid grid-cols-1 md:grid-cols-4 gap-3 mx-3'>
          <Box bg={'white'} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro8.png'/>
            </Flex>
            <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
              <Text textAlign={'center'}>Copper Earth Rod </Text>
            </Box>
          </Box>
          <Box bg={'white'} rounded={5} shadow={'md'}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro1.png'/>
            </Flex>
            <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
              <Text textAlign={'center'}>25*3mm bare Copper tape </Text>
            </Box>
          </Box>
          <Box bg={'white'} rounded={5} shadow={'md'}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro2.png'/>
            </Flex>
            <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
              <Text textAlign={'center'}>Air terminal lightning arrestor </Text>
            </Box>
          </Box>
          <Box bg={'white'} rounded={5} shadow={'md'}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro3.png'/>
            </Flex>
            <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
              <Text textAlign={'center'}>Earthing accessories</Text>
            </Box>
          </Box>
          <Box bg={'white'} rounded={5} shadow={'md'}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro4.png'/>
            </Flex>
            <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
              <Text textAlign={'center'}>Surge protection systems</Text>
            </Box>
          </Box>
          <Box bg={'white'} rounded={5} shadow={'md'}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro5.png'/>
            </Flex>
            <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
              <Text textAlign={'center'}>Inspection pit chambers</Text>
            </Box>
          </Box>
          <Box bg={'white'} rounded={5} shadow={'md'}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro6.png'/>
            </Flex>
            <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
              <Text textAlign={'center'}>Earthing cables</Text>
            </Box>
          </Box>
          <Box bg={'white'} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro7.png'/>
            </Flex>  
            <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
              <Text textAlign={'center'}>Bentonite</Text>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}