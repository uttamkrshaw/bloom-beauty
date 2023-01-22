import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
function Part1() {
    const slides = [
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673943131_republic-day-header-web-1.gif",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674109513_rose-hip_web_category-1.gif",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673969538_lakme_mega-beauty-haul-2596x836-1.jpeg",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674047074_1298x418-5.gif",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674117420_minimalist_bodycare-2596x836-1.jpeg",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673978743_face_compact_web_hp.jpg",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673969539_k-beauty-web-new-1.gif",
        },
        {
            img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673969899_wands-of-hair-straightening_webhp-1.jpg",
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

export default Part1

{/*
 Changes Made : - 
 line - 74 & 75  w="full" 
 line - 68 bg- 3e3e3e for dark theme
 line - 66 bg- edf3f8 for white theme 

*/}

