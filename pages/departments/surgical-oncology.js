import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const SurgicalOncology = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Surgical Oncology"
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
                                <img src="/images/departments/surgical-onco.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            surgical@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            DNT Building GND Floor OPD 12,13,26
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
                                        <h3>DEPARTMENT OF SURGICAL ONCOLOGY</h3>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <p>
                                            <strong>ABOUT:</strong>
                                        </p>
                                        <p align="justify">
                                            Department of Surgical Oncology at HBCH Varanasi was
                                            commissioned in April 2018 with 2 faculties. We started
                                            doing basic and semi advanced cancer surgeries. OPD
                                            registration has grown up to more than 3500 patients in a
                                            year. In the last almost four years, department has gained
                                            strength with the addition of more faculties in various
                                            disciplines like Head and Neck Surgery, Neurosurgery,
                                            Gynaec-Oncology, Urology, Orthopedics Oncology, Pediatric
                                            Surgery, Gastrointestinal and Thoracic Surgical Oncology
                                            and Plastic and Reconstructive Surgery.
                                        </p>
                                        <p align="justify">
                                            Department has started performing minimal invasive
                                            surgeries in various disciplines like laparoscopy in
                                            colorectal surgeries, Uro-Onocology , Gynaec-oncology and
                                            thoracic divisions.
                                        </p>
                                        <p align="justify">
                                            We are consistently growing in profession as well as
                                            academic fields. Various research projects are going on in
                                            the department and publications have been done in various
                                            journals of national and international repute. Also,
                                            department of surgical oncology is actively engaged in
                                            teaching of senior residents and fellows.
                                        </p>

                                        <table
                                            class="table table-hover table-bordered"
                                            width="100%"
                                            border="0"
                                            cellspacing="0"
                                            cellpadding="1"
                                        >
                                            <thead className="bg-color">
                                                <tr>
                                                    <th height="40" colspan="5" scope="col">
                                                        <p align="center">
                                                            DEPARTMENT OF SURGERY (SURGICAL ONCOLOGY)<br></br>
                                                            PERFORMANCE STATISTICS<br></br>
                                                            (2018-2021)
                                                        </p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <th height="40" scope="col"></th>
                                                    <th height="40" scope="col">
                                                        2018<br></br>
                                                        (No. of patients)
                                                    </th>
                                                    <th height="40" scope="col">
                                                        2019<br></br>
                                                        (No. of patients)
                                                    </th>
                                                    <th height="40" scope="col">
                                                        2020<br></br>
                                                        (No. of patients)
                                                    </th>
                                                    <th height="40" scope="col">
                                                        2021<br></br>
                                                        (No. of patients)
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        No. of Surgeries
                                                        <br></br>
                                                        performed (Major +<br></br>
                                                        Minor)
                                                    </th>
                                                    <th height="40" scope="col">
                                                        478
                                                    </th>
                                                    <th height="40" scope="col">
                                                        4098
                                                    </th>
                                                    <th height="40" scope="col">
                                                        6162
                                                    </th>
                                                    <th height="40" scope="col">
                                                        11583
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        No. of New Patients
                                                        <br></br>
                                                        registered Surgical
                                                        <br></br>
                                                        Oncology OPD
                                                    </th>
                                                    <th height="40" scope="col">
                                                        HBCH: 4158<br></br>
                                                        MPMMCC: not started
                                                    </th>
                                                    <th height="40" scope="col">
                                                        HBCH:9590
                                                        <br></br>
                                                        MPMMCC:855
                                                    </th>
                                                    <th height="40" scope="col">
                                                        HBCH: 11346<br></br>
                                                        MPMMCC: 1450
                                                    </th>
                                                    <th height="40" scope="col">
                                                        HBCH: 668<br></br>
                                                        MPMMCC:15283
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th height="40" scope="col">
                                                        No. of Patients visiting
                                                        <br></br>
                                                        Surgical Oncology OPD
                                                    </th>
                                                    <th height="40" scope="col">
                                                        HBCH: 5623<br></br>
                                                        MPMMCC: not
                                                        <br></br>
                                                        started
                                                    </th>
                                                    <th height="40" scope="col">
                                                        HBCH: 18699<br></br>
                                                        MPMMCC: 703
                                                    </th>
                                                    <th height="40" scope="col">
                                                        HBCH: 20436<br></br>
                                                        MPMMCC: 9229
                                                    </th>
                                                    <th height="40" scope="col">
                                                        HBCH:6812<br></br>
                                                        MPMMCC:
                                                        <br></br>
                                                        58700
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p align="justify">
                                            <strong>STAFF:</strong>
                                        </p>
                                        <p align="justify">
                                            The Department currently comprises of 9 Surgical Oncology
                                            Faculty Members, 7 Senior Residents and 3 Fellows.
                                        </p>
                                        <p align="justify">
                                            <strong>EDUCATIONAL COURSES:</strong>
                                        </p>
                                        <p align="justify">
                                            1. M. Ch. (Surgical Oncology): Received LOP from the NMC
                                            to start the course from the academic session 2021-22.
                                        </p>
                                        <p align="justify">
                                            <strong>RESEARCH ACTIVITIES:</strong>
                                        </p>
                                        <p align="justify">
                                            All the faculty and staff are encouraged to involve
                                            themselves in in basic and clinical research. The
                                            departmental faculty have submitted independent projects
                                            in Head and Neck and Brain Tumors to the Institutional
                                            Ethics Committee for approval. The department is
                                            collaborating with other departments of HBCH, Varanasi and
                                            Tata Memorial Hospital, Mumbai. Some of the important
                                            studies being carried out are:
                                        </p>

                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td scope="col">S.No.</td>
                                                    <td scope="col">Name of the Study</td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">1.</td>
                                                    <td scope="col">
                                                        Nutritional assessment in Oral cancer patients and
                                                        nutritional factors responsible for postop morbidity
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">1.</td>
                                                    <td scope="col">
                                                        The efficacy of conventional screening versus
                                                        mHealth screening in early detection of oral
                                                        potentially malignant disorders and oral cancer
                                                        amongst the rural population of Varanasi: A
                                                        Prospective and blinded study
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">1.</td>
                                                    <td scope="col">
                                                        A Qualitative Study to Explore the Factors
                                                        Influencing Health Seeking Decisions and Treatment
                                                        Completion in Pediatric Malignancy
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">1.</td>
                                                    <td scope="col">
                                                        Intra-operative gross examination versus frozen
                                                        section for achievement of adequate margin in
                                                        patients undergoing surgery for oral cavity squamous
                                                        cell carcinoma: A randomized controlled trial.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">1.</td>
                                                    <td scope="col">
                                                        Phase 1 study of safety and feasibility of Ayurvedic
                                                        oral cannabis preparation in the Peri-operative
                                                        period in hepatobiliary and pancreatic cancers.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <br></br>
                                        <p align="justify">
                                            <strong>
                                                <u>Departmental Contact details:</u>
                                            </strong>
                                        </p>
                                        <p align="justify">
                                            MPMMCC Tel. +91-0542-2225022; MPMMCC: Extension number
                                            -1141(Office) for Department of Surgical Oncology; HBCH:
                                            Extension number 4122 for Department of Surgical Oncology
                                        </p>
                                        {/* <p align="justify">
                                            <strong>E-mail ID:</strong> mpmmcc.info@tmc.gov.in
                                        </p> */}
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

export default SurgicalOncology;
