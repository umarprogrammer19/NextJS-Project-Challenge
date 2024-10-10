'use client'
import { CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image";
import { useRef } from "react";

const images = [
    '/slideShow1.jpg',
    '/slideShow2.jpg',
    '/slideShow3.jpg',
    '/slideShow4.jpg',
    '/slideShow5.jpg',
    '/slideShow6.jpg',
    '/slideShow7.jpg',
    '/slideShow8.jpg',
];

const CarouselDemo = () => {
    const plugin = useRef(
        Autoplay({ delay: 1000, stopOnInteraction: true })
    )
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="flex justify-between items-center">
                {images.map((image, index) => (
                    <CarouselItem key={index} className="md:max-w-[50%]"> 
                        <div className="flex">
                            <CardContent>
                                <Image
                                    src={image}
                                    alt={`image-${index}`}
                                    width={544}
                                    height={600}
                                    className="rounded-lg md:min-h-[600px] md:min-w-[550px] h-[300px] w-full"
                                />
                            </CardContent>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
export default CarouselDemo;
