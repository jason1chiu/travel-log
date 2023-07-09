// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
// Assets
import banner from "assets/img/auth/banner.png";
import profile from "assets/img/crm/vbz.png";
import React from "react";
// Custom components
import Info from "views/admin/settings/components/Info";
import Password from "views/admin/settings/components/Password";
import Profile from "views/admin/settings/components/Profile";
import Socials from "views/admin/settings/components/Socials";
import Upload from "views/admin/settings/components/Upload";
import Delete from "views/admin/settings/components/Delete"

export default function Settings() {

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ base: 1, sm: 1, md: 3, lg: 3, xl: 3 }}
        spacing={{ base: "20px", xl: "20px" }}>
        {/* Components */}
        <Profile avatar={profile} banner={banner} />
        <Info />
        <Password />
        <Upload />
        <Socials />
        <Delete />
      </SimpleGrid>
    </Box>
  );
}