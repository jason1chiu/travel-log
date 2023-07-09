import { GET_ME } from "utils/queries";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_INFO } from "utils/mutations";
import { useHistory } from "react-router-dom";

// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  SimpleGrid,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import InputField from "components/fields/InputField";
import React from "react";

export default function Settings() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  const toast = useToast();

  const history = useHistory();

  const { data, loading, error, refetch } = useQuery(GET_ME);
  const [updateUser] = useMutation(UPDATE_USER_INFO, {
    onCompleted: () => {
      refetch();
    }
  });  

  const [formState, setFormState] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    location: '',
  });

  useEffect(() => {
    if (data) {
      const username = `${data.me.username}`;
      const firstName = `${data.me.firstName}`;
      const lastName = `${data.me.lastName}`;
      const email = `${data.me.email}`
      const location = `${data.me.location}`

      setFormState({ username, firstName, lastName, email, location });
    }
  }, [data])

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error</p>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateUser({
        variables: { ...formState }
      });
      // handle successful update
      toast({
        title: "Profile Updated!",
        description: "You've successfully updated your account!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      history.push('/admin/overview');
    } catch (err) {
      console.error(err);
      // handle errors
      toast({
        title: "Error updating profile!",
        description: "Profile unsuccessfully updated!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <FormControl>
      <Card>
        <Flex direction='column' mb='40px' ms='10px'>
          <Text fontSize='xl' color={textColorPrimary} fontWeight='bold'>
            Account Settings
          </Text>
          <Text fontSize='md' color={textColorSecondary}>
            Here you can change user account information
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacing={{ base: "20px", xl: "20px" }}>
          <InputField
            mb='25px'
            me='30px'
            id='username'
            label='Username'
            placeholder={formState.username}
            onChange={(e) => setFormState({ ...formState, username: e.target.value })}
          />
          <InputField
            mb='25px'
            id='email'
            label='Email Address'
            placeholder={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          />
          <InputField
            mb='25px'
            me='30px'
            id='first_name'
            label='First Name'
            placeholder={formState.firstName}
            onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
          />
          <InputField
            mb='25px'
            id='last_name'
            label='Last Name'
            placeholder={formState.lastName}
            onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
          />
          <InputField
            mb='25px'
            me='30px'
            id='location'
            label='Location'
            placeholder={formState.location}
            onChange={(e) => setFormState({ ...formState, location: e.target.value })}
          />
        </SimpleGrid>
        <Button
          variant='brand'
          minW='183px'
          fontSize='sm'
          fontWeight='500'
          ms='auto'
          onClick={handleSubmit}>
          Save changes
        </Button>
      </Card>
    </FormControl>
  );
}