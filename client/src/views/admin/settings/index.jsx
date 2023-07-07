import { GET_ME } from "utils/queries";
import { useQuery } from "@apollo/client";

// Chakra imports
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
// Assets
import banner from "assets/img/auth/banner.png";
import profile from "assets/img/crm/vbz.png";
import React from "react";
// Custom components
import Info from "views/admin/settings/components/Info";
import Password from "views/admin/settings/components/Password";
import Profile from "views/admin/settings/components/Profile";
import Socials from "views/admin/settings/components/Socials";

export default function Settings() {

  const { data, loading, error } = useQuery(GET_ME);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error</p>;

  const name = `${data.me.firstName} ${data.me.lastName}`;

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, lg: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>
        {/* Column Left */}
        <Flex direction='column'>
          <Profile name={name} avatar={profile} banner={banner} />
          <Info />
        </Flex>
        {/* Column Right */}
        <Flex direction='column'>
          <Socials />
          <Password />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
