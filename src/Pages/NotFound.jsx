import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} height={'400px'}>
        <Box>
            <Heading textAlign={'center'}><span className='text-red-500'>Oops....</span> Page Not Found!</Heading>
            <Text mt={4} textAlign={'center'} color={'red.500'}><Link className='underline' to={'/'}>Back to Home Page</Link></Text>
        </Box>
    </Flex>
  )
}
