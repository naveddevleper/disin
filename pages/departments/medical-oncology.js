import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const MedicalOncology = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Medical Oncology"
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
                                <img src="/images/departments/medical-onco.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            medonco@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            DNT Building 1st Floor
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
                                        <h3>DEPARTMENT OF MEDICAL ONCOLOGY</h3>
                                        <p align="justify">
                                            In a short span of less than three years, since its
                                            inception, the department of Medical Oncology, has seen
                                            exponential patient foot fall, with total patient
                                            registrations of 18004 for the current calendar year. We
                                            have been able to deliver, in this calendar year, 40%
                                            higher chemotherapies (n= 59798), than in the previous
                                            year (n=42628). Furthermore, the department functioned
                                            during the three waves of COVID pandemic.
                                        </p>
                                        <p align="center">
                                            <strong>
                                                Year wise New Patient Registrations in the Department of
                                                Medical Oncology.
                                            </strong>
                                        </p>
                                        <table class="table table-hover table-bordered">
                                            <thead className="bg-color">
                                                <tr>
                                                    <th scope="row">
                                                        <div align="left">Sl. No</div>
                                                    </th>
                                                    <th scope="row" align="left">
                                                        <div align="left">Year</div>
                                                    </th>
                                                    <th scope="row" align="left">
                                                        <div align="left">New Patients</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td scope="col">1</td>
                                                    <td scope="col">2019 </td>
                                                    <td scope="col">13237</td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">2 </td>
                                                    <td scope="col">2020 </td>
                                                    <td scope="col">14437</td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">3</td>
                                                    <td scope="col">2021 </td>
                                                    <td scope="col">18004</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <p align="justify">
                                            Under Adult Haemato-oncology service, a BMT unit with 7
                                            beds has been inaugurated. This unit has state of the art
                                            6 Hepa filtered positive pressure rooms. In first phase,
                                            autologous transplants have been started.
                                        </p>
                                        <p align="justify">
                                            A regional conference has been conducted. in the month Feb
                                            2020, on Institute’s Foundation day, with a theme of
                                            affordable and accessible cancer care. This conference saw
                                            participation of several oncologists from outside of the
                                            region.
                                        </p>
                                        <p align="justify">
                                            An audit of Gall bladder cancer treated in the Department
                                            of Medical Oncology has been done and presented in the
                                            Institution’s weekly academic meeting.
                                        </p>
                                        <p align="justify">
                                            The department is actively involved in clinical research,
                                            which include investigator initiated clinical trials in
                                            cancers of importance for this region. The department is
                                            also participating in multicentric studies.
                                        </p>
                                        <p align="center">
                                            <strong>
                                                Overview of Clinical trials being conducted in the
                                                Department of Medical Oncology
                                            </strong>
                                        </p>

                                        <table class="table table-hover table-bordered">
                                            <thead className="bg-color">
                                                <tr>
                                                    <th scope="col" colspan="2">
                                                        <p align="center">
                                                            <strong>Total Number of Clinical Trials</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col" colspan="2">
                                                        <p align="center">
                                                            <strong>Completed Trials</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col" colspan="2">
                                                        <p align="center">
                                                            <strong>Ongoing Trials</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong>Overall Patients </strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong>Investigator Initiated</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col">Sponsored Trials</th>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong>Investigator Initiated</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col">Sponsored Trials</th>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong>Investigator Initiated</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong>Sponsored Trials</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong></strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong>8</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col">None</th>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong>None</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col">None</th>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong>8</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                    <th scope="col">None</th>
                                                    <th scope="col">
                                                        <p align="center">
                                                            <strong>78</strong>
                                                            <br></br>
                                                        </p>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3 class="itemTitle">Staff Members:</h3>
                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr></tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Consultant Medical Oncology</strong>
                                                    </td>
                                                    <td scope="col">
                                                        Dr. Bal Krishna Mishra, Deputy Director
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Professor</strong>
                                                    </td>
                                                    <td scope="col">Dr. Sambasivaiah Kuraparthy </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Associate Professor</strong>
                                                    </td>
                                                    <td scope="col">Dr. Akhil Kapoor</td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Assistant Professor</strong>
                                                    </td>
                                                    <td scope="col">
                                                        Dr. Anuj Gupta<br></br>
                                                        Dr. Bipinesh Sansar<br></br>
                                                        Dr. Sujeet Kumar
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

export default MedicalOncology;
