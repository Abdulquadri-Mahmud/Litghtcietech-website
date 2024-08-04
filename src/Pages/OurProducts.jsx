import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function OurProducts() {
  return (
    <Box>
        <Flex mb={'10vh'} justifyContent={'center'} alignItems={'center'} backgroundPosition={{md: 'bottom', base: "center"}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={'45vh'} w={'full'} bgBlendMode="multiply" className='deep'>
            <Box color={'white'}>
                <Heading textAlign={'center'} fontSize={{md: 45, base: 30}}>Our Products</Heading>
                <Box mt={3} textAlign={'center'}>
                    <Link to={'/'}>Home / </Link>
                    <Link to={'/blog'}>Our Products</Link>
                </Box>
            </Box>
        </Flex>
        <Box my={'10vh'} py={'8vh'} maxW={{'2xl': '90%', md: '100%', base: '100%'}} mx={'auto'} bg={'gray.800'}>
            <Box>
                <Heading textAlign={'center'} fontWeight={500} fontSize={35} color={'white'}>Our <span className="text-red-500">Products</span></Heading>
                <Box width={'120px'} mx={'auto'} mt={3} height={'3px'} bg={'red.500'}></Box>
                </Box>
                <Box mt={8} className='grid grid-cols-1 2xl:grid-cols-6 md:grid-cols-4 md:gap-6 gap-4 mx-3'>
                <Box bg={'gray.200'} rounded={5}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro9.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Kalre Lightning Rod </Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro10.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Kalre Lightning Flash Counter or Recorder </Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro11.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Indelec  Lightning Prevectron Systems</Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro12.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Digital Earth Tester </Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro13.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>paraton lightning rod </Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro8.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Copper Earth Rod </Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5} shadow={'md'}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro1.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>25*3mm bare Copper tape </Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5} shadow={'md'}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro2.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Air terminal lightning arrestor </Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5} shadow={'md'}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro3.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Earthing accessories</Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5} shadow={'md'}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro4.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Surge protection systems</Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5} shadow={'md'}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro5.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Inspection pit chambers</Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5} shadow={'md'}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro6.png'/>
                    </Flex>
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Earthing cables</Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} rounded={5}>
                    <Flex height={'200px'} justifyContent={'center'} p={3}>
                        <Image src='pro7.png'/>
                    </Flex>  
                    <Box py={3} bg={'gray.800'} color={'white'} roundedBottom={5}>
                        <Text textAlign={'center'}>Bentonite</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
