'use client'
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import images from "./images";
import Autoplay from "embla-carousel-autoplay"


function SkillCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="my-auto h-full content-center">

            <div className="grid grid-cols-1 justify-center mx-20 my-40">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}

                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="flex aspect-video">
                                        <img src={image.src} alt="" className="h-full w-full" />
                                    </Card>
                                    <CardContent className="text-center text-lg pt-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere assumenda ab, in quod aspernatur officia et cum. Eos natus fugiat minus, tempora quaerat ipsum ea minima dolores consectetur, accusantium dolorum.
                                    </CardContent>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-transparent rounded-none py-5 border-none " />
                    <CarouselNext className="bg-transparent rounded-none py-5 border-none " />
                </Carousel>
            </div>

        </div>
    );
}

export default SkillCarousel;