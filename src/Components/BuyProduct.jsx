import React, { useRef, useState } from 'react'
import { Box, Button, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react';

export default function BuyProduct() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);

    const getLastName = useRef();
    const getFirstName = useRef();
    const phone = useRef();
    const whatsappPhone = useRef();
    const address = useRef();
    const product = useRef();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        });
    }

    const myEmail = 'lightcietechltd@gmail.com';

    const hanldeSubmit = (e) => {
        e.preventDefault();

        const checkLastname = getLastName.current.value === '';
        const checkFirstname = getFirstName.current.value === '';
        const checkPhone = phone.current.value === '';
        const checkWhatsappPhone = whatsappPhone.current.value === '';
        const checkAddress = address.current.value === '';
        const checkProduct = product.current.value === '';

        if (checkLastname) {
            setError('Firstname input field is required!');
            return;
        };
        if (checkFirstname) {
            setError('Lastname input field is required!');
            return;
        };
        if (checkPhone) {
            setError('Phone input field is required!');
            return;
        };
        if (checkWhatsappPhone) {
            setError('Whatsapp Phone input field is required!');
            return;
        };
        if (checkAddress) {
            setError('Address input field is required!');
            return;
        };
        if (checkProduct) {
            setError('Product input field is required!');
            return;
        };

        const sendMessage = () => {
            setError(false);
            const addName = `${formData.firstname} ${formData.lastname}`;
            // const email = formData.email;
            const message = `${formData.firstname}'s Info regarding the order he/she placed.%0D%0A%0D%0AActive Phone Number: ${formData.phone}%0D%0A%0D%0AWhatsapp Number: ${formData.whatsappPhone}%0D%0A%0D%0AProduct: ${formData.product}%0D%0A%0D%0ADelivery Address: ${formData.address}%0D%0A`;
            window.location.href = `mailto:${myEmail}?subject=${addName}&body=${message}`;
        }
        sendMessage();
    }

    console.log(formData);
  return (
    <Box>
        <Box position={'fixed'} right={0} top={{'2xl': '11vh', xl: '10vh',base: '11vh'}} zIndex={100}>
            <Button onClick={onOpen} roundedBottomLeft={50} rounded={0} color={'red.500'} bg={'white'} _hover={{bg: ''}} shadow={'md'}>
                Click To Order
            </Button>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent pt={5}>
                <Heading fontWeight={500} textAlign={'center'} fontSize={20}>Fill The Form To Place <br /> Your Order</Heading>
                {/* <Text color={'gray.500'} fontSize={14} mt={3} textAlign={'center'} width={'70%'} mx={'auto'}>Send us a message concerning the product you would like to purchase</Text> */}
                <ModalCloseButton/>
                <form className='mt-6' onSubmit={hanldeSubmit}>
                    <ModalBody>
                        <Box width={'100%'} position={'relative'}>
                            <input ref={getLastName} onChange={handleChange} type="text" id='lastname' className='p-3 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Lastname'/>
                            <Box position={'absolute'} left={2} top={10}>
                                {/* <FaUser className='text-red-500'/> */}
                            </Box>
                        </Box>
                        <Box mt={3} width={'100%'} position={'relative'}>
                            <input ref={getFirstName} onChange={handleChange} type="text" id='firstname'  className='p-3 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Firstname'/>
                            <Box position={'absolute'} left={2} top={10}>
                                {/* <FaUser className='text-red-500'/> */}
                            </Box>
                        </Box>
                        <Box mt={3} width={'100%'} position={'relative'}>
                            <input ref={phone} onChange={handleChange} type="Number" id='phone'  className='p-3 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Active Phone Number'/>
                            <Box position={'absolute'} left={2} top={10}>
                                {/* <FaUser className='text-red-500'/> */}
                            </Box>
                        </Box>
                        <Box mt={3} width={'100%'} position={'relative'}>
                            <input ref={whatsappPhone} onChange={handleChange} type="Number" id='whatsappPhone'  className='p-3 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Whatsapp Phone Number'/>
                            <Box position={'absolute'} left={2} top={10}>
                                {/* <FaUser className='text-red-500'/> */}
                            </Box>
                        </Box>
                        <Box mt={3} width={'100%'} position={'relative'}>
                            <input ref={product} onChange={handleChange} type="text" id='product'  className='p-3 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Product Name'/>
                            <Box position={'absolute'} left={2} top={10}>
                                {/* <FaUser className='text-red-500'/> */}
                            </Box>
                        </Box>
                        <Box mt={3} width={'100%'} position={'relative'}>
                            <input ref={address} onChange={handleChange} type="text" id='address'  className='p-3 w-full rounded-md text-black outline-none border border-gray-200' placeholder='Delivery Address'/>
                            <Box position={'absolute'} left={2} top={10}>
                                {/* <FaUser className='text-red-500'/> */}
                            </Box>
                        </Box>
                        {
                            error && (
                                <Alert status='error' fontWeight={500} mt={5} rounded={5}>
                                    <AlertIcon />
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button bg={'red.500'} _hover={{bg: 'red.600'}} color={'white'} type='button' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button bg={'blue.500'} _hover={{bg: 'blue.600'}} color={'white'} type='submit'>Submit Your Order</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    </Box>
  )
}