import { useState } from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

function Part3() {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "black",
        },
    };
    const slides = [
        {
            img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674054467_loreal-group_webstrip-12-1.jpg",
        },
        {
            img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1667649361_exclusive-web.gif?tr=f-gif",
        },
        {
            img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674056836_body-shop-flat-20-web.jpg",
        },
        {
            img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674032016_web.gif?tr=f-gif",
        }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };
    return (
        <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
                bg: "#EEEEEE",
            }}
            p={10}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="6xl" overflow="hidden" pos="relative">
                <Flex h="400px" w="6xl" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                            <Text
                                color="white"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                            >
                                {sid + 1} / {slidesCount}
                            </Text>
                            <Image
                                src={slide.img}
                                alt="carousel image"
                                boxSize="full"
                                backgroundSize="cover"
                            />
                        </Box>
                    ))}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>
                    &#10094;
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                    &#10095;
                </Text>
            </Flex>
        </Flex>
    );
};

export default Part3;