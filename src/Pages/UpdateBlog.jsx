import { Box, Button, Flex, Heading, Image, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react'
import { MdAddPhotoAlternate } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { app } from '../firebase';

export default function UpdateBlog() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef();

    const [blog, setBlogId] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ updateData, setUpdateData ] = useState({
        imageUrl: [],
        title: '',
        postedBy: '',
        body: ''
    });
    console.log(updateData);
    const [ filesError, setFilesError ] = useState(false);
    const [ files, setFile] = useState(undefined);
    const [filePercentage, setFilePercentage ] = useState(0);
    const { blogID } = useParams();

    const fileRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUpdateData({
          ...updateData,
          [e.target.id] : e.target.value
        });
    }

    useEffect(() => {
        const getSingBlog = async () => {
            // const fetchBlogId = `https://json-server-henna-omega.vercel.app/blogs/${blogID}`;
            const fetchBlogId = `https://lightcietechblogapi.onrender.com/blogs/${blogID}`;
            const res = await fetch(fetchBlogId);
            
            const data = await res.json();
            setUpdateData(data)
        }
    
        getSingBlog();
    
    }, []);

      useEffect(() => {
        if (files) {
            handleImagesUpload(files)
        }
    }, [files]);
    
    const handleImagesUpload = (e) => {
        // checking if there is existing image and if images files ia greater than 3
        if (files.length > 0 && files.length + updateData.imageUrl.length < 2) {
          setFilePercentage(true);
          setFilesError(false);
    
          const storeImages = [];
          for (let i = 0; i < files.length; i++) {
            storeImages.push(getAllImagesUrls(files[i]));
          }
          // waiting for all the image to be stored inside the storeImages array
          Promise.all(storeImages).then((urls) => {
            // keeping the previous image and adding new images with concat method
            setUpdateData({...updateData, imageUrl: updateData.imageUrl.concat(urls)})
            setFilesError(false);
            setFilePercentage(false);
    
          }).catch((error) => {
            setFilesError('Failed to upload Image (2mb max per image)');
            setFilePercentage(false);
          });
    
        }else{
          setFilesError('You can only upload 2 images per blog');
          setFilePercentage(false);
        }
      }
    
      const getAllImagesUrls = async (file) => {
        return new Promise((resolve, reject) => {
          const storage = getStorage(app);
    
          const fileName = new Date().getTime() + file.name;
    
          const storageRef = ref(storage, fileName);
    
          const uploadTask = uploadBytesResumable(storageRef, file);
    
          uploadTask.on('state_changed',(snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFilePercentage(progress);
          },
            (error) => {
              reject(error);
            }, () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=> {
                resolve(downloadURL)
              })}
          )
          });
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            setLoading(true);

          const blogId = `https://lightcietechblogapi.onrender.com/blogs/${blogID}`;
    
          const res = await fetch(blogId, {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify(updateData)
          });
    
          const data = await res.json();
          if (!data) {
            setError(true);
            setLoading(false);
            setSuccess(false);
            return;
          }

          setError(false);
          setLoading(false);
          setSuccess(true);
          navigate('/blog');
    
        } catch (error) {
            setError(true);
            setLoading(false);
            setSuccess(false);
            setLoading(false);
          console.error(error.message);
        }
      }

    const handleRemoveImage = (index) => {
      setUpdateData({...updateData,
        imageUrl: updateData.imageUrl.filter((_, i) => i !== index)
      })
    }
  return (
    <Box>
        <Box my={'5rem'} maxW={{'2xl': '50%',xl: '70%',md: '80%', base: '97%'}} rounded={5} mx={'auto'} shadow={'md'} bg={'gray.800'} color={'gray.100'} p={{'2xl': 12,md: 8, base: 3}}>
          <Box color={useColorModeValue('white', 'white')} mb={'8'}>
            <Heading fontWeight={500} textAlign={'center'}>Update Blog</Heading>
          </Box>
            <form onSubmit={handleSubmit}>
                <Box className='grid grid-cols-1 md:grid-cols-2 place-content-center gap-5'>
                    <Box>
                        <Box width={'100%'}>
                            <input onChange={handleChange} type="text" id='title' className='w-full py-3 bg-gray-200 text-black rounded-md px-4' placeholder='Blog title...' defaultValue={updateData.title}/>
                        </Box>
                        <Box width={'100%'} py={3}>
                            <input onChange={handleChange} type="text" id='postedBy' className='w-full py-3 bg-gray-200 text-black rounded-md px-4' placeholder='Posted by...' defaultValue={updateData.postedBy}/>
                        </Box>
                        <Box color={useColorModeValue('black', 'white')} bg={useColorModeValue('gray.200', 'gray.800')} borderBottomWidth={1} borderColor={useColorModeValue('green.500', '')} py={1} px={2} rounded={5}>
                            <input type="date" onChange={handleChange} id="date" placeholder="Select Date" className='bg-transparent border-0 text-sm font-normal outline-none w-[100%] my-2 rounded-[0px]' defaultValue={updateData.date}/>
                        </Box>
                        <Box mt={3} width={'100%'}>
                            <textarea onChange={handleChange} id="body" className='h-[150px] p-3 bg-gray-200 text-black w-full rounded-md' placeholder='Blog body...' defaultValue={updateData.body}></textarea>
                        </Box>
                    </Box>
                    {
                        success ? (
                        <>
                            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                <AlertDialogBody fontWeight={500}>
                                    Blog Updates Successfully
                                </AlertDialogBody>
                                <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={onClose} bg={useColorModeValue('green.500','gray.700')} color={'white'}>
                                    Ok
                                    </Button>
                                </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                            </AlertDialog>
                        </>
                        ) : ''
                    }
                    <Box>
                        <Text color={useColorModeValue('white', 'gray.200')} pb={2} textAlign={'center'}><strong className='text-red-500'>Image: </strong><span className="font-normal text-gray-200">The first image will be the cover (max 2)</span></Text>
                        <Box w={{md:'350px', base: '350px'}} mx={'auto'}>
                            <Flex position={'relative'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'200px'} rounded={5} bg={'gray.200'}>
                            <input type="file" onChange={(e) => setFile(e.target.files)} 
                            ref={fileRef} className='outline-none border-0 hidden' 
                            id='imageUrl' accept='image/*' multiple/>
                            
                            <Box position={'absolute'}  onClick={() => fileRef.current.click()} cursor={'pointer'} color={'gray.800'}>
                                <MdAddPhotoAlternate className='text-3xl'/>
                            </Box>

                            <Box p={3}>
                                <Image maxW={'100%'} height={'180px'} rounded={5} src={updateData.imageUrl} defaultValue={updateData.imageUrl}/>
                            </Box>
                            </Flex>
                            <Box mt={4} color={useColorModeValue('white')}>
                                <Text fontWeight={500}>Status: 
                                {
                                    filesError ? (<span>Error while uploading image</span>) : 
                                    filePercentage > 0 && filePercentage < 100 ? (<span>{`Uploading is ${filePercentage}% done`}</span>) : 
                                    filePercentage === 100 ? (<span>Uploaded</span>) : ''
                                }
                                </Text>
                            </Box>
                        </Box>
                        <Box>
                            {
                                updateData.imageUrl.length > 0 && updateData.imageUrl.map((url, index) => (
                                <Flex key={index} justifyContent={'space-between'} alignItems={'center'} width={'350px'} mx={'auto'} my={2} bg={useColorModeValue('gray.200', 'gray.800')} py={3} px={2} rounded={5}>
                                    <Box borderWidth={2} borderColor={'white'} rounded={5}>
                                        <Image src={url} maxW={'100px'} rounded={5}/>
                                    </Box>
                                    <Box>
                                        <Button onClick={() => handleRemoveImage(index)} fontSize={14} bg={useColorModeValue('gray.800', 'gray.700')} rounded={3} color={'red.500'}>Delete</Button>
                                    </Box>
                                </Flex>
                                ))
                            }
                        </Box>
                        <Flex mt={3} justifyContent={'center'}>
                            <Button type='button' disabled={filePercentage} onClick={handleImagesUpload} bg={'gray.200'} _hover={{bg: useColorModeValue('gray.300')}} color={'black'} rounded={3}>
                                {
                                    filePercentage ? 'Uploading' : 'Upload Image'
                                }
                            </Button>
                        </Flex>
                    </Box>
                </Box>
                <Flex justifyContent={'center'} mt={5}>
                    <Button type='submit' onClick={onOpen} width={'200px'} py={5} bg={'red.500'} _hover={{bg: useColorModeValue('red.400')}} color={'white'} className='uppercase'>
                        {
                            loading ? 'Updating...' : 'Update Blog'
                        }
                    </Button>
                </Flex>
        </form>
      </Box>
    </Box>
  )
}

            //   <Box mt={4} color={useColorModeValue('white')}>
            //     <Text fontWeight={500}>Status: 
            //       {
            //         fileError ? (<span>Error while uploading image</span>) : 
            //         filePercentage > 0 && filePercentage < 100 ? (<span>{`Uploading is ${filePercentage}% done`}</span>) : 
            //         filePercentage === 100 ? (<span>Uploaded</span>) : ''
            //       }
            //     </Text>
            //   </Box>