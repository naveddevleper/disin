import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const OccupationalTherapy = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Occupational Therapy"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Departments"
                bgImage="page-banner-mpmmcc"
            />

            <div className="doctor-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="doctor-details-item doctor-details-left">
                                <img src="/images/departments/occupational.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            otist@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            IPD Ground Floor
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
                                        <h3>OCCUPATIONAL THERAPY DEPARTMENT</h3>
                                        <p align="justify">
                                            Occupational Therapy Department enabled individuals to
                                            achieve personal productivity, wellbeing and quality of
                                            life through assessment, goal setting, interventions and
                                            participation in personally meaningful occupations while
                                            also addressing their physical, social, emotional and
                                            spiritual needs. Occupational Therapy Department
                                            interacted with various DMGs and ensured optimum
                                            rehabilitation for better outcomes and increased patient
                                            satisfaction.
                                        </p>
                                        <p align="justify">
                                            Occupational therapy department started since September,
                                            2019 at HBCH and the Occupational therapy services are
                                            being provided on OPD and IPD basis to the patients at
                                            HBCH/MPMMCC.
                                        </p>
                                        <p align="justify">
                                            In addition to regular rehabilitation, occupational
                                            therapy, department took measurement and fabricated 52 low
                                            temperature thermoplastic splints, 43 above knee and below
                                            knee prosthesis, 583 Taylors braces, 17 DRB (Derotational
                                            boot) and 4 Rotational prostheses which improved patients
                                            QOL and ADL activities for HBCH/MPMMCC patients.
                                        </p>
                                        <p>
                                            <strong>
                                                <u>Services provided:</u>
                                            </strong>
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Multi-Layer Bandaging Technique-</strong>
                                                provided to reduce lymphedema for cancer breast
                                                patients.<br></br>
                                            </li>
                                            <br></br>
                                            <li>
                                                <strong>Cognitive perceptual rehabilitation-</strong>
                                                provided for Neuro Onco-patients in HBCH&amp; MPMMCC.
                                                <br></br>
                                            </li>
                                            <br></br>
                                            <li>
                                                <strong>Splinting, orthosis &amp; prosthesis-</strong>
                                                had impact on quality of life &amp; functional
                                                performance of patients at HBCH &amp; MPMMCC.
                                            </li>
                                            <br></br>
                                            <li>
                                                <strong>Mirror therapy- </strong>provided for amputation
                                                patients to prevent phantom limb sensation.
                                            </li>
                                            <br></br>
                                            <li>
                                                <strong>Group and play therapy-</strong>for Paediatrics
                                                Onco-patients to take care of depression as well as
                                                improve self-involvement in community.<br></br>
                                            </li>
                                            <br></br>
                                            <li>
                                                <strong>Vocational rehabilitation </strong>counselling
                                                also done to enhance return to transitional /permanent
                                                job for patients with one’s own capabilities.<br></br>
                                            </li>
                                            <br></br>
                                            <li>
                                                Free distribution of Vaginal Dilation kit provided by
                                                INDIAN CANCER SOCIETY, Mumbai for NC/B Category
                                                Gynaec-onco patients at HBCH &amp; MPMMCC, respectively.
                                            </li>
                                        </ul>
                                        <br></br>
                                        <p>
                                            <strong>Education:</strong>
                                        </p>
                                        <ul>
                                            <li>
                                                Staff regularly participated in departmental academic
                                                &amp; DMG meetings, CMEs, Conferences and Workshops,
                                                held in and outside HBCH/MPMMCC.<br></br>
                                            </li>
                                            <br></br>
                                            <li>
                                                The department has been involved in education of
                                                observers from various faculties like Occupational
                                                Therapy, Palliative Medicine, Dental, Physiotherapy and
                                                Nursing.<br></br>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h5 align="left">
                                            <u>Staff Members:</u>
                                        </h5>
                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th scope="col">Scientific Assistant (B)</th>
                                                    <td scope="col" colspan="2">
                                                        Dr. Ajit Kumar Sahoo
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="message-box"></div>
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

export default OccupationalTherapy;
