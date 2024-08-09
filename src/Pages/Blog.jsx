import { Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../Components/Pagination/Pagination';

export default function Blog() {
  const [blogs, setBlogs] = useState({});
  const [blogCurrentPage, setBlogCurrentPage] = useState(1);
  const [blogPostPerPage, setBlogPostPerPage] = useState(3);

  useEffect(() => {
    try {
      const fetchBlogApi = async () => {
        const url = 'https://json-server-henna-omega.vercel.app/blogs?_sort=date&_order=desc';
        const res = await fetch(url);
        const data = await res.json();

        setBlogs(data);
      }
      fetchBlogApi();
    } catch (error) {
      
    }
  }, []);

  const allBlog = [];

  if (blogs.length > 0) {
    blogs.map((blog) => {
      allBlog.push(blog);
    })
  }

  const blogStartIndex = blogCurrentPage * blogPostPerPage;
  const blogLastIndex = blogStartIndex - blogPostPerPage;

  const blogPosts = allBlog.slice(blogLastIndex, blogStartIndex)
  const blogPaginate = blogPaginate => setBlogCurrentPage(blogPaginate);

  return (
    <Box>
        <Flex justifyContent={'center'} alignItems={'center'} backgroundPosition={{md: 'bottom', base: "center"}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={'45vh'} w={'full'} bgBlendMode="multiply" className='deep'>
            <Box color={'white'}>
                <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 40, base: 30}}>Our Blog</Heading>
                <Box mt={3} textAlign={'center'}>
                    <Link to={'/'}>Home / </Link>
                    <Link to={'/blog'}>Blog</Link>
                </Box>
            </Box>
        </Flex>
        <Box py={'10vh'}>
        <Flex justifyContent={{md: 'center', base: 'start'}} alignItems={{md: 'center', base: 'start'}}  mt={5} flexWrap={'wrap'} gap={3}>
                {
                    blogPosts.length > 0 ? (
                        blogPosts.map((blog) => (
                            <Box className="blog" key={blog.id} width={{base: '100%', md:'360px', '2xl':'350px'}} h={{base: '100%', md:'100%'}} rounded={10} position={'relative'} shadow={'md'} bg={useColorModeValue('white', 'gray.700')}
                            color={'black'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')}>
                                <Flex padding={3} justifyContent={'center'} width={'100%'} height={{md: '250px', base: '250px'}}>
                                    {
                                        blog.imageUrl ? (
                                            <img src={blog.imageUrl}className='w-[100%] rounded-[5px] h-[100%]' alt={blog.title}/>
                                        ) : ''
                                    }
                                </Flex>
                                <Box roundedBottom={10}padding={3} color={useColorModeValue('black', 'white')} bg={useColorModeValue('white', 'gray.700')}>
                                    <Link to={`/blogDetails/${blog.id}`} className='font-normal'>
                                      <Text fontWeight={500} py={1} color={''} fontSize={20} textDecor={'underline'} isTruncated>{blog.title}</Text>
                                    </Link>
                                    <Text py={1} className='font-normal' fontSize={14}>{blog.body.slice(0,200)} ...</Text>
                                    <Button height={'40px'} mt={4} bg={useColorModeValue('red.500', 'gray.200')} rounded={3} color={useColorModeValue('white', 'black')} _hover={{opacity: 0.7}}>
                                        <Link to={`/blogDetails/${blog.id}`} className='font-normal'>Read More</Link>
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Text>No blogs to display</Text>
                    )
                }
            </Flex>
            <Box pl={5}>
              <Pagination blogPostPerPage={blogPostPerPage} totalBlogPost={allBlog.length} blogPaginate={blogPaginate}/>
            </Box>
        </Box>
    </Box>
  )
}
