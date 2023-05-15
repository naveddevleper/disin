import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const Donation = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Donation To MPMMCC"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Donation To MPMMCC"
                bgImage="page-banner-mpmmcc"
            /> */}

            <div className="about-area pt-4 pb-70">
                <div className="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>For donations transferred within India</h3>
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>BENIFICIARY NAME</th>
                                        <th>BANK NAME</th>
                                        <th>BRANCH</th>
                                        <th>ADDRESS</th>
                                        <th>BANK ACCOUNT NO.</th>
                                        <th>IFSC CODE</th>
                                        <th>NOTE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-th="BENIFICIARY NAME"><span class="bt-content">MAHAMANA PANDIT MADAN MOHAN MALAVIYA CANCER CENTRE</span></td>
                                        <td data-th="BANK NAME"><span class="bt-content">CENTRAL BANK OF INDIA</span></td>
                                        <td data-th="BRANCH"><span class="bt-content">LANKA, VARANASI BRANCH</span></td>
                                        <td data-th="ADDRESS"><span class="bt-content">LANKA VARANASI (U.P.) BRANCH VARARANASI-221005</span></td>
                                        <td data-th="BANK ACCOUNT NO."><span class="bt-content">3740115281</span></td>
                                        <td data-th="IFSC CODE"><span class="bt-content">CBIN0280196</span></td>
                                        <td data-th="NOTE"><span class="bt-content"><b>After transferring fund, kindly mail your fund transfer details to our mail ID: accounts@mpmmcc.tmc.gov.in. For any query related to fund transfer, kindly contact +91- 542-2517699 Extn. 1127</b></span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr></hr>
                            <br></br>
                            <h3>For donations transferred from Abroad (Outside India)</h3>
                            <table class="table table-hover table-bordered" data-bt-active="true">
                                <thead>
                                    <tr>
                                        <th>Benificiary Name</th>
                                        <th>Bank name</th>
                                        <th>Branch</th>
                                        <th>Address</th>
                                        <th>Bank account No.</th>
                                        <th>IFSC Code</th>
                                        <th>Swift Code</th>
                                        <th>Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-th="Benificiary Name"><span class="bt-content">TATA MEMORIAL CENTRE</span></td>
                                        <td data-th="Bank name"><span class="bt-content">STATE BANK OF INDIA</span></td>
                                        <td data-th="Branch"><span class="bt-content">NEW DELHI MAIN BRANCH</span></td>
                                        <td data-th="Address"><span class="bt-content">FCRA CELL, 4TH FLOOR, STATE BANK OF INDIA, NEW DELHI MAIN BRANCH, 11, SANSAD MARG, NEW DELHI-110001</span></td>
                                        <td data-th="Bank account No."><span class="bt-content">40157804211</span></td>
                                        <td data-th="IFSC Code"><span class="bt-content">SBIN0000691</span></td>
                                        <td data-th="Swift Code"><span class="bt-content">SBININBB104</span></td>
                                        <td data-th="Note"><span class="bt-content"><b>After  transfering fund, kindly mail your fund transfer details to our mail ID: cash@tmc.gov.in. For any query related to fund transfer, kindly contact  +91-22-24177000 Extn. 4623</b></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Donation;
