import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../Components/HomeComponents/Header'
import Section1 from '../Components/HomeComponents/Section1'
import Section2 from '../Components/Section2'
import Section3 from '../Components/HomeComponents/Section3'
import Section4 from '../Components/HomeComponents/Section4'
import Section5 from '../Components/HomeComponents/Section5'
import Section6 from '../Components/HomeComponents/Section6'
import Hero from '../Components/HomeComponents/Hero'

export default function Home() {
  return (
    <Box bg={''}>
        <Header/>
        <Hero/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        hh
    </Box>
  )
}
