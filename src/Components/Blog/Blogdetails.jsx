import { Box, Button, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '../../Pages/BlogDetails';
import { FaCalendarAlt } from 'react-icons/fa';

export default function Blogdetails() {
    const { currentAdmin } = useSelector((state) => state.admin);
    const navigate = useNavigate();
    const { blogID } = useParams();
    const blog = useContext(BlogContext);
    const [loading, setLoading] = useState(false);


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
                <Text mt={4} fontWeight={400} lineHeight={2}>{blog.body}</Text>
            </Box>
            <Flex gap={5}>
                {
                    currentAdmin && (
                        <Box mt={7}>
                            <Button bg={'gray.800'} _hover={{bg: 'gray.700'}} color={'white'} width={'160px'}>
                                <Link to={`/updateblog/${blog.id}`}>Updates</Link>
                            </Button>
                        </Box>
                    )
                }
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
            </Flex>
        </Box>
    </Box>
  )
}
