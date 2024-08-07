import { Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [blogs, setBlogs] = useState({ });

  useEffect(() => {
    try {
      const fetchBlogApi = async () => {
        const url = 'https://lightcietechblogapi.onrender.com/api/blogs';
        const res = await fetch(url);
        const data = await res.json();

        setBlogs(data);
      }
      fetchBlogApi();
    } catch (error) {
      
    }
  })

  return (
    <Box>
        <Flex justifyContent={'center'} alignItems={'center'} backgroundPosition={{md: 'bottom', base: "center"}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={'45vh'} w={'full'} bgBlendMode="multiply" className='deep'>
            <Box color={'white'}>
                <Heading textAlign={'center'} fontSize={{md: 45, base: 30}}>Our Blog</Heading>
                <Box mt={3} textAlign={'center'}>
                    <Link to={'/'}>Home / </Link>
                    <Link to={'/blog'}>About Us</Link>
                </Box>
            </Box>
        </Flex>
        <Box py={'10vh'}>
        <Flex justifyContent={{md: 'center', base: 'start'}} alignItems={{md: 'center', base: 'start'}}  mt={5} flexWrap={'wrap'} gap={3}>
                {
                    blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <Box className="blog" key={blog.id} width={{base: '100%', md:'32%'}} h={{base: '100%', md:'100%'}} rounded={10} position={'relative'} shadow={'md'} bg={useColorModeValue('white', 'gray.700')}
                            color={'black'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')}>
                                <Flex padding={3} justifyContent={'center'} width={'100%'} height={{md: '250px', base: '250px'}}>
                                    {
                                        blog.imageUrl ? (
                                            <img src={blog.imageUrl}className='w-[100%] rounded-[5px] h-[100%]' alt={blog.title}/>
                                        ) : ''
                                    }
                                </Flex>
                                <Box roundedBottom={10}padding={3} color={useColorModeValue('black', 'white')} bg={useColorModeValue('white', 'gray.700')}>
                                    <Text fontWeight={500} py={1} color={''} fontSize={20} textDecor={'underline'}>{blog.title}</Text>
                                    <Text py={1} className='font-normal' fontSize={14}>{blog.body.slice(0,200)} ...</Text>
                                    <Button height={'40px'} mt={4} bg={useColorModeValue('blue.500', 'gray.200')} rounded={3} color={useColorModeValue('white', 'black')} _hover={{opacity: 0.7}}>
                                        <Link to={`/blogDetailes/${blog.id}`} className='font-normal'>Read More</Link>
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Text>No blogs to display</Text>
                    )
                }
            </Flex>
        </Box>
    </Box>
  )
}
