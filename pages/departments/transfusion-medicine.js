import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const TransfusionMedicine = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Transfusion Medicine"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Departments"
                bgImage="page-banner-mpmmcc"
            /> */}

            <div className="doctor-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="doctor-details-item doctor-details-left">
                                <img src="/images/departments/transfusion.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            transmed@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            DNT Building 3rd Floor
                                        </li>
                                    </ul>
                                </div>

                                <div className="doctor-details-work">
                                    <h3>Working hours</h3>
                                    <div className="appointment-item-two-right">
                                        <div className="appointment-item-content">
                                            <ul>
                                                <li>
                                                    Monday - Friday <span>9:00 AM - 5:00 PM</span>
                                                </li>
                                                <li>
                                                    Saturday <span>9:00 AM - 2:00 PM</span>
                                                </li>
                                                <li>
                                                    Sunday <span>Weekoff</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="doctor-details-item">
                                <div className="doctor-details-right">
                                    <div className="doctor-details-biography">
                                        <h3>DEPARTMENT OF TRANSFUSION MEDICINE</h3>
                                        <p align="justify">
                                            Two separate Licensed Blood Centers exist at HBCH and
                                            MPMMCC. The newly installed Blood Irradiation Chamber and
                                            the HLA Immunodiagnostics Laboratory are located at HBCH.
                                        </p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <p align="center">
                                            <strong>
                                                <u>
                                                    Overview of Transfusion Medicine Activities: 1st
                                                    January 2021 to 31st December 2021
                                                </u>
                                            </strong>
                                        </p>

                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        Activities
                                                    </th>
                                                    <th height="40" scope="col">
                                                        HBCH Blood Centre
                                                    </th>
                                                    <th height="40" scope="col">
                                                        MPMMCC Blood Centre
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th colspan="3" scope="row">
                                                        <div align="left">Blood Donation</div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        Total Donation
                                                    </th>
                                                    <th height="40" scope="col">
                                                        5549
                                                    </th>
                                                    <th height="40" scope="col">
                                                        4743
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        Apheresis
                                                    </th>
                                                    <th height="40" scope="col">
                                                        1861(33.5%)
                                                    </th>
                                                    <th height="40" scope="col">
                                                        249 (5.3%)
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        Components prepared
                                                    </th>
                                                    <th height="40" scope="col">
                                                        PRBC-3656 (99.1%),<br></br>
                                                        RDP-3488 (94.6%),<br></br>
                                                        FFP-3450 (93.6%),<br></br>
                                                        Cryo-206 (5.6%),<br></br>
                                                        CSP-206 (5.6%)
                                                    </th>
                                                    <th height="40" scope="col">
                                                        PRBC-4457 (99.2%),<br></br>
                                                        RDP-3891 (86.6%),<br></br>
                                                        FFP-4113 (82.4%),<br></br>
                                                        Cryo-197 (3.9%),<br></br>
                                                        CSP-197 (3.9%)
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        Granulocytapheresis
                                                    </th>
                                                    <th height="40" scope="col">
                                                        7 (0.4%)
                                                    </th>
                                                    <th height="40" scope="col"></th>
                                                </tr>
                                                <tr>
                                                    <th colspan="3" scope="row">
                                                        <div align="left">Laboratory Investigations</div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        Blood Grouping (Both<br></br>
                                                        Donors &amp; Patients)
                                                    </th>
                                                    <th height="40" scope="col">
                                                        13970
                                                    </th>
                                                    <th height="40" scope="col">
                                                        18099
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        Cross-Matching
                                                    </th>
                                                    <th height="40" scope="col">
                                                        1861(33.5%)
                                                    </th>
                                                    <th height="40" scope="col">
                                                        249 (5.3%)
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        Apheresis
                                                    </th>
                                                    <th height="40" scope="col">
                                                        6380
                                                    </th>
                                                    <th height="40" scope="col">
                                                        12350
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        Antibody Detection
                                                    </th>
                                                    <th height="40" scope="col">
                                                        2030
                                                    </th>
                                                    <th height="40" scope="col">
                                                        15037
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th colspan="3" scope="row">
                                                        <div align="left">
                                                            Laboratory Investigations at HLA &amp;
                                                            Immunogenetics Lab<br></br>
                                                            1. HLA Typing - 124<br></br>
                                                            2. Antibody Screening - 0
                                                        </div>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <p>
                                            <strong>Research:</strong>
                                        </p>
                                        <p>Total Number of Ongoing Studies - 2</p>
                                        <p>
                                            <strong>Staff Members:</strong>
                                        </p>
                                        <h4 class="itemTitle" align="left">
                                            <strong>Staff Members:</strong>
                                        </h4>

                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td scope="col">Assistant Professor</td>
                                                    <td scope="col">Dr Akshay Batra </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">Senior Resident</td>
                                                    <td scope="col">
                                                        Dr Shalakha Agrawal<br></br>
                                                        Dr Sadia Khan
                                                    </td>
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

            <Footer />
        </>
    );
};

export default TransfusionMedicine;
