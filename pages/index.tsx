import type { NextPage } from 'next'
//import Head from 'next/head'
import { Box, Center, Image, Text, VStack, Heading } from '@chakra-ui/react'
import Banner from '../public/cropped-shinee-cult-banner.png'


const Home: NextPage = () => {
  return (
    <Box>
      <VStack align="left">
        <Text color="white" fontSize={["7.5vw", "4.6vw"]} mt={["15%", "5%"]} ml={["10%"]}>
          Welcome To . . .
        </Text>
        <Center>
          <Image mt={[0, 5]} width="80%" height="80%" src={Banner.src} alt="Shinee Cult Banner" />
        </Center>
      </VStack>
    </Box>
  )
}

export default Home
