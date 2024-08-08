import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} color={'white'} boxSize={45} rounded={50} bg={'green.500'} shadow={'md'} position={'fixed'} right={7} bottom={7}>
        <Link to={'https://api.whatsapp.com/send?phone=2348028319774'}><FaWhatsapp className='text-3xl'/></Link>
    </Flex>
  )
}
