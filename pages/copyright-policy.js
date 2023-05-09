import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Stats from "../components/HomeOne/Stats";

const CopyrightPolicy = () => {
    return (
        <>
            <Navbar />

            <div className="about-area pt-5 pb-70">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="about-item about-right">
                            <img src="/images/about-shape1.png" alt="About" />
                            <h2>Copyright Policy</h2>
                            <p>
                                The contents of this website cannot be reproduced partially or
                                fully, without due permission from the authority of Mahamana
                                Pandit Madan Mohan Malaviya Cancer Centre, Varanasi(MPMMCC). The
                                contents of this website cannot be used in any misleading or
                                objectionable context. If referred to as a part of another
                                publication, the source must be appropriately acknowledged.
                                However, the permission to reproduce this material shall not
                                extend to any material which is identified as being copyright of
                                a third party. Authorization to reproduce such material must be
                                obtained from the departments/ copyright holders concerned.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default CopyrightPolicy;
