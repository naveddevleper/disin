import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const Dietetics = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Dietetics"
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
                                <img src="/images/departments/deitary.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            dietician@mpmmcc.tmc.gov.in
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
                                        <h3>DIETETICS DEPARTMENT</h3>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <p align="justify">
                                            Nutrition is a basic human need and a prerequisite to a
                                            healthy life. A proper diet is essential to meet the daily
                                            needs of humans to remain healthy and in disease free
                                            condition.
                                        </p>
                                        <p align="justify">
                                            Daily ward rounds are taken by the dieticians in their
                                            respective wards and diet is prescribed/implemented in
                                            consultation with the doctors. Individual diet counselling
                                            along with diet chart is provided to indoor as well as
                                            outdoor patients.
                                        </p>
                                        <br></br>
                                        <p>
                                            <strong>Clinical Rounds:</strong>
                                        </p>
                                        <ul>
                                            <li>
                                                A Standard Operating Protocol (SOP) has been formulated
                                                in order to provide right diet of good quality &amp;
                                                adequate quantity to the inpatients.
                                            </li>
                                            <br></br>
                                            <li>
                                                Dietician conduct daily bed to bed ward rounds and sees
                                                the doctor’s instruction regarding diet based on
                                                diagnosis.
                                            </li>
                                            <br></br>
                                            <li>
                                                Observe the condition of the patients in terms of
                                                his/her illness, appetite, oral tolerance vis-à-vis
                                                requirement
                                            </li>
                                            <br></br>
                                            <li>
                                                Required diet modification Is done as per requirement,
                                                after consultation with treating doctor.
                                            </li>
                                            <br></br>
                                            <li>
                                                Briefly counsel the patient’s attendant regarding the
                                                diet to be provided from the hospital
                                            </li>
                                            <br></br>
                                            <li>
                                                Get feedback regarding the diet acceptance or tolerance
                                                by the patient
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h5>
                                            <u>Dietetics Department Consultations, 2021:</u>
                                        </h5>
                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Hospital</strong>
                                                    </td>
                                                    <td scope="col" colspan="3">
                                                        OPD
                                                    </td>
                                                    <td scope="col" colspan="3">
                                                        IPD
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>HBCH</strong>
                                                    </td>
                                                    <td scope="col" colspan="3">
                                                        369
                                                    </td>
                                                    <td scope="col" colspan="3">
                                                        2087
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td scope="col">
                                                        <strong>MPMMCC </strong>
                                                    </td>
                                                    <td scope="col" colspan="3">
                                                        3429
                                                    </td>
                                                    <td scope="col" colspan="3">
                                                        9601
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <br></br>
                                        <h5 align="left">
                                            <u>Staff Members:</u>
                                        </h5>
                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Asst. Dietician</strong>
                                                    </td>
                                                    <td scope="col" colspan="2">
                                                        Ms. Navneet Kaur, (Adhoc)
                                                        <br></br>
                                                        Ms. Anjali Priya, (Contractual)
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

export default Dietetics;
