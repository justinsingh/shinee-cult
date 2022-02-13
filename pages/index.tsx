import type { NextPage } from 'next'
//import Head from 'next/head'
import { Box, Center, Image, Text, VStack, Heading } from '@chakra-ui/react'
import Banner from '../public/shinee-cult-banner.png'


const Home: NextPage = () => {
  return (
    <Box>
      <VStack align="left" spacing={["-7%"]}>
        <Text color="white" fontSize={["7.5vw", "4.6vw"]} mt={[20]} ml={["10%"]}>
          Welcome To . . .
        </Text>
        <Image width="100%" height="100%" src={Banner.src} alt="Shinee Cult Banner" />
      </VStack>
    </Box>
  )
}

export default Home
