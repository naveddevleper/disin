import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";

const Gallery = () => {
    return (
        <>
            <TopHeader />

            <Navbar />


            <div className="container gallery-container pb-5">


                <div className="tz-gallery">

                    <div className="row">

                        <div className="col-sm-12 col-md-4 pb-4">
                            <img src="/images/gallery/1.jpg" alt="hbch" />

                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/2.jpg" alt="hbch" />

                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">

                            <img src="/images/gallery/3.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/4.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/5.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/6.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/7.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/8.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/9.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/10.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/11.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/12.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/13.jpg" alt="hbch" />
                        </div>
                        <div className="col-sm-6 col-md-4 pb-4">
                            <img src="/images/gallery/14.jpg" alt="hbch" />
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Gallery;
