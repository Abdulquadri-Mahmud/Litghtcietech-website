import React from 'react'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

export default function AboutSect() {
  return (
    <Box pb={'10vh'} px={3} maxW={{'2xl': '80%', md: '90%', base: '100%'}} mx={'auto'}>
        <Box>
            <Heading textAlign={'center'} fontWeight={500}>Our Company</Heading>
            <Box width={'100px'} height={'3px'} mx={'auto'} bg={'red.500'} my={2}></Box>
            <Text textAlign={'center'} width={{md:'60%', base: '100%'}} mx={'auto'} pt={3}>We are earthing and lighting hazard consultants, with appreciable experience in the design, procurement, supply, installation, inspection, and maintenance of effective and up-to-date system for checking earthing deficiency and lightning strikes.</Text>
        </Box>
        <Flex justifyContent={'space-around'} pt={{md: 12, base: 5}} flexWrap={'wrap'}>
            <Box width={{md: '45%', base: '100%'}}>
                <Image src='/bg1.jpg' maxW={'100%'} rounded={5}/>
            </Box>
            <Box width={{md: '50%', base: '100%'}} pt={{md: 0, base: 5}}>
                <Text>
                    The prospect of a lightning strike is profoundly disturbing and renders
                    everyone apprehensive. Lightning by its nature possesses a tremendous potentiality for inflicting untold
                    disaster and devastation....
                </Text>
                <Text py={4}>
                    Lightning strikes could result in electrocution, mysterious conflagrations, blackout as breakdown of sundry mechanical, electrical and electronic facilities and equipment. The unpredictabiity of ghtning strikes brings to the fore the importance of putting in place precautionary measures to pre-empt the penis of lightning.
                </Text>
                <Text>Mindful of the potential fallout of unchecked lightning, we as responsible professionals deem it imperative to put at your disposal,the technology and expertise that will safely navigate you and your property through all lightningrelated hazards. Our goal once commissioned, is to determine and supenntendthe mobilization of a suitable earthing and lightning solution system that will best serve our client's interest with a view to accomplishing this objective, we undertake and suit any or all the following earthing and lightning solution services to our client's purpose.</Text>
            </Box>
        </Flex>
        <Box pt={5}>
            <Flex justifyContent={'space-around'} flexDir={{md: 'row', base: 'column-reverse'}} flexWrap={'wrap'}>
                <Box  width={{md: '45%', base: '100%'}}>
                    <List spacing={0}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='red.500' />
                            Site survey
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='red.500' />
                            Data analysis includingsoil resistivity profiling
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='red.500' />
                            Designed base on Cdeg software and CAD 
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='red.500' />
                            Materials procurement, supply and installation
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='red.500' />
                            Materials and site assessment, inspection and maintenance
                        </ListItem>
                    </List>
                    <Text pt={5}>
                        The edge, bite, beauty and strength of our range ofproducts or systems lie in their dependable interception of electrical currents, generated at inter tropical fronts. Safeguarding you alongside your property against the hazards and perils of lightning is our forte. Never compromise the sanctity of your life or property,access your service and ensure safety. Discounting the perils of lightning or bracing yourself for them, is utterly imprudent whereas pre-empting same is prudence personified.
                    </Text>
                </Box>
                <Box  width={{md: '45%', base: '100%'}}>
                    <Image src='/about.jpg' maxW={'100%'} rounded={5}/>
                </Box>
            </Flex>
            <Box>
                <Text>The company works across the continents in range of diverse sectors including Telecoms’,Construction, Power and Rail. We can handle as much or as little as you needjobs large or small, simple or complex- whatever it is, we have the skill and experience to ensure you get complete Earthing and Lightning protection</Text>
            </Box>
        </Box>
    </Box>
  )
}
