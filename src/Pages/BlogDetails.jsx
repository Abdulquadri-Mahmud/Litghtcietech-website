import { Box, Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { FaCalendarAlt, FaLongArrowAltRight, FaRegCalendarAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function BlogDetails() {
    const { currentAdmin } = useSelector((state) => state.admin);

    const [blog, setBlogId] = useState({});
    const [loading, setLoading] = useState(false);
    const { blogID } = useParams();
    const [recentBlog, setRecentBlog] = useState({});

    const navigate = useNavigate();

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
        const url = 'https://lightcietechblogapi.onrender.com/api/blogs';
        const res = await fetch(url);
        const data = await res.json();

        setRecentBlog(data);
      }
      fetchBlogApi();
    } catch (error) {
      
    }
  })

  const handleDelete = async () => {
    setLoading(true);

    const fetchBlogId = `https://lightcietechblogapi.onrender.com/api/blogs/${blogID}`;
    const res = await fetch(fetchBlogId, {
      method: 'DELETE',
    });
    await res.json();
    setLoading(false);
    navigate('/blog')
  }

  return (
    <Box my={'10vh'}>
        <Flex maxW={{md: '97%', base: '100%'}} bg={'gray.200'} shadow={'md'} mx={'auto'} py={'10vh'} justifyContent={'center'} gap={3} flexWrap={'wrap'}>
            <Box padding={3} width={{md: '60%', base: '100%'}} fontWeight={500} rounded={5} color={useColorModeValue('black')} bg={useColorModeValue('white', 'gray.700')}>
                <Box>
                    <Box >
                        <Image src={blog.imageUrl} width={'100%'}/>
                    </Box>
                    <Box p={0}>
                        <Text fontSize={25} color={''} py={4}>{blog.title}</Text>
                        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottomWidth={1} borderTopWidth={1} borderColor={useColorModeValue('gray.300')} py={3}>
                        <Flex gap={2}>
                            <Text>Posted By:</Text>
                            <Text fontWeight={400} fontSize={14}>{blog.postedBy}</Text>
                        </Flex>
                        <Flex gap={2}>
                            <Text>Date Added:</Text>
                            <Text fontWeight={400} fontSize={14} className='flex items-center'><FaCalendarAlt/> {blog.date}</Text>
                        </Flex>
                        </Flex>
                        <Text mt={4} fontWeight={400}>{blog.body}</Text>
                    </Box>
                    {
                        currentAdmin && (
                            <Box mt={7}>
                                <Button onClick={handleDelete} bg={'red.500'} _hover={{bg: 'red.600'}} color={'white'} width={'160px'}>
                                    {
                                        loading ? 'Deleting...' : 'Delete'
                                    }
                                </Button>
                            </Box>
                        )
                    }
                </Box>
            </Box>
            <Box padding={3} width={{md: '34%', base: '100%'}} bg={'white'}>
                <Box p={{md: 10, base: 3}}  shadow={'xl'} rounded={'10'} mt={{md: 0, base:10}} bg={useColorModeValue('white', 'gray.700')}>
                <Heading fontWeight={500} fontSize={20} borderLeftWidth={4} borderColor={'green.500'} pl={2}>Recent Post</Heading>
                    {
                        recentBlog.length > 0 && recentBlog.map((recentBlog, index) => (
                        <Box key={index} my={8} borderBottomWidth={1} borderColor={'gray.300'} pb={8}>
                            <Flex gap={3}>
                                <Image boxSize={75} rounded={'full'} src={recentBlog.imageUrl}/>
                                <Stack>
                                    <Text fontSize={16} fontWeight={500}>{recentBlog.title}</Text>
                                    <Flex justifyContent={'space-between'} gap={5} alignItems={'center'}>
                                    <Flex gap={2}>
                                        <Text fontWeight={500}>Posted By:</Text>
                                        <Text fontWeight={400} fontSize={14}>{blog.postedBy}</Text>
                                    </Flex>
                                    <Flex gap={2}>
                                        <Text fontWeight={500}>Date Added:</Text>
                                        <Text fontWeight={400} fontSize={14} className='flex items-center'><FaRegCalendarAlt/> {blog.date}</Text>
                                    </Flex>
                                    </Flex>
                                    <Link to={`blogDetailes/${recentBlog._id}`} onClick={() => window.location.reload()} className='text-green-500 text-sm flex items-center gap-2'>Read More <FaLongArrowAltRight/></Link>
                                </Stack>
                            </Flex>
                        </Box>
                        ))
                    }
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}
