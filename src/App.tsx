// 예시 사용 방법
import React from 'react';
import CustomerPage from './page/cusotmer';
import { Box } from '@chakra-ui/layout';
import { SideBar } from './components/sidebar';
import ProductListPage from './page/productList';
import GroupListPage from './page/group';
import ServiceListPage from './page/service';
import MembershipListPage from './page/membership';
import ReservationListPage from './page/reservation';


function App() {
  return (
    <Box position="fixed" top="0" left="0" display="flex" justifyContent="start" w="100%" h="100%" backgroundColor="gray.50">
      <SideBar></SideBar>
      <Box w="100%">
        <CustomerPage></CustomerPage>
      </Box>

      <Box w="100%" hidden><ProductListPage></ProductListPage></Box>

      <Box w="100%" hidden><GroupListPage></GroupListPage></Box>

      <Box w="100%" hidden><ServiceListPage></ServiceListPage></Box>

      <Box w="100%" hidden><MembershipListPage></MembershipListPage></Box>

      <Box w="100%" hidden><ReservationListPage></ReservationListPage></Box>

    </Box>
  );
}

export default App;
