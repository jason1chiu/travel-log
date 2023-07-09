import { GET_ME } from "utils/queries";
import { useQuery } from "@apollo/client";

// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

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
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr 1fr", // This will divide the grid into 3 equal columns
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Banner
          gridArea={{
            base: "1 / 1 / 2 / 2",
            lg: "1 / 1 / 2 / 2", // This will place the Banner in the first column
          }}
          banner={banner}
          avatar={avatar}
          name={name}
          username={username}
          posts='17'
          followers='9.7k'
          following='274'
        />
        <General
          gridArea={{
            base: "2 / 1 / 3 / 2",
            lg: "1 / 2 / 2 / 3", // This will place the General in the second column
          }}
          minH='365px'
          pe='20px'
        />
        <Upload
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "1 / 3 / 2 / 4", // This will place the Upload in the third column
          }}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe='20px'
          pb={{ base: "100px", lg: "20px" }}
        />
      </Grid>
      <Grid
        mb='20px'
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
        <General
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
        />
        <Notifications
          used={25.6}
          total={50}
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "2 / 1 / 3 / 3",
            "2xl": "1 / 3 / 2 / 4",
          }}
        />
      </Grid>
    </Box>
  );
}
