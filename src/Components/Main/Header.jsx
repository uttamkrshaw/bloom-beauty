import {
    Menu,
    MenuButton,
    Avatar,
    VStack,
    MenuList,
    HStack,
    MenuItem,
    MenuDivider,
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { FiChevronDown } from "react-icons/fi"
//using Link for the navigation
import { Link as RouterLink } from 'react-router-dom';

// using context api 
import { useContext } from 'react';
import { AuthenticationStatus } from '../Context/Authntication';
import UseAuth from '../Custom-Hooks/UseAuth';
// logout from the firebase;
import { signOut } from 'firebase/auth';
import { auth, provider } from '../Firebase/firebase-config';


export default function DefaultNavbar() {
    const { isOpen, onToggle } = useDisclosure();
    // for checking if we are logged in or not ;
    const currentUser = UseAuth();
    console.log('currentUser', currentUser);
    // using context api to toggle buttons 
    const { authStatus, setAuthStatus } = useContext(AuthenticationStatus);

    console.log('authstatus', authStatus);

    // using the firebase for logout 
    const Logout = async () => {
        setAuthStatus(false);
        try {
            await signOut(auth);
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', '#EEEEEE')}
                color={useColorModeValue('gray.600', '#FF597B')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Avatar size='sm' name='Dan Abrahmov' src='https://i.ibb.co/B4sbbC5/logo.png' />
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', '#FF597B')}>
                        BloomBeauty
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    {authStatus ? <>
                        {/*
                     Testing in progress
                     <Text>{currentUser ? currentUser?.email : 'noperson is logged in '}</Text>
                    <Button
                        onClick={Logout}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        href={'#'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Logout
                    </Button>  
                    */}
                        <Menu>
                            <MenuButton
                                py={2}
                                transition="all 0.3s"
                                _focus={{ boxShadow: 'none' }}>
                                <HStack>
                                    <Avatar
                                        size={'sm'}
                                       src={currentUser?.photoURL}
                                    />
                                    <VStack
                                        display={{ base: 'none', md: 'flex' }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2">
                                        <Text fontSize="sm">{currentUser?.displayName}</Text>
                                    </VStack>
                                    <Box display={{ base: 'none', md: 'flex' }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList
                                bg={('white', 'gray.900')}
                                borderColor={('gray.200', 'gray.700')}>
                                <MenuItem>Cart</MenuItem>
                                <MenuDivider />
                                <MenuItem><Button onClick={Logout}>Sign out</Button></MenuItem>
                            </MenuList>
                        </Menu>
                    </>
                        :
                        <>
                            <RouterLink to='/signUp'>
                                <Button
                                    display={{ base: 'none', md: 'inline-flex' }}
                                    fontSize={'sm'}
                                    fontWeight={600}
                                    color={'white'}
                                    bg={'pink.400'}
                                    href={'/signUp'}
                                    _hover={{
                                        bg: 'pink.300',
                                    }}>
                                    Sign In
                                </Button>
                            </RouterLink>
                        </>
                    }
                </Stack>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    // const linkColor = useColorModeValue('gray.600', 'gray.200');
    // const linkHoverColor = useColorModeValue('gray.800', 'white');
    // const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const linkColor = useColorModeValue('gray.600', '#FF8E9E');
    const linkHoverColor = useColorModeValue('#EEEEEE', '#FF597B');
    const popoverContentBgColor = useColorModeValue('#EEEEEE', '#F9B5D0');


    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Products',
        children: [
            {
                label: 'Blush',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'Bronzer',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
            {
                label: 'Eyebrow',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
            {
                label: 'EyeLiner',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
            {
                label: 'Eyeshadow',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
            {
                label: 'Foundation',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
            {
                label: 'LipLiner',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
            {
                label: 'LipStick',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
            {
                label: 'Mascara',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
            {
                label: 'NailPolish',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'Search For Products',
        href: '#',
    },
    {
        label: 'OFFERS',
        href: '#',
    }
];