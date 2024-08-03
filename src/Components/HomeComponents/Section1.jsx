import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";

export default function Section1() {
  return (
    <Flex justifyContent={'center'} flexWrap={'wrap'} gap={4} py={'10vh'} maxW={{md: '80%',md: '90%', base: '97%'}} mx={'auto'}>
        <Box width={{md: '30%', base: '100%'}} bg={'gray.800'}  rounded={5} p={{md: 7, base: '3'}}>
            <Flex justifyContent={'center'} >
                <Box>
                    <FaRegLightbulb className='text-5xl text-white'/>
                </Box>
            </Flex>
            <Box py={3}>
                <Heading textAlign={'center'} fontWeight={500} fontSize={30} color={'white'}>Our <span className='text-red-500'>Vission</span></Heading>
            </Box>
            <Box>
                <Text textAlign={'center'} fontSize={16} color={'white'}>To build a formidable power protection mechanisms to eliminate hazards and promote information technology</Text>
            </Box>
        </Box>
        <Box width={{md: '30%', base: '100%'}} bg={'gray.800'}  rounded={5} p={{md: 7, base: '3'}}>
            <Flex justifyContent={'center'} >
                <Box>
                    <MdOutlineRocketLaunch className='text-5xl text-white'/>
                </Box>
            </Flex>
            <Box py={3}>
                <Heading textAlign={'center'} fontWeight={500} fontSize={30} color={'white'}>Our <span className='text-red-500'>Mission</span></Heading>
            </Box>
            <Box>
                <Text textAlign={'center'} fontSize={16} color={'white'}>To safeguard persons and property as effectively as possible against lightning induced hazards</Text>
            </Box>
        </Box>
        <Box width={{md: '30%', base: '100%'}} bg={'gray.800'}  rounded={5} p={{md: 7, base: '3'}}>
            <Flex justifyContent={'center'} >
                <Box>
                    <IoDiamond className='text-5xl text-white'/>
                </Box>
            </Flex>
            <Box py={3}>
                <Heading textAlign={'center'} fontWeight={500} fontSize={30} color={'white'}>Our <span className='text-red-500'>Value</span></Heading>
            </Box>
            <Box>
                <Text textAlign={'center'} fontSize={16} color={'white'}>Trust in God,integrity, honesty,excellence fairness</Text>
            </Box>
        </Box>
    </Flex>
  )
}
