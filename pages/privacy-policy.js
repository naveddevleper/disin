import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const PrivacyPolicy = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Privacy Policy"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Privacy Policy"
                bgImage="page-banner-mpmmcc"
            /> */}

            <div className="privacy-area about-area pt-5 pb-70">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="about-item about-right">
                            <img src="/images/about-shape1.png" alt="About" />
                            <h2>Privacy Policy</h2>
                            <p>
                                This website does not automatically capture any specific
                                personal information from you (like name, phone number or e-mail
                                address), that allows us to identify you individually. You can
                                visit this site without revealing any Personal Information and/
                                or prior registration process, unless you choose to provide such
                                information. Also, this site does not use any cookies. Mahamana
                                Pandit Madan Mohan Malaviya Cancer Centre, Varanasi(MPMMCC)
                                will not identify users or their browsing activities, except
                                when a law enforcement agency may require it to do so.
                            </p>
                            <p>
                                Your email address may only be recorded if you choose to
                                willingly provide it like for instance subscriptions to public
                                notice boards like tender and career. It will only be used for
                                the purpose for which you have provided it.
                            </p>
                            <p>
                                <b>Note:</b> The use of the term "Personal Information" in this
                                privacy statement refers to any information from which your
                                identity is apparent or can be reasonably ascertained.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
