import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { FavouriteButton } from './FavoutiteButton'
  
  export const ProductCard = (props) => {
    const { product, rootProps } = props
    const { name, image_link, price ,category , product_type ,id } = product
    return (
      <Stack
        spacing={useBreakpointValue({
          base: '4',
          md: '5',
        })}
        {...rootProps}
      >
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={product?.image_link}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({
                base: 'md',
                md: 'xl',
              })}
            />
          </AspectRatio>
          <FavouriteButton
            position="absolute"
            top="4"
            right="4"
            aria-label={`Add ${name} to your favourites`}
          />
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
              {name}
            </Text>
            <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
             Category :- {category} 
            </Text>
            <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
             Product-Type :-  {product_type}
            </Text>
            <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
             Price - ${price}
            </Text>
          </Stack>
        </Stack>
        <Stack align="center">
          <Button colorScheme="blue" width="full">
            Add to cart
          </Button>
          <Link
           to={`/products/${id}`}
            textDecoration="underline"
            fontWeight="medium"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            More Details
          </Link>
        </Stack>
      </Stack>
    )
  }