import type { NextPage } from 'next'
//import Head from 'next/head'
import { Box, Center, Image, Text, VStack, Heading, ScaleFade, useDisclosure } from '@chakra-ui/react'
import Banner from '../public/cropped-shinee-cult-banner.png'
import { useEffect } from 'react';


const Home: NextPage = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      onToggle();
    }, 200)
  }, []);

  return (
    <Box>
      <VStack align="left">
        <Text color="white" fontSize={["7.5vw", "4.6vw"]} mt={["15%", "5%"]} ml={["10%"]}>
          Welcome To . . .
        </Text>
        <ScaleFade transition={{ enter: { duration: 1.1 }, exit: { duration: 0.3 } }} initialScale={0.1} in={isOpen}>
          <Center>
            <Image mt={[0, 5]} width="80%" height="80%" src={Banner.src} alt="Shinee Cult Banner" />
          </Center>
        </ScaleFade>
      </VStack>
    </Box>
  )
}

export default Home
