import { GET_ME } from "utils/queries";
import { useQuery } from "@apollo/client";

// Chakra imports
import {
  Avatar,
  Flex,
  Image,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";

export default function Settings(props) {

  const { avatar, banner } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";
  const textColorTertiary = "secondaryGray.300";

  const { data, loading, error } = useQuery(GET_ME);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error</p>;

  const name = `${data.me.firstName} ${data.me.lastName}`;
  const username = `${data.me.username}`

  return (
    <Card mb='20px' align='center'>
      <Image src={banner} borderRadius='16px' />
      <Avatar mx='auto' src={avatar} h='87px' w='87px' mt='-43px' mb='15px' />
      <Text fontSize='2xl' textColor={textColorPrimary} fontWeight='700'>
        {name}
      </Text>
      <Text fontSize='2xl' textColor={textColorSecondary} fontWeight='700'>
        {username}
      </Text>
      <Flex align='center' mx='auto' px='15px'>
        <Text
          me='4px'
          color={textColorTertiary}
          fontSize='sm'
          fontWeight='400'
          lineHeight='100%'>
          Account type:
        </Text>
        <Select
          id='user_type'
          w='unset'
          variant='transparent'
          display='flex'
          textColor={textColorPrimary}
          color={textColorPrimary}
          alignItems='center'
          defaultValue='Administrator'>
          <option value='Administrator'>Administrator</option>
          <option value='Member'>Member</option>
        </Select>
      </Flex>
    </Card>
  );
}
