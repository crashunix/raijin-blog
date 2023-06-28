"use client"

import useEmblaCarousel from 'embla-carousel-react'

const CustomersCarousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true })

    return (
        <>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide bg-red-200 border-2 border-blue-400">Slide 1</div>
                    <div className="embla__slide bg-red-200 border-2 border-blue-400">Slide 2</div>
                    <div className="embla__slide bg-red-200 border-2 border-blue-400">Slide 3</div>
                    <div className="embla__slide bg-red-200 border-2 border-blue-400">Slide 4</div>
                    <div className="embla__slide bg-red-200 border-2 border-blue-400">Slide 5</div>
                    <div className="embla__slide bg-red-200 border-2 border-blue-400">Slide 6</div>
                    <div className="embla__slide bg-red-200 border-2 border-blue-400">Slide 7</div>
                    <div className="embla__slide bg-red-200 border-2 border-blue-400">Slide 8</div>
                    <div className="embla__slide bg-red-200 border-2 border-blue-400">Slide 9</div>
                </div>
            </div>
        </>
    );
}

export default CustomersCarousel;