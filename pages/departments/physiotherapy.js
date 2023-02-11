import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const Physiotherapy = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Physiotherapy"
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
                                <img src="/images/departments/physiotherapy.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            physiotherapy@mpmmcc.tmc.gov.in
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
                                        <h3>PHYSIOTHERAPY DEPARTMENT</h3>

                                        <p align="justify">
                                            The Physiotherapy Department is successfully providing
                                            patient care at Homi Bhabha Cancer Hospital, since
                                            November, 2018 and at Mahamana Pandit Madan Mohan Malviya
                                            Cancer Centre, since August, 2020. The team provides
                                            patient care in treating patients on IPD basis in ICU,
                                            Recovery, Paediatric &amp; Adult Wards as well as on OPD
                                            basis.
                                        </p>
                                        <p align="justify">
                                            The services provided by the department include:
                                        </p>
                                        <ul>
                                            <li>
                                                Evaluation, diagnosis and management of movement
                                                dysfunction and enhancement of physical and functional
                                                abilities.
                                            </li>
                                            <li>
                                                Restoration, maintenance and promotion of optimal
                                                physical function, fitness and optimal quality of life.
                                            </li>
                                            <li>
                                                Prevention and treatment of disabilities, that may
                                                result from diseases or as a side effect of treatment.
                                            </li>
                                            <li>
                                                Evaluation, management and regular follow up of upper
                                                limb, lower limb and facial lymphedema patients.
                                            </li>
                                            <li>
                                                Conducting ‘Pulmonary Rehabilitation session’ for
                                                pre-operative patients, especially from Thoracic and
                                                Gastrointestinal unit, to create awareness about
                                                post-operative complications and its prevention.
                                            </li>
                                            <li>
                                                Conducting ‘Post-Operative Breast session’ to create
                                                awareness about precautions and exercises to prevent
                                                lymphedema and reduce shoulder morbidity.
                                            </li>
                                            <li>
                                                Evaluation, management and regular follow up of elderly
                                                patients under ‘Geriatric Clinic’ in collaboration with
                                                Medical Oncology Department.
                                            </li>
                                            <li>
                                                Collaborationwith other healthcare professionals to
                                                address patient needs and provide efficient and
                                                effective care.
                                            </li>
                                        </ul>
                                        <br></br>
                                        <p align="justify">
                                            The Department has treated approximately 530 patients in
                                            pre-operative
                                            <strong>‘Pulmonary Rehabilitation Session’</strong> and
                                            approximately 700 patients in
                                            <strong>‘Post-Operative Breast Session’</strong>. The
                                            department has distributed free of cost artificial breast
                                            prosthesis along with innerwear to 23 low socio economic
                                            strata patients, who had undergone mastectomy.
                                        </p>
                                        <p align="justify">
                                            Apart from this, department has started 1 year (6 months
                                            training+ 6 months’ internship)
                                            <strong>‘Onco Physiotherapy Course’ </strong>successfully,
                                            and is getting good response from peripheral
                                            colleges.Around 2808 OPD and 4650 IPD patients at MPMMCC
                                            and around 66 OPD and 619 IPD patients at HBCH, have been
                                            treated in 2021. Services continued even during COVID
                                            pandemic als.
                                        </p>
                                        {/* <p align="center">
                                                                                    <img src="assets/img/doctors/Physiotheropy 1.png"></p>
                                                                                <br></br>
                                                                                    <p align="center">
                                                                                        <img src="assets/img/doctors/Physiotheropy 2.png"></p> */}
                                        <h5>
                                            <u>Staff Members:</u>
                                        </h5>
                                        <table
                                            class="table table-hover table-bordered"
                                            width="100%"
                                            border="0"
                                            cellspacing="0"
                                            cellpadding="1"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Scientific Assistant B</strong>
                                                    </td>
                                                    <td scope="col" colspan="2">
                                                        Dr. Dipti Kadu<br></br>
                                                        Dr. Ankita Chitre
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Physiotherapist (Adhoc)</strong>
                                                    </td>
                                                    <td scope="col" colspan="2">
                                                        Dr. Sumaiya Azeem
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

export default Physiotherapy;
