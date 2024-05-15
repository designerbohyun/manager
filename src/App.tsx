// 예시 사용 방법
import React from 'react';
import CustomerPage from './page/cusotmer';
import { Box } from '@chakra-ui/layout';
import { SideBar } from './components/SideBar';
import ProductListPage from './page/productList';
import GroupListPage from './page/group';
import ServiceListPage from './page/service';
import MembershipListPage from './page/membership';
import ReservationListPage from './page/reservation';
import './App.css';


function App() {
  return (

    <Box backgroundColor="gray.50" position="absolute" top="0" left="0" w="100vw" h="100vh" display="flex" justifyContent="start" minW="75rem">
      < Box h="100%" >
        <SideBar></SideBar>
      </ Box>

      <Box h="100%" overflowY="scroll" overflowX="hidden" w="100%" hidden>
        <CustomerPage></CustomerPage>
      </Box>

      <Box w="100%" h="100%" overflowX="hidden" overflowY="scroll" hidden><ProductListPage></ProductListPage></Box>

      <Box w="100%" h="100%" overflowY="scroll" overflowX="hidden" hidden><GroupListPage></GroupListPage></Box>

      <Box w="100%" hidden><ServiceListPage></ServiceListPage></Box>

      <Box w="100%" hidden><MembershipListPage></MembershipListPage></Box>

      <Box w="100%" h="100%" overflowX="hidden" overflowY="scroll"><ReservationListPage></ReservationListPage></Box>

    </Box >
  );
}

export default App;
