import { NavLink, useHistory } from "react-router-dom";
import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "utils/mutations";
import Auth from 'utils/auth';

// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";
import AuthCentered from "layouts/auth/Centered";

// Assets
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

export default function SignUp() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // Define state variables for form inputs
  const [username, setUsername] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [location, setLocation] = React.useState('');

  // Define the mutation
  const [addUser, { data }] = useMutation(ADD_USER);

  // Define toast for notifications
  const toast = useToast();

  // Get the history object
  const history = useHistory();

  // Define a function to handle form submission
  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          location: location,
        },
      });

      toast({
        title: "Account created!",
        description: "We've created your account.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      // Sotre the token in local storage
      Auth.login(data.addUser.token);

      // Redirect to the Overview page
      history.push('/admin/overview');
    } catch (error) {
      console.log(error);

      toast({
        title: "An error occurred.",
        description: "Unable to create account.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <AuthCentered
      image={"linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"}
      cardTop={{ base: "140px", md: "14vh" }}
      cardBottom={{ base: "50px", lg: "100px" }}>
      <Flex
        maxW='max-content'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        justifyContent='center'
        px={{ base: "20px", md: "0px" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading
            color={textColor}
            fontSize={{ base: "34px", lg: "36px" }}
            mb='10px'>
            Sign Up
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            Enter your email and password to sign up!
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          <Button
            fontSize='sm'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            fontWeight='500'
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}>
            <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
            Sign up with Google
          </Button>
          <Flex align='center' mb='25px'>
            <HSeparator />
            <Text color={textColorSecondary} mx='14px'>
              or
            </Text>
            <HSeparator />
          </Flex>
          <FormControl>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Username<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              type='username'
              placeholder='Username'
              mb='24px'
              size='lg'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <SimpleGrid
              columns={{ base: "1", md: "2" }}
              gap={{ sm: "10px", md: "26px" }}>
              <Flex direction='column'>
                <FormLabel
                  display='flex'
                  ms='4px'
                  fontSize='sm'
                  fontWeight='500'
                  color={textColor}
                  mb='8px'>
                  First name<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  fontSize='sm'
                  ms={{ base: "0px", md: "4px" }}
                  placeholder='First name'
                  variant='auth'
                  mb='24px'
                  size='lg'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Flex>
              <Flex direction='column'>
                <FormLabel
                  display='flex'
                  ms='4px'
                  fontSize='sm'
                  fontWeight='500'
                  color={textColor}
                  mb='8px'>
                  Last name<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant='auth'
                  fontSize='sm'
                  placeholder='Last name'
                  mb='24px'
                  size='lg'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Flex>
            </SimpleGrid>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              type='email'
              placeholder='mail@simmmple.com'
              mb='24px'
              size='lg'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              isRequired={true}
              color={textColor}
              display='flex'>
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "4px" }}
                placeholder='Min. 8 characters'
                mb='24px'
                size='lg'
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Location<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              type='location'
              placeholder='New York'
              mb='24px'
              size='lg'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Flex justifyContent='space-between' align='center' mb='24px'>
              <FormControl display='flex' alignItems='start'>
                <Checkbox
                  id='remember-login'
                  colorScheme='brandScheme'
                  me='10px'
                  mt='3px'
                />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  fontWeight='normal'
                  color={textColor}
                  fontSize='sm'>
                  By creating an account means you agree to the{" "}
                  <Link
                    href='https://simmmple.com/terms-of-service'
                    fontWeight='500'>
                    Terms and Conditions,
                  </Link>{" "}
                  and our{" "}
                  <Link
                    href='https://simmmple.com/privacy-policy'
                    fontWeight='500'>
                    Privacy Policy
                  </Link>
                </FormLabel>
              </FormControl>
            </Flex>
            <Button
              variant='brand'
              fontSize='14px'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'
              onClick={handleSignUp}>
              Create my account
            </Button>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            mt='0px'>
            <Text color={textColorDetails} fontWeight='400' fontSize='sm'>
              Already a member?
              <NavLink to='/auth/sign-in'>
                <Text
                  color={textColorBrand}
                  as='span'
                  ms='5px'
                  fontWeight='500'>
                  Sign in
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </AuthCentered>
  );
};