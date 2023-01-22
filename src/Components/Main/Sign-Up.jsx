import { useState } from 'react';
import { Link } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';
// importing router link for navigation 
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// using context api for data changes in navbar 
import { AuthenticationStatus } from '../Context/Authntication';
import { useContext } from 'react';


import { signInWithPopup, createUserWithEmailAndPassword } from '@firebase/auth';
import { auth, provider, db } from '../Firebase/firebase-config';
import { doc, setDoc } from 'firebase/firestore';


const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/548/original/open-uri20171223-4-1oykkjg?1514062155',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/254/original/open-uri20171223-4-tjb63?1514063317',
    },
    {
        name: 'Kent Dodds',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/165/original/data?1514062273',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/649/original/open-uri20171223-4-10cz7j2?1514062288',
    },
];


// working on popups
export function Success() {

    return (<>
        <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }}
            p={50}
            shadow="md"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                maxW="sm"
                w="full"
                mx="auto"
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
                rounded="lg"
                overflow="hidden"
            >
                <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
                    <Icon as={CheckCircleIcon} color="white" boxSize={6} />
                </Flex>

                <Box mx={-3} py={2} px={4}>
                    <Box mx={3}>
                        <chakra.span
                            color="green.500"
                            _dark={{
                                color: "green.400",
                            }}
                            fontWeight="bold"
                        >
                            Success
                        </chakra.span>
                        <chakra.p
                            color="gray.600"
                            _dark={{
                                color: "gray.200",
                            }}
                            fontSize="sm"
                        >
                            Your account was registered!
                        </chakra.p>
                    </Box>
                </Box>
            </Flex>
        </Flex>;
    </>)
}


export default function SignUp() {
 const Navigate = useNavigate()
    const { authStatus, setAuthStatus } = useContext(AuthenticationStatus);
    const [regi, setRegi] = useState(false);
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const SignUpWithMailAndPass = async () => {
        try {
            let email = mail;
            let password = pass;
            let userCredential = await createUserWithEmailAndPassword(auth, email, password);
            let user = userCredential.user;
            // creating a users's collection to access the list of all users from the google database;
            const usersCollectionRef = doc(db, 'users', user.uid);
            await setDoc(usersCollectionRef, { email, password });
            //console.log('user', user);
            // tesing 
            setRegi(true);
            setAuthStatus(true);
            setMail('');
            setPass('');
            // <Navigate to='/'/>
            Navigate("/")
            //console.log('email',mail);
            //console.log('password',pass)
        } catch (error) {
            console.log(error);
            setAuthStatus(false);
        }
    }

    // SignIn with Google
    const signInWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, provider);
            //console.log('userCredential', userCredential);
            const user = userCredential.user;
            const email = user.email;
            const usersCollectionRef = doc(db, 'users', user.uid);
            await setDoc(usersCollectionRef, { email, googleAuth: 'true' });
            setAuthStatus(true);
            Navigate("/")
        } catch (error) {
            console.log('error', error)
        }
    }
    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Join US{' '}
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            &
                        </Text>{' '}
                        Find different ways to win Your loved One's Heart.
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={{ base: 'md', md: 'lg' }}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, red.400,pink.400)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                            minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Humko Join Kar Lo
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                !
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            Join Us & get access to thousand's of products from our different lineUp's
                            & Use it to get access to your Partner's Heart.
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <Input
                                placeholder="Email Id"
                                value={mail}
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={(e) => { setMail(e.target.value) }}
                            />
                            {/* <Input
                                placeholder="Password"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={(e)=>{setPass(e.target.value)}}
                            /> */}
                            <InputGroup size='md'>
                                <Input
                                    value={pass}
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                    //pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Password'
                                    onChange={(e) => { setPass(e.target.value) }}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' bg={'gray.100'} color={'gray.500'} onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button onClick={signInWithGoogle} fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
                                Sign In with Google
                            </Button>
                        </Stack>
                        <Button
                            onClick={SignUpWithMailAndPass}
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}>
                            Submit
                        </Button>
                        <RouterLink to='/login'>
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={'white'}
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)',
                                    boxShadow: 'xl',
                                }}>
                                Already a user? Login
                            </Button>
                        </RouterLink>
                    </Box>
                    form
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    );
}

export const Blur = (props: IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};