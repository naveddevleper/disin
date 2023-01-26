import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoplaySpeed: true,
    navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>"
    ],
};

const HeroSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            {display ? <OwlCarousel
                className="home-slider owl-carousel owl-theme"
                {...options}
            >

                <div className="slider-item slider-item-two slider-item-img-five">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape">
                                        <img className='w-50' src="/images/covid-circle-image.png" alt="Shape" />
                                    </div>

                                    <h1>CANCER IS CURABLE IF DETECTED EARLY</h1>
                                    <p>Surviving a day with Cancer is an achievement, so hold on and make your way out of it like a fighter.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="slider-item slider-item-img">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape-two">
                                        <img src="/images/home-one/home-slider2.png" alt="Shape" />
                                    </div>
                                    <h1>Caring Health is Important Than All</h1>
                                    <p>I can and I will. There's no other option. Tell yourself this affirmation every day - through treatments, doctors visits,
                                        and whatever else comes your way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item slider-item-img">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape-three">
                                        <img src="/images/home-one/home-slider3.png" alt="Shape" />
                                    </div>
                                    <h1>We Offer Highly Treatments</h1>
                                    <p>"Once you choose hope, anything's possible."<br></br>

                                        "One day at a time, one step at a time. Do what you can, do your best. Let God handle the rest."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item slider-item-img">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape">
                                        <img src="/images/home-one/home-slider1.png" alt="Shape" />
                                    </div>

                                    <h1>Exceptional Health Care for all Cancer Patients</h1>
                                    <p>Life is not measured by the number of breaths we take, but by the moments that take our breath away.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </>
    )
}

export default HeroSlider;