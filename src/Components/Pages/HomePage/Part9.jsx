import { SimpleGrid, Box, Image } from "@chakra-ui/react";

function Part9() {
    return (
        <>
        <SimpleGrid maxW="auto" bg='#EEEEEE'>
            <Box margin='auto' maxW='6xl' marginTop='20px'>
                <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939614_get-free-gifts-web.gif" />
            </Box>
            <SimpleGrid columns={{sm:1, md:2}} spacing='20px' maxW='6xl' margin="auto" bg="#EEEEEE" marginTop='20px'>
                <Box>
                    <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674146125_dot-key.png" />
                </Box>
                <Box>
                    <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963692_colorbar.jpeg" />
                </Box>
                <Box>
                    <Image src="https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674141656_nyle-spinz-budds-berries.jpeg" />
                </Box>
                <Box>
                    <Image src="https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674146225_the-body-shop-720x350.jpeg" />
                </Box>
                <Box>
                    <Image src="https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674141660_tresemme-1.jpeg" />
                </Box>
                <Box>
                    <Image src="https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673953604_engage-720x350.jpeg" />
                </Box>
                <Box>
                    <Image src="https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673953612_o3-720x350.jpeg" />
                </Box>
                <Box>
                    <Image src="https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673953611_neuterogena-720x350.jpeg" />
                </Box>
            </SimpleGrid>
            </SimpleGrid>
        </>
    )
}
export default Part9;