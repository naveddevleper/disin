import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const CollegiumMembers = () => {
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
                                <h2>Organisational Chart</h2>
                                <div class="row align-items-start">
                                    <div class="col-lg-12">
                                        <div class="message-box">
                                            <table >
                                                <tbody>
                                                    <tr >
                                                        <td colspan="2" className="first-col">COLLEGIUM MEMBERS</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. R.A. Badwe, Director, TMC</th>
                                                        <td>Chairman</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. C.S. Pramesh, Director, TMH</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. S.D. Banavali, Director (Academic), TMC</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. Kailash Sharma, Dean (Academics) Projects</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th><span class="blackhead">Dr. Sudeep Gupta, Director, ACTREC </span></th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. Umesh Mahantshetty, Director, HBCH, Vizag</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. A.C Kataki, Director, BBCI</th>
                                                        <th>Member</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. S. Pradhan, Director, HBCH &amp; MPMMCC, Varanasi</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. R. Dikshit, Director, CCE</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. S.V. Shrikhande, Dy. Director, TMH</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. S. Laskar, Dy. Director (Academics), TMC</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. Pankaj Chaturvedi, Dy. Director, CCE</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. N. Khattry, Dy. Director, CRC, ACTREC</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dr. Prasanna V. Dy. Director, CRI, ACTREC</th>
                                                        <td>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Mr. A. N. Sathe, Chief Administrative Officer, TMC</th>
                                                        <td>Secretary</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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

export default CollegiumMembers;
