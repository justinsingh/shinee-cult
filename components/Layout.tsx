import React from 'react';
import { Container } from '@chakra-ui/react'

type LayoutProps = {
  children: React.ReactNode
}
 
const Layout = ({ children }: LayoutProps) => {
  //const { userAddress, syncWallet, desyncWallet } = useDataBeastsContext();

  return (
    <Container overflow="hidden" backgroundColor="black" maxW="100vw" minH="100vh" p={0} m={0}>      
      {children}
    </Container>
  )
}

export default Layout;