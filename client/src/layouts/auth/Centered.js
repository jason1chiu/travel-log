// Chakra imports
import { Box, Flex, Text } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import PropTypes from "prop-types";
import React from "react";

function AuthCentered(props) {
  const { children, title, description, image, cardTop, cardBottom } = props;
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'
      mx={{ base: "10px", lg: "0px" }}
      minH='100vh'>
      <FixedPlugin />
      <Box
        position='absolute'
        minH={{ base: "50vh", md: "50vh" }}
        maxH={{ base: "50vh", md: "50vh" }}
        w={{ md: "calc(100vw)" }}
        maxW={{ md: "calc(100vw)" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={image}
        bgSize='cover'
        mx={{ md: "auto" }}>
      </Box>
      <Card
        w={{ base: "100%", md: "max-content" }}
        h='max-content'
        mx='auto'
        maxW='100%'
        mt={cardTop}
        mb={cardBottom}
        p={{ base: "10px", md: "50px" }}
        pt={{ base: "30px", md: "50px" }}>
        {title && description ? (
          <Flex
            direction='column'
            textAlign='center'
            justifyContent='center'
            align='center'
            mt='125px'
            mb='30px'>
            <Text fontSize='4xl' color='white' fontWeight='bold'>
              {title}
            </Text>
            <Text
              fontSize='md'
              color='white'
              fontWeight='normal'
              mt='10px'
              mb='26px'
              w={{ base: "90%", sm: "60%", lg: "40%", xl: "333px" }}>
              {description}
            </Text>
          </Flex>
        ) : null}
        {children}
      </Card>
    </Flex>
  );
}
// PROPS

AuthCentered.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.any,
};

export default AuthCentered;
