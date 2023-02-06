import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const MedicalSocialWorks = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Medical Social Works"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Departments"
                bgImage="page-title-five"
            />

            <div className="doctor-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="doctor-details-item doctor-details-left">
                                <img src="/images/departments/image-6.png" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +07 554 332 322
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            msw@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            RT Ground Floor
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
                                        <h3>MEDICAL SOCIAL WORKS DEPARTMENT</h3>
                                        <ul>
                                            <li>
                                                The activities of the MSW Department at MPMMCC &amp;
                                                HBCH include:
                                            </li>
                                            <br></br>
                                            <li>
                                                In the year 2021-22, the processes and systems at the
                                                Medical Social Services department were crystalized.
                                            </li>
                                            <br></br>
                                            <li>
                                                Nearly 36,526 patients, frequently approached the
                                                Department (MSW), out of which approx. 11,985
                                                beneficiaries received railway concession.
                                            </li>
                                            <br></br>
                                            <li>
                                                Medical Social Workers addressed their psycho - social,
                                                emotional, and financial needs, by advocating,
                                                facilitating and being a bridge between the doctor and
                                                the patient as well as the care givers.
                                            </li>
                                            <br></br>
                                            <li>
                                                656 patients were accommodated at Rain Basera, a free of
                                                cost accommodation facility, provided for attendants of
                                                Pediatric patients.
                                            </li>
                                            <br></br>
                                            <li>
                                                We were fortunate to get funds from Tata Memorial
                                                Hospital which empowered us to provide continuous
                                                treatment to the underprivileged class of the patients
                                                who visited MPMMCC/HBCH.
                                            </li>
                                            <br></br>
                                            <li>
                                                Collaboration with ICS-Cancer Cure Fund and V-Care
                                                Foundation helped us provide financial assistance to
                                                theCancer patients. New Statutory funding from Rastriya
                                                Arogya Nidhi (RAN), HMCPF and NHM further strengthened
                                                the supply funds whereby we were able to help a
                                                considerable number of patients who would have
                                                otherwisedropped out of treatment.
                                            </li>
                                            <br></br>
                                            <li>
                                                The local stakeholders have proactively participated in
                                                the cancer initiatives. The Rotary club has donated an
                                                lectric rickshaw to facilitate travel of the old and
                                                needy.
                                            </li>
                                            <br></br>
                                            <li>
                                                Department networked with two NGO’s, i.e. Varanasi
                                                Masonic Lodge Trust &amp; Varanasi Elite Round
                                                Table,which culminated in a donation for patient care
                                                specifically for treatment of COVID patients, admitted
                                                at HBCH, Varanasi.
                                            </li>
                                            <br></br>
                                            <li>
                                                Palliative counselling has commenced and the Medical
                                                Social Workers are involved in teleconsultancy for the
                                                terminally ill patients.
                                            </li>
                                            <br></br>
                                            <li>
                                                Department has also participated in Free COVID
                                                vaccination drive organized by HBCH/MPMMCC and ALKEM,
                                                for local resident (boatman, vendors, hawkers) at
                                                Subah-eBanaras Assi Ghat, Varanasi.
                                            </li>
                                            <br></br>
                                            <li>
                                                Medical Social Service department organizes many
                                                recreational activities on the occasion of festivals
                                                like Dussehra and Diwali to bring happiness to patients
                                                and caregivers.
                                            </li>
                                            <br></br>
                                            <li>
                                                Coordination with the officials of Patna Secretariat to
                                                streamline and Expedite the process of Bihar Chief
                                                Minister Relief Fund.
                                            </li>
                                        </ul>
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

export default MedicalSocialWorks;
