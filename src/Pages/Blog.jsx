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

  // const blogStartIndex = blogCurrentPage * blogPostPerPage;
  // const blogLastIndex = blogStartIndex - blogPostPerPage;

  // const blogPosts = allBlog.slice(blogLastIndex, blogStartIndex)
  // const blogPaginate = blogPaginate => setBlogCurrentPage(blogPaginate);

  const blogPosts = [
    {
      id: 1,
      title: 'Lightning Arrestors and Earthing Pits for Building Safety',
      body: `Lightning, a powerful element of nature, can be breathtaking as well as deadly. High-voltage lightning sparks can cause significant damage especially to tall buildings. However, thanks to electrical inventions such as lightning arrestors and earthing pits that have engineered
       a solution for the safety of our building structures and everything within. \n The design of the lightning protection system is the most important aspect of a building’s electrical distribution system. During a lightning strike or electrical system fault, lightning arrestors grounded to the earth ensure the protection of structures, equipment and people within. In this article, we explain to you the key elements of the lightning protection system and how this 
       ingenious electrical setup is crucial during lightning hits. \n Overall, a lightning protection system consists of external lightning arrestors and internal earthing pit systems. Both systems are crucial for the safety of buildings and their electrical installations. We explain how this works in the subsequent section.
       A lightning arrestor is a metal rod that is placed on the top of the building to serve as a lightning conductor. Metal conductors, such as copper or aluminium, run vertically down the building, connecting the lightning rods to the grounding system inside the earth.
       \n The grounding system, also known as earthing pit, is usually made up of rods either copper bonded, solid copper or stainless steel, which are earth conductive materials. This network of metal conductor earth rods or plates is installed in the ground to dissipate the lightning’s energy safely into the earth. Earthing is primarily done to avoid high-voltage electrical shocks that are dangerous to the equipment, as well as the lives of people handling it.`,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fzandz.com%2Fen%2Flibrary%2Fis-lightning-dangerous-in-a-large-city%2F&psig=AOvVaw21skN04RafgXLfU-tyosYx&ust=1723960127327000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICI4Ziq-4cDFQAAAAAdAAAAABAJ'
    },
    {
      id: 2,
      title: 'Does earthing protect against lightning?',
      body: 'Earthing and lightning protection are crucial for any commercial building. Without proper grounding and protection, a building and its occupants are vulnerable to the devastating effects of lightning strikes, which can cause fires, damage equipment, and even endanger lives.',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.powerandcables.com%2Flightning-protection%2F&psig=AOvVaw1dkHRfzUP4F0VhFTUe3Zee&ust=1723960353449000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiZy_yq-4cDFQAAAAAdAAAAABAE'
    },
    {
      id: 3,
      title: 'How does grounding prevent lightning strikes?',
      body: 'If the grounding wire is properly connected to both the CMCE device and the ground, it ensures that the electrical charges from the atmosphere safely dissipate into the Earth; eliminating the risk of lightning strikes and their associated damage.',
      image: ''
    }
  ]

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
          <Flex alignItems={'center'} justifyContent={{'2xl': 'space-evenly', md: 'space-between'}} flexWrap={'wrap'}>
            <Box my={8} className="blog" width={{base: '100%', md:'47%'}} mx={'auto'} h={{base: '100%', md:'100%'}} rounded={10} position={'relative'} shadow={'md'} bg={useColorModeValue('white', 'gray.700')}
            color={'black'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')}>
              <Box padding={3} width={'100%'} height={{md: '350px', base: '100%'}}>
                <img src={'blog2.png'}className='w-[100%] rounded-[5px] h-[100%]' alt='Does earthing protect against lightning?'/>
              </Box>
              <Box padding={3}>
                <Heading fontWeight={500} fontSize={25}>Does earthing protect against lightning?</Heading>
              </Box>
              <Box padding={3}>
                <Text>Earthing and lightning protection are crucial for any commercial building. Without proper grounding and protection, a building and its occupants are vulnerable to the devastating effects of lightning strikes, which can cause fires, damage equipment, and even endanger lives.</Text>
              </Box>
            </Box>
            <Box className="blog" width={{base: '100%', md:'47%'}} mx={'auto'} h={{base: '100%', md:'100%'}} rounded={10} position={'relative'} shadow={'md'} bg={useColorModeValue('white', 'gray.700')}
            color={'black'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')}>
              <Box padding={3} width={'100%'} height={{md: '350px', base: '100%'}}>
                <img src={'blog3.jpeg'}className='w-[100%] rounded-[5px] h-[100%]' alt='How does grounding prevent lightning strikes?'/>
              </Box>
              <Box padding={3}>
                <Heading fontWeight={500} fontSize={25}>How does grounding prevent lightning strikes?</Heading>
              </Box>
              <Box padding={3}>
                <Text>If the grounding wire is properly connected to both the CMCE device and the ground, it ensures that the electrical charges from the atmosphere safely dissipate into the Earth; eliminating the risk of lightning strikes and their associated damage.</Text>
              </Box>
            </Box>
          </Flex>
          <Box className="blog" width={{base: '100%', md:'85%'}} mx={'auto'} h={{base: '100%', md:'100%'}} rounded={10} position={'relative'} shadow={'md'} bg={useColorModeValue('white', 'gray.700')}
          color={'black'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')}>
            <Box padding={3} width={'100%'} height={{md: '350px', base: '100%'}}>
              <img src={'bg4.webp'}className='max-w-[100%] rounded-[5px] h-[100%]' alt='Lightning Arrestors and Earthing Pits for Building Safety'/>
            </Box>
            <Box padding={3}>
              <Heading fontWeight={500} fontSize={25}>Lightning Arrestors and Earthing Pits for Building Safety</Heading>
            </Box>
            <Box padding={3}>
              <Text>Lightning, a powerful element of nature, can be breathtaking as well as deadly. High-voltage lightning sparks can cause significant damage especially to tall buildings. However, thanks to electrical inventions such as lightning arrestors and earthing pits that have engineered a solution for the safety of our building structures and everything within.</Text>
              <Text mt={8}>The design of the lightning protection system is the most important aspect of a building’s electrical distribution system. During a lightning strike or electrical system fault, lightning arrestors grounded to the earth ensure the protection of structures, equipment and people within. In this article, we explain to you the key elements of the lightning protection system and how this ingenious electrical setup is crucial during lightning hits.</Text>
              <Text mt={8}>Overall, a lightning protection system consists of external lightning arrestors and internal earthing pit systems. Both systems are crucial for the safety of buildings and their electrical installations. We explain how this works in the subsequent section.</Text>
              <Text mt={8}>A lightning arrestor is a metal rod that is placed on the top of the building to serve as a lightning conductor. Metal conductors, such as copper or aluminium, run vertically down the building, connecting the lightning rods to the grounding system inside the earth.</Text>
              <Text mt={8}>The grounding system, also known as earthing pit, is usually made up of rods either copper bonded, solid copper or stainless steel, which are earth conductive materials. <mark> This network of metal conductor earth rods or plates is installed in the ground to dissipate the lightning’s energy safely into the earth. Earthing is primarily done to avoid high-voltage electrical shocks that are dangerous to the equipment, as well as the lives of people handling it.</mark></Text>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

