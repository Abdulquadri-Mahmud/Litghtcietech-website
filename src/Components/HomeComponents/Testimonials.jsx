import React, { useState } from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/react';

export default function Testimonials() {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

  return (
    <Box pt={'10vh'} px={3}>
        <Box>
            <Heading fontSize={30} fontWeight={500} textAlign={'center'}>Testimonials</Heading>
            <Box width={'100px'} height={'3px'} mx={'auto'} bg={'red.500'} my={2}></Box>
            <Text color={'gray.600'} textAlign={'center'} pt={0}>What Our Client Says</Text>
        </Box>
        <Box mt={10} p={{md: 7, base: 3}} rounded={5} bg={'gray.200'} color={'black'} maxW={{'2xl': '60%', md: '70%', base: '100%'}} mx={'auto'}>
            <Text textAlign={{md:'center', base: 'start'}}>I have had the absolute pleasure of working with lightcietech limited as a lightning and earthing protection systems consultant for over 25 years, and I can confidently say that their expertise is unparalleled in the industry.</Text>
            <Text textAlign={{md:'center', base: 'start'}} pt={3}>
                From the moment I engaged lightcietech limited's services, it was evident that their knowledge and experience in the field were extensive. Their deep understanding of lightning behavior, earthing systems, and associated technologies was instrumental in ensuring the safety and protection of our infrastructure.
            </Text>
            <Text textAlign={{md:'center', base: 'start'}} pt={3}>
                Over the years, lightcietech limited consistently demonstrated a remarkable ability to assess our specific needs and tailor lightning and earthing protection solutions that were both effective and efficient. Their attention to detail, coupled with their innovative thinking, was invaluable in providing us with systems that not only met industry standards but also exceeded our expectations.
            </Text>
            <Box>

            <Collapse in={show} startingHeight={0}>
                <Text textAlign={{md:'center', base: 'start'}} pt={3}>
                    What sets lightcietech limited apart from other consultants is their comprehensive approach to lightning and earthing protection. They not only provided us with recommendations and guidance, but they also went the extra mile in educating our team about the importance of proper maintenance and ongoing monitoring. Their commitment to our long-term safety and success was truly commendable.
                </Text>
                <Text textAlign={{md:'center', base: 'start'}} pt={3}>
                    Furthermore, lightcietech limited's professionalism and dedication to delivering exceptional results were consistently evident throughout our partnership. They were always readily available to address any concerns or questions we had, and their promptness in providing solutions, even under tight deadlines, was truly impressive.
                </Text>
                <Text textAlign={{md:'center', base: 'start'}} pt={3}>
                    Beyond their technical expertise, lightcietech limited also possesses excellent interpersonal skills, making them a pleasure to work with. They built strong relationships with our team, ensuring open and effective communication at all times. Their ability to clearly explain complex concepts in simple terms allowed our team to grasp the importance of lightning and earthing protection and actively participate in the decision-making process.
                </Text>
                <Text textAlign={{md:'center', base: 'start'}} pt={3}>
                    In conclusion, I cannot recommend lightcietech limited highly enough as a lightning and earthing protection systems consultant. With over 25 years of experience, their expertise, professionalism, and commitment to excellence make them an invaluable asset to any organization. If you are seeking a consultant who can provide top-notch protection solutions with a personalized touch, look no further than lightcietech limited. They are truly the best in the business.
                </Text>
            </Collapse>
                <button className='text-red-500 pt-5 border-none outline-none hover:bg;green-600' onClick={handleToggle}>
                    Show { show ? 'Less' : 'More'}
                </button>
            </Box>
        </Box>
    </Box>
  )
}
