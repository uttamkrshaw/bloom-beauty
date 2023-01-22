import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
function Part7() {
    const slides = [
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044098_paisa-vasool-elite-republic-l-1298x418.gif",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044096_skin-care-web.gif",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044100_makeup-web.gif",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044105_hair-care-web.gif",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044102_korean-web.gif",
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;
    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };
    const SLIDES_INTERVAL_TIME = 3000;
    const ANIMATION_DIRECTION = "right";
    useEffect(() => {
        const prevSlide = () => {
            setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
        };

        const nextSlide = () => {
            setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
        };

        const automatedSlide = setInterval(() => {
            ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
        }, SLIDES_INTERVAL_TIME);
        return () => clearInterval(automatedSlide);
    }, [slidesCount]);
    return (
        <Flex
            w="full"
            bg="#3e3e3e"
            _dark={{
                bg: "#EEEEEE",
            }}
            p={10}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="6xl" overflow="hidden">
                <Flex pos="relative" h="400px" w="6xl" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                            <Text
                                color="white"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                                whiteSpace="nowrap"
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
            </Flex>
        </Flex>
    );

};

export default Part7

{/*
 Changes Made : - 
 line - 74 & 75  w="full" 
 line - 68 bg- 3e3e3e for dark theme
 line - 66 bg- edf3f8 for white theme 

*/}

