import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Pagination({blogPostPerPage, totalBlogPost, blogPaginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogPost / blogPostPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <Flex>
            {
                pageNumbers.map((number) => (
                    <Box mt={4} bg={useColorModeValue('', 'gray.700')} key={number}>
                        <Link onClick={() => blogPaginate(number)} to={'#'} className='w-[35px] h-[35px] bg-red-500 text-white flex items-center justify-center border'>{number}</Link>
                    </Box>
                ))
            }
        </Flex>
  )
}
