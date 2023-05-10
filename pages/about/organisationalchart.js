import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const Organisationalchart = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
        pageTitle="History"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImage="page-banner-mpmmcc"
      /> */}

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-start">

                        <div className="col">
                            <div className="about-item about-center">
                                {/* <img src="/images/about-shape1.png" alt="About" /> */}
                                {/* <h2>Organisational Chart</h2> */}
                                <div class="row align-items-start">
                                    <div class="col-lg-12">
                                        <img src="/images/ORGANOGRAM.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Organisationalchart;
