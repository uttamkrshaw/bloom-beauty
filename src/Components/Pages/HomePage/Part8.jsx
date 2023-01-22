import { Card, CardBody, Box, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, SimpleGrid } from "@chakra-ui/react"
function Part8() {
    return (
        <>
            <SimpleGrid maxW='auto' bg='#EEEEEE'>
                <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='10px' maxW='6xl' margin="auto" marginTop="20px">
                    <Card maxW='md' margin="auto" bg='#FF597B'>
                        <CardBody>
                            <Image
                                height="200px"
                                width="200px"
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/976/original/data?1514082761'
                                alt='Multi Purpose Powder - Blush & Eye'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Control Freak Eyebrow Gel</Heading>
                                <Text>
                                    Out of control brows have you flustered? NYX Professional Makeup's Control Freak Brow Gel offers a new way to tame them fast.                                </Text>
                                <Text color='#EEEEEE' fontSize='2xl'>
                                    $6.00
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
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/794/original/data?1514072316'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Instant Lift For Brows</Heading>
                                <Text>
                                    Two-in-one automatic brow pencil and pearlized highlighter duo creates a contrast and definition that give eyes a virtual lift.
                                    Fill in  with long-wearing natural-looking pencil
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
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/792/original/data?1514072315'
                                alt='e.l.f. Studio Blush Palette Dark'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Pretty Easy Brow Palette</Heading>
                                <Text>
                                    Deluxe brow kit features natural-looking brow powder, powder highlighter, tinted brow fixative plus 4 applicator tips for a precise touch.
                                    Includes easy-to-follow illustrated how-tos.
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
                                src='https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/529/original/open-uri20171223-4-cn2wx3?1514062159'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>#ShapeMatters Palette</Heading>
                                <Text>
                                 We have developed a brush that helps you get the look at home quickly and easily. This stiff, bristled brush is angled to help you create the perfect on-trend eye brow.</Text>
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
export default Part8