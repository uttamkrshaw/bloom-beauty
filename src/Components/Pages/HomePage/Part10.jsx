import { Card, CardBody, Box, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, SimpleGrid } from "@chakra-ui/react"
function Part10() {
    return (
        <>
            <SimpleGrid maxW='auto' bg='#EEEEEE'>
                <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='10px' maxW='6xl' margin="auto" marginTop="20px">
                    <Card maxW='md' margin="auto" bg='#FF597B'>
                        <CardBody>
                            <Image
                                height="200px"
                                width="200px"
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/999/original/open-uri20171227-4-2ul0s6?1514341420'
                                alt='Multi Purpose Powder - Blush & Eye'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Generation G Glossier</Heading>
                                <Text>
                                    Generation G is a new kind of lip color that gives the look and finish of just-blotted lipstick, without the blot. We’ve created a short list of the six most important shades.                               </Text>
                                <Text color='#EEEEEE' fontSize='2xl'>
                                    $20.00
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='#EEEEEE'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='#EEEEEE'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    <Card maxW='md' margin="auto" bg='#FF597B'>
                        <CardBody>
                            <Image
                                height="200px"
                                width="200px"
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/886/original/open-uri20171224-4-1pbaddr?1514082437'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Simply Pink Lip Cream</Heading>
                                <Text>
                                    Get ready to look seriously pretty in pink. From natural to extreme pick your favorite shade from our Simply Pink Lip Creams for a rosy and glossy finish with our different shades of list.
                                </Text>
                                <Text color='#EEEEEE' fontSize='2xl'>
                                    $6.50
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='#EEEEEE'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='#EEEEEE'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    <Card maxW='md' margin="auto" bg='#FF597B'>
                        <CardBody>
                            <Image
                                height="200px"
                                width="200px"
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/869/original/open-uri20171224-4-13sob9z?1514082404'
                                alt='e.l.f. Studio Blush Palette Dark'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Pro Lip Cream Palette</Heading>
                                <Text>
                              Our new Pro Lip Cream Palettes feature six expertly coordinated color combinations of intensely pigmented lip creams. Wear each shade alone or blend ’em all together for a totally new look!
                                </Text>
                                <Text color='#EEEEEE' fontSize='2xl'>
                                    $9.99
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='#EEEEEE'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='#EEEEEE'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    <Card maxW='md' margin="auto" bg='#FF597B'>
                        <CardBody>
                            <Image
                                height="200px"
                                width="200px"
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/864/original/open-uri20171224-4-1xq0aej?1514082390'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Pin-Up Pout Lipstick</Heading>
                                <Text>
                                    From polka dots to pointy pumps, nothing compares to the classics. Our personal fave? Ever so creamy lip color, of course! Take yourself back to the signature lip that started it all with our Lipstick.
                                </Text>
                                <Text color='#EEEEEE' fontSize='2xl'>
                                    $14.99
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='#EEEEEE'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='#EEEEEE'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </SimpleGrid>
        </>
    )
}
export default Part10