import { GET_ME } from "utils/queries";
import { useQuery } from "@apollo/client";

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/overview/components/Banner";
import General from "views/admin/overview/components/General";
import Notifications from "views/admin/overview/components/Notifications";
import Projects from "views/admin/overview/components/Projects";
import Upload from "views/admin/overview/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";

export default function Overview() {

  const { data, loading, error } = useQuery(GET_ME);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error</p>;

  const name = `${data.me.firstName} ${data.me.lastName}`;
  const username = `${data.me.username}`

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="20px">
        <Banner
          banner={banner}
          avatar={avatar}
          name={name}
          username={username}
          posts='17'
          followers='9.7k'
          following='274'
        />
        <General minH='365px' pe='20px' />
        <Upload minH={{ base: "auto", lg: "420px", "2xl": "365px" }} pe='20px' pb={{ base: "100px", lg: "20px" }} />
        <Projects
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
        <General minH='365px' pe='20px' />
        <Notifications used={25.6} total={50} />
      </SimpleGrid>
    </Box>
  );
}