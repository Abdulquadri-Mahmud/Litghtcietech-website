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

export default function ServicesSect() {
    
  return (
    <Box my={'10vh'} bg={'gray.200'}>
        <Box py={10} maxW={{'2xl': '80%', md: '100%', base: '100%'}} mx={'auto'}>
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
            <Flex justifyContent={'space-between'} flexWrap={'wrap'} px={{md: 8, base: 0}} py={{md: 8, base: 5}} bg={'gray.800'} color={'white'} mt={10}>
                <Box width={{md: '49%', base: '100%'}}>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton py={{md: 2, base: 1}} px={3}>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Lightcietech Service</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    long-term relationships. That means remaining focused by giving our customers the best possible solutions within deadlines and delivering value for money to an agreed budget. Extensive training, experience and national network of branches we seek independent, third party accreditation for their competence and the quality of our work and maintain standards by using only our own teams of engineers. Furthermore, the service doesn't stop once the installation is complete. We offer comprehensive maintenance programs to ensure your system remains safe and secure and that you meet the legal requirement for an annual health check Our staffs liaise directly with your own project team to make sure that our work schedule is satisfactory and fits in with your broader program. At all times, we aim to make your job as straightforward as possible.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Testing</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    Our team of expert engineers undertakes detailed testing and inspection of completed installation. This includes commissioning, verifying the installation is in accordance with the required specification and is in compliance with all current legislation.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton py={{md: 2, base: 1}} px={3}>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Lightcietech Security</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                Our expert engineers undertake a detailed inspection of all completed installations. Their
                                assessment takes in your original commission, verifies thatthe job has been successful and
                                is in compliance with current legislation. You need to know not only that your systems are
                                safe but also thatthey are secure forthe longterm.That’s why we deliver a comprehensive
                                testing and maintenance services that completely fulfils the legal requirements for annual
                                system testing- our lightning protection system meets BS EN 62305; earthing system
                                meets BS7430 and our electrical installation meets BS767 1. Our testing and maintenance
                                services can be used completely independently of our other services. Whether your
                                original system was installed by lightcietech or not, you can still benefit from our expertise
                                intestingandmaintenance.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton py={{md: 2, base: 1}} px={3}>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Data Analysis</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    Site survey include detailed analysis of soil resistivity, as well as past and present land use on both green field sites. Data gathered during the site survey is analyzed to provide the optimum earthing and Lightningprotection solutions.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton py={{md: 2, base: 1}} px={3}>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Design</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    Lightcietech uses states of art Cdegs software and the most sophisticated CAD system available so that we can deliver the best service to you. This enables Lightcietech to ensure you comply with current standards and legislation for your projects.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                <Box width={{md: '49%', base: '100%'}}>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton py={{md: 2, base: 1}} px={3}>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Lightcietech Safety</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    Your Earthing and Lightning protection systems benefits from the use of state of-the-art Cdegs software and sophisticated CAD systems to support a detailed analysis of your needs. It means that your Lightcietech installation automatically complies with current legislation and we can design the highest standards of safety into your installation from the start. Choosing Lightcietech for earthing and lightning protection means you can count on having the best -trained and most professional engineers on hand to ensure the safety of your site. That is true whether it is a simple, small - scale installation or a huge, complex,and technically demanding challenge such as a power station. Part of our services means keeping on top ofthe latest technical advances and incorporating into our work.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton py={{md: 2, base: 1}} px={3}>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Maintenance</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                Maximizing return on investment in Earthing and Lightning protection requires regular
                                maintenance and it is a legal requirement that all lightning protection systems are tested
                                annually.This ensures optimum system performance and protects critical business assets.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton py={{md: 2, base: 1}} px={3}>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Site surveys</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    Information is gathered on a potential installation site by Lightcietch limited fully qualified team of engineers to provide the data for complex analysis. This enable our engineers to develop comprehensive protection strategies and plans aligned to your needs
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton py={{md: 2, base: 1}} px={3}>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Installation</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    Our team of skilled engineers and technicians is equipped to undertake any projects- from simple scale installations to the most complex and demandingtechnical challenge.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border={'none'} _hover={{bg: 'none'}}>
                            <h2>
                            <AccordionButton py={{md: 2, base: 1}} px={3}>
                                <Box as='span' flex='1' textAlign='left' >
                                    <Heading fontWeight={500} fontSize={25} color={'red.500'}>Supply</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text>
                                    Quality installations demand quality products. All products are manufactured in compliance with the latest national and international standards, offering longevity in services, quality performance and peace of mind.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                <Box width={{md: '49%', base: '100%'}}>
                    <Accordion allowMultiple>
                        
                    </Accordion>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}
