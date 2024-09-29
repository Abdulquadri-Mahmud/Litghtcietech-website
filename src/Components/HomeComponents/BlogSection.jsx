import { Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination/Pagination';

export default function BlogSection() {
    const [blogs, setBlogs] = useState({});
  const [blogCurrentPage, setBlogCurrentPage] = useState(1);
  const [blogPostPerPage, setBlogPostPerPage] = useState(3);

  useEffect(() => {
    try {
      const fetchBlogApi = async () => {
        // const url = 'https://json-server-henna-omega.vercel.app/blogs?_sort=date&_order=desc';
        const url = 'https://lightcietechblogapi.onrender.com/blogs?_sort=date&_order=desc';
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

//   const blogStartIndex = blogCurrentPage * blogPostPerPage;
//   const blogLastIndex = blogStartIndex - blogPostPerPage;

//   const blogPosts = allBlog.slice(blogLastIndex, blogStartIndex)
//   const blogPaginate = blogPaginate => setBlogCurrentPage(blogPaginate);

  return (
    <Box mb={'10vh'}>
        <Box>
            <Box>
                <Heading textAlign={'center'} fontWeight={500}>Our Blogs</Heading>
                <Box width={'120px'} mx={'auto'} mt={3} height={'3px'} bg={'red.500'}></Box>
            </Box>

            <Flex justifyContent={{md: 'center', base: 'start'}} alignItems={{md: 'center', base: 'start'}}  flexWrap={'wrap'} gap={{'2xl': 6, xl: 2, base: 3}}>
                <Box my={8} className="blog" width={{base: '100%', md:'30%'}} rounded={10} position={'relative'} shadow={'md'} bg={useColorModeValue('white', 'gray.700')}
                    color={'black'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')}>
                    <Box padding={3} width={'100%'} height={{md: '300px', base: '100%'}}>
                        <img src={'blog2.png'}className='w-[100%] rounded-[5px] h-[100%]' alt='Does earthing protect against lightning?'/>
                    </Box>
                    <Box padding={3}>
                        <Heading fontWeight={500} fontSize={20}>Does earthing protect against lightning?</Heading>
                    </Box>
                    <Box padding={3}>
                        <Text>Earthing and lightning protection are crucial for any commercial building. Without proper grounding and protection, a building and its occupants are vulnerable to the devastating effects of lightning strikes, which can cause fires, damage equipment, and even endanger lives....</Text>
                    </Box>
                    <Box pl={3} pb={3} color={'red'}>
                        <Link to={'/blog'}>Raed More...</Link>
                    </Box>
                </Box>
                <Box className="blog" width={{base: '100%', md:'30%'}} rounded={10} position={'relative'} shadow={'md'} bg={useColorModeValue('white', 'gray.700')}
                    color={'black'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')}>
                    <Box padding={3} width={'100%'} height={{md: '300px', base: '100%'}}>
                        <img src={'blog3.jpeg'}className='w-[100%] rounded-[5px] h-[100%]' alt='How does grounding prevent lightning strikes?'/>
                    </Box>
                    <Box padding={3}>
                        <Heading fontWeight={500} fontSize={20}>How does grounding prevent lightning strikes?</Heading>
                    </Box>
                    <Box padding={3}>
                        <Text>If the grounding wire is properly connected to both the CMCE device and the ground, it ensures that the electrical charges from the atmosphere safely dissipate into the Earth; eliminating the risk of lightning strikes and their associated damage....</Text>
                    </Box>
                    <Box pl={3} pb={3} color={'red'}>
                        <Link to={'/blog'}>Raed More...</Link>
                    </Box>
                </Box>
                <Box className="blog" width={{base: '100%', md:'30%'}} rounded={10} position={'relative'} shadow={'md'} bg={useColorModeValue('white', 'gray.700')}
                    color={'black'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')}>
                    <Box padding={3} width={'100%'} height={{md: '300px', base: '100%'}}>
                        <img src={'blog1.jpg'}className='w-[100%] rounded-[5px] h-[100%]' alt='Lightning Arrestors and Earthing Pits for Building Safety'/>
                    </Box>
                    <Box padding={3}>
                        <Heading fontWeight={500} fontSize={20}>Lightning Arrestors and Earthing Pits for Building Safety</Heading>
                    </Box>
                    <Box padding={3}>
                        <Text>Lightning, a powerful element of nature, can be breathtaking as well as deadly. High-voltage lightning sparks can cause significant damage especially to tall buildings. However, thanks to electrical inventions such as lightning arrestors and....</Text>                        
                    </Box>
                    <Box pl={3} pb={3} color={'red'}>
                        <Link to={'/blog'}>Raed More...</Link>
                    </Box>
                </Box>
            </Flex>
    </Box>
</Box>
  )
}
