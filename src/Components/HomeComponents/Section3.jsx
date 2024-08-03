import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react';

export default function Section3() {
  return (
    <Box pb={'10vh'} px={3} bg={'gray.800'} color={'white'} py={10}>
        <Box maxW={{'2xl': '80%', md: '90%', base: '100%'}} mx={'auto'}>
            <Box>
                <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 35, base: 25}} width={{md:'60%', base: '100%'}} mx={'auto'}>PROTECTION <span className="text-red-500">FOR</span> EARTHING <span className="text-red-500">AND</span> LIGHTNING <span className="text-red-500">PROTECTION</span></Heading>
                <Box width={'100px'} height={'3px'} mx={'auto'} bg={'red.500'} my={2}></Box>
                <Text textAlign={'center'} width={{md:'60%', base: '100%'}} mx={'auto'} pt={3}>Our customers made us the African market leader in earthingand lightningprotection. They recognizedthat our commitment to
                    higher standards of service and safety meant
                    that they could get on with their job secure
                    in the knowledge that we had done ours.
                </Text>
            </Box>
            <Box pt={4}>
                <Flex justifyContent={'space-between'} pt={{md: 8, base: 5}} flexWrap={'wrap'}>
                    <Box width={{md: '45%', base: '100%'}}>
                        <Text lineHeight={2}>Earthing and Lightning Protection are critical to our customers in the rail, construction,power, telecoms and water industries, petrochemical, oil gas, high rise building, structures,hotels, sporting centre and stadiums... Sometimes just a few people feel the effects of inadequate system for Earthing and Lightning protection but sometimes the effects of inadequate system or power supplies. We continue to be the African market leader because businesses large and small turn to us for the assurance of complete Earthing and Lightning protection.</Text>
                    </Box>
                    <Box width={{md: '45%', base: '100%'}} p={3} mt={{md: 0, base: 7}} bg={'gray.200'} rounded={5}>
                        <Image src='/bg.jpg' rounded={5}/>
                    </Box>
                </Flex>
                <Box mt={5}>
                    <UnorderedList>
                        <Flex justifyContent={'space-between'} gap={3} flexWrap={'wrap'}>
                            <Box width={{md: '45%', base: '100%'}}>
                                <ListItem py={1}>You can take advantage of a complete turkey service from initial survey,through installation and ongoing maintenance designed to meet all legal leader requirements.</ListItem>
                                <ListItem py={1}>You can be sure that your job will be fully accurately specified right from the start because we have invested in the best practice design and engineering processes backed up with industry leading software.</ListItem>
                                <ListItem py={1}>You can count on our staff because we have made sure they achieve all the relevant technical and service competence qualifications</ListItem>    
                            </Box>
                            <Box width={{md: '45%', base: '100%'}}>
                                <ListItem py={1}>You can call on a national network of branches able to service jobs of all sizes through our flexible resource base.</ListItem>
                                <ListItem py={1}>You can refer to our proven track record as evidence of our ability and professionalism</ListItem>
                                <ListItem py={1}>You can rest assure that your earthing and lightning protection system remain fully effective by using Lightcietect own maintenance teams for regular testing maintenance</ListItem>
                            </Box>
                        </Flex>
                    </UnorderedList>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
