import React from 'react'
import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Section6() {
  return (
    <Box py={10} mb={'5vh'} maxW={{'2xl': '90%', md: '100%', base: '100%'}} mx={'auto'} bg={''} color={''}>
        <Box>
          <Heading textAlign={'center'} fontWeight={500} fontSize={35} color={'black'}>Our <span className="">Products</span></Heading>
          <Box width={'120px'} mx={'auto'} mt={3} height={'3px'} bg={'red.500'}></Box>
        </Box>
        <Box mt={8} className='grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 place-content-center gap-3 mx-3'>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro9.png'/>
            </Flex>
            <Box py={3} bg={''} m={0} color={'black'} rounded={5}>
              <Text textAlign={'center'}>Kalre Lightning Rod </Text>
            </Box>
          </Box>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro10.png'/>
            </Flex>
            <Box py={3} bg={''} m={0} color={'black'} rounded={5}>
              <Text textAlign={'center'}>Kalre Lightning Flash Counter or Recorder </Text>
            </Box>
          </Box>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro11.png'/>
            </Flex>
            <Box py={3} bg={''} m={0} color={'black'} rounded={5}>
              <Text textAlign={'center'}>Indelec  Lightning Prevectron Systems</Text>
            </Box>
          </Box>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro12.png'/>
            </Flex>
            <Box py={3} bg={''} m={0} color={'black'} rounded={5}>
              <Text textAlign={'center'}>Digital Earth Tester </Text>
            </Box>
          </Box>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro8.png'/>
            </Flex>
            <Box py={3} bg={''} m={0} color={'black'} rounded={5}>
              <Text textAlign={'center'}>Copper Earth Rod </Text>
            </Box>
          </Box>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro1.png'/>
            </Flex>
            <Box py={3} bg={''} m={0} color={'black'} rounded={5}>
              <Text textAlign={'center'}>25*3mm bare Copper tape </Text>
            </Box>
          </Box>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro2.png'/>
            </Flex>
            <Box py={3} bg={''} m={0} color={'black'} rounded={5}>
              <Text textAlign={'center'}>Air terminal lightning arrestor </Text>
            </Box>
          </Box>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
              <Image src='pro3.png'/>
            </Flex>
            <Box py={3} bg={''} m={0} color={'black'} rounded={5}>
              <Text textAlign={'center'}>Earthing accessories</Text>
            </Box>
          </Box>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} display={{'2xl': 'block', xl: 'none'}} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
                <Image src='pro6.png'/>
            </Flex>
            <Box py={3} bg={''} color={'black'} roundedBottom={5}>
                <Text textAlign={'center'}>Earthing cables</Text>
            </Box>
          </Box>
          <Box bg={'white'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')} display={{'2xl': 'block', xl: 'none'}} rounded={5}>
            <Flex height={'200px'} justifyContent={'center'} p={3}>
                <Image src='pro7.png'/>
            </Flex>  
            <Box py={3} bg={''} color={'black'} roundedBottom={5}>
                <Text textAlign={'center'}>Bentonite</Text>
            </Box>
        </Box>
        </Box>
        <Flex justifyContent={''} mt={3}>
          <Button color={'red.500'} bg={''} _hover={{bg: 'gray.700'}} height={'45px'} fontWeight={400} rounded={3}><Link to={'products'} className='underline'>See More Of Our Products</Link></Button>
        </Flex>
    </Box>
  )
}