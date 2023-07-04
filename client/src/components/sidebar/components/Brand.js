import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

import { HSeparator } from "components/separator/Separator";
export function SidebarBrand() {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Flex align='center' direction='column'>
      <Text align='center' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
        TinySquares
      </Text>
      <HSeparator mb='20px' mt='20px' />
    </Flex>
  );
}

export default SidebarBrand;