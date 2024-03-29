import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  items: 1,
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: [
    "<i class='icofont-simple-left'></i>",
    "<i class='icofont-simple-right'></i>",
  ],
};

const TestimonialSlider = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="pt-5 counter-bg">
      <div className="container">
        {display ? (
          <OwlCarousel
            className="feedback-slider owl-carousel owl-theme"
            {...options}
          >
            <div className="feedback-item shadow p-3 mb-4 bg-white rounded">
              <div className="client-img">
                <img
                  className="rounded-circle director-image"
                  src="/images/Satyajit Photo_TMC.png"
                  alt="MPMMCC Director"
                />
                <h3>Dr. Satyajit Pradhan</h3>
                <h6>Director MPMMCC & HBCH</h6>
              </div>
            </div>

            <div className="feedback-item shadow p-3 mb-4 bg-white rounded">
              <div className="client-img">
                <Link
                  href="https://tmc.gov.in/index.php/en/about-us"
                >
                  <a>
                    <img
                      className="rounded-circle director-image"
                      src="/images/TMC_Director.webp"
                      alt="TMC Director"
                    />
                    <h3>Dr. Rajendra Badwe</h3>
                    <h6>Director TMC</h6>
                  </a>

                </Link>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider;
