import { Box, Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import { FaCalendarAlt, FaLongArrowAltRight, FaRegCalendarAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Blogdetails from '../Components/Blog/Blogdetails';

export const BlogContext = createContext();

export default function BlogDetails() {

    const [blog, setBlogId] = useState({});
    const { blogID } = useParams();
    const [recentBlog, setRecentBlog] = useState({});

  useEffect(() => {
    const getSingBlog = async () => {
        const fetchBlogId = `https://lightcietechblogapi.onrender.com/api/blogs/${blogID}`;
        const res = await fetch(fetchBlogId);
        
        const data = await res.json();
        setBlogId(data)
    }

    getSingBlog();

  }, []);

  useEffect(() => {
    try {
      const fetchBlogApi = async () => {
        const url = 'https://lightcietechblogapi.onrender.com/api/blogs?_sort=date&_limit=3&_order=desc';
        const res = await fetch(url);
        const data = await res.json();

        setRecentBlog(data);
      }
      fetchBlogApi();
    } catch (error) {
      
    }
  })

  return (
    <Box>
        <Flex justifyContent={'center'} alignItems={'center'} backgroundPosition={{md: 'bottom', base: "center"}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={'45vh'} w={'full'} bgBlendMode="multiply" className='deep'>
            <Box color={'white'}>
                <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 45, base: 30}}>Blog Details</Heading>
                <Box mt={3} textAlign={'center'}>
                    <Link to={'/'}>Home / </Link>
                    <Link to={'/blog'}>Blog</Link>
                </Box>
            </Box>
        </Flex>

        <Box my={'5vh'}>
            <Flex maxW={{'2xl': '70%',md: '97%', base: '100%'}} bg={''} mx={'auto'} py={'10vh'} justifyContent={'center'} gap={5} flexWrap={'wrap'}>
                <BlogContext.Provider value={blog}>
                    <Blogdetails blog={blog}/>
                </BlogContext.Provider>
                <Box width={{md: '34%', base: '100%'}} p={{md: 0, base: 3}} >
                    <Box shadow={'xl'} rounded={'10'}  p={{md: 4, base: 5}} mt={{md: 0, base:10}} bg={useColorModeValue('gray.200', 'gray.700')}>
                    <Heading fontWeight={500} fontSize={20} borderLeftWidth={4} borderColor={'red.500'} pl={2}>Recent Post</Heading>
                        {
                            recentBlog.length > 0 && recentBlog.map((recentBlog, index) => (
                            <Box key={index} my={8} borderBottomWidth={1} borderColor={'gray.300'} pb={8}>
                                <Flex gap={3}>
                                    <Image boxSize={75} rounded={'full'} src={recentBlog.imageUrl}/>
                                    <Stack>
                                        <Text fontSize={16} fontWeight={500}>{recentBlog.title.slice(0, 20)}...</Text>
                                        <Flex justifyContent={'space-between'} gap={5} alignItems={'center'}>
                                        <Flex gap={2}>
                                            <Text fontWeight={500} fontSize={14}>Posted By:</Text>
                                            <Text fontWeight={400} fontSize={14}>{blog.postedBy}</Text>
                                        </Flex>
                                        <Flex gap={2}>
                                            <Text fontWeight={500} fontSize={14}>Date Added:</Text>
                                            <Text fontWeight={400} fontSize={14} className='flex items-center'><FaRegCalendarAlt/> {blog.date}</Text>
                                        </Flex>
                                        </Flex>
                                        <Link to={`/blogreview/${recentBlog.id}`} className='text-red-500 text-sm flex items-center gap-2'>Read More <FaLongArrowAltRight/></Link>
                                    </Stack>
                                </Flex>
                            </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}
