import React, { useEffect, useRef, useState } from 'react';
import { Alert, AlertIcon, Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { MdAddPhotoAlternate } from 'react-icons/md';

export default function CreateBlog() {
    const [files, setFile] = useState(null);
    const [filesError, setFileError] = useState(null);
    const fileRef = useRef();
    const [blogData, setBlogData] = useState({imageUrl: [],
        title: '',
        postedBy: '',
        body: ''
    });

    const handleChange = (e) => {
        setBlogData({
            ...blogData,
            [e.target.id] : e.target.value
        });
    };

    useEffect(() => {
        const fetchBlogApi = async () => {
            const url = 'https://lightcietechblogapi.onrender.com/api/blogs';
            const res = await fetch(url);
            const data = await res.json();

            data.map((data) => {
                console.log(data.title);
            })
            console.log(data);
        }
        fetchBlogApi();
    })
    console.log(blogData);

  return (
    <Box my={'5rem'} maxW={{md: '70%', base: '97%'}} rounded={5} mx={'auto'} shadow={'md'} bg={''} color={'gray.800'} p={{md: 6, base: 3}}>
        <Box>
            <Box mb={10}>
                <Heading textAlign={'center'} fontSize={30} fontWeight={500}>Create <span className="text-red-500">New Blog</span></Heading>
            </Box>
            <form>
                <Box className='grid grid-cols-1 md:grid-cols-2 place-content-center gap-5'>
                    <Box>
                        <Box width={'100%'}>
                            <input onChange={handleChange} type="text" id='title' className='w-full py-3 bg-gray-200 rounded-md px-4' placeholder='Blog title...'/>
                        </Box>
                        <Box width={'100%'} py={3}>
                            <input onChange={handleChange} type="text" id='postedBy' className='w-full py-3 bg-gray-200 rounded-md px-4' placeholder='Posted by...'/>
                        </Box>
                        <Box width={'100%'}>
                            <textarea onChange={handleChange} id="body" className='h-[150px] p-3 bg-gray-200 w-full rounded-md' placeholder='Blog body...'></textarea>
                        </Box>
                    </Box>
                    <Box>
                        <Box w={{md:'350px', base: '350px'}} mx={'auto'}>
                            <Text color={useColorModeValue('white', 'gray.400')} pb={2} textAlign={'center'}><strong className='text-red-500'>Image: </strong><span className="font-normal text-gray-700">The first image will be the cover (max 6)</span></Text>
                            
                            <Flex position={'relative'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'200px'} rounded={5} bg={'gray.200'}>
                            <input type="file" onChange={(e) => setFile(e.target.files)} 
                            ref={fileRef} className='outline-none border-0 hidden' 
                            id='imageUrl' accept='image/*' multiple/>
                            
                            <Box position={'absolute'}  onClick={() => fileRef.current.click()} cursor={'pointer'} color={'gray.800'}>
                                <MdAddPhotoAlternate className='text-3xl'/>
                            </Box>

                            <Box p={3}>
                                <Image maxW={'100%'} height={'180px'} rounded={5} src={blogData.imageUrl[0]}/>
                            </Box>
                            </Flex>
                            {
                            filesError ? (
                                <Alert status='error' mt={2} rounded={5}>
                                <AlertIcon />
                                <AlertDescription>{filesError && filesError}</AlertDescription>
                                </Alert>
                            ) : ''
                            }
                        </Box>
                    </Box>
                </Box>
                <Flex justifyContent={'center'} mt={3}>
                    <Button width={'200px'} bg={'red.500'} color={'white'} className='uppercase'>Submit</Button>
                </Flex>
            </form>
        </Box>
    </Box>
  )
}
