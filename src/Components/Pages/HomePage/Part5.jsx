import { Card, CardBody, Box, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, SimpleGrid } from "@chakra-ui/react"
function Part5() {
    return (
        <>
            <SimpleGrid maxW='auto' bg='#EEEEEE'>
                <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='10px' maxW='6xl' margin="auto" marginTop="20px">
                    <Card maxW='md' margin="auto" bg='#FF597B'>
                        <CardBody>
                            <Image
                                height="200px"
                                width="200px"
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383'
                                alt='Multi Purpose Powder - Blush & Eye'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Maybelline Fit Me Blush</Heading>
                                <Text>
                                    Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries & Botanicals.
                                </Text>
                                <Text color='#EEEEEE' fontSize='2xl'>
                                    $5
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
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/468/original/open-uri20171223-4-sz64re?1514063327'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Maybelline Face Studio Master Blush</Heading>
                                <Text>
                                    Maybelline Face Studio Master Hi-Light Light Boosting blush formula has an expert balance of shade shimmer illuminator for natural glow. Skin goes soft.
                                </Text>
                                <Text color='#EEEEEE' fontSize='2xl'>
                                    $10
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
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/454/original/data?1514062281'
                                alt='e.l.f. Studio Blush Palette Dark'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>e.l.f. Studio Blush Palette Dark</Heading>
                                <Text>
                                    This beautiful blush palette holds 4 gorgeous shades to mix and match throughout the year for a custom blended color. Great for shading and sculpting.
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
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/436/original/open-uri20171223-4-192jbo8?1514063324'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Milani Rose Powder Blush</Heading>
                                <Text>
                                    This silky blush with benefits can be used so many ways. It shapes, it contours, it highlights. Sunbaked on Italian terracotta tiles, it’s buildable.
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
export default Part5