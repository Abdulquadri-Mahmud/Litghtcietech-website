import React, { useState } from 'react'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

export default function Section4() {
    const [open, setOpen] = useState(false);

    const handleSeeMore = () => {
        if (!open) {
            setOpen(true)
        }else{
            setOpen(false);
        }
    }
  return (
    <Box my={'10vh'} bg={'gray.200'}>
        <Box py={10} maxW={{'2xl': '80%', md: '90%', base: '100%'}} mx={'auto'}>
            <Box>
                <Heading textAlign={'center'} fontWeight={500}> WITH SERVICE, SAFETY, <br /> SECURITY</Heading>
                <Box width={'100px'} height={'3px'} mx={'auto'} bg={'red.500'} my={2}></Box>
                <Text px={{md: 0, base: 3}} textAlign={'center'} width={{md:'60%', base: '100%'}} mx={'auto'} pt={3}>Our customers made us the African market leader in earthingand lightningprotection. They recognizedthat our commitment to
                    From an initial site survey through to the long- term security delivered by our comprehensive
                    maintenance programmes, lightcietect has atotal turkey solution for Earthing and lightning protection. Of course,
                    Not everybody needs our full services so we have made it completely flexible-you can use
                    as little or as much of our expertise as you need.
                </Text>
            </Box>
            <Flex justifyContent={'space-between'} flexWrap={'wrap'} mt={10}>
                <Box width={{md: '49%', base: '100%'}}>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Lightcietech Service</Heading>
                                </Box>
                                {/* <AccordionIcon /> */}
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    long-term relationships. That means remaining focused by giving our customers the best possible solutions within deadlines and delivering value for money to an agreed budget. Extensive training, experience and national network of branches we seek independent, third party accreditation for their competence and the quality of our work and maintain standards by using only our own teams of engineers. Furthermore, the service doesn't stop once the installation is complete. We offer comprehensive maintenance programs to ensure your system remains safe and secure and that you meet the legal requirement for an annual health check Our staffs liaise directly with your own project team to make sure that our work schedule is satisfactory and fits in with your broader program. At all times, we aim to make your job as straightforward as possible.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                <Box width={{md: '49%', base: '100%'}}>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Lightcietech Safety</Heading>
                                </Box>
                                {/* <AccordionIcon /> */}
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    Your Earthing and Lightning protection systems benefits from the use of state of-the-art Cdegs software and sophisticated CAD systems to support a detailed analysis of your needs. It means that your Lightcietech installation automatically complies with current legislation and we can design the highest standards of safety into your installation from the start. Choosing Lightcietech for earthing and lightning protection means you can count on having the best -trained and most professional engineers on hand to ensure the safety of your site. That is true whether it is a simple, small - scale installation or a huge, complex,and technically demanding challenge such as a power station. Part of our services means keeping on top ofthe latest technical advances and incorporating into our work.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
            <Box px={4}>
                <Link to={'/service'} className='text-red-500 underline flex items-center gap-1'>Read More <FaArrowRightLong/></Link>
            </Box>
        </Box>
    </Box>
  )
}
