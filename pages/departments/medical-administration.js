import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const MedicalAdministration = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Medical Administration"
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
                                <img src="/images/departments/medadministration.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            ms@mpmmcc.tmc.gov.in
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
                                        <h3>DEPARTMENT OF MEDICAL ADMINISTRATION</h3>
                                        {/* <p>MBBS in Neurology, PHD in Neurosurgeon</p> */}
                                    </div>

                                    <div className="doctor-details-biography">
                                        <p align="justify">
                                            The Medical Administration along with its reporting
                                            departments is responsible for a good patient experience
                                            and seamless patient services. Various steps in this
                                            direction were taken to achieve this goal. Standard
                                            Operating Procedures for all departments are being made
                                            for all to streamline the processes. The Medical Records
                                            Office has been started under the medical administration
                                            for providing patient services. With a registration of
                                            over 19035 patients in 2021, the challenge of crowd
                                            control was dealt with by bringing in new policies for
                                            patient waiting and physical distancing. The Medical
                                            Administration oversaw the operations at HBCH &amp;
                                            MPMMCC.
                                        </p>
                                        <p align="justify">
                                            <strong>
                                                The highlights of the activities of Medical
                                                Administration during 2021 has been:
                                            </strong>
                                        </p>
                                        <ul>
                                            <li>Running of COVID facility at HBCH, Varanasi. </li>

                                            <li>Un-interrupted cancer care during COVID pandemic.</li>

                                            <li>
                                                Coordination of Donation of 150 Oxygen Concentrator to
                                                Varanasi Division.
                                            </li>

                                            <li>
                                                Coordination with Varanasi Administration and other
                                                Institutions/ Organizations.
                                            </li>

                                            <li>
                                                Coordination of Installation of Oxygen Plant at HBCH
                                                &amp; MPMMCC.
                                            </li>

                                        </ul>
                                        <p align="justify">
                                            The departments of Nursing, Biomedical Engineering,
                                            Central Registration Office, CSSD, Pharmacy and Stores,
                                            Medical Social Work, Physiotherapy, Occupational Therapy,
                                            Patient Dietary Services and Hospital Staff Clinic work in
                                            tandem with Medical Administration.
                                        </p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3 class="itemTitle">Staff Members:
                                        </h3>

                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr></tr>
                                                <tr>
                                                    <th scope="col">Medical Superintendent</th>
                                                    <td scope="col">Dr. Akash Anand </td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Assistant Medical Superintendent </th>
                                                    <td scope="col">Dr. Ruchi Kushwaha </td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Assistant Administrative Officer </th>
                                                    <td scope="col">Mr. Ravindra Bundela</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Others</th>
                                                    <td scope="col">
                                                        Ms. Shreya Dicholkar, LDC<br></br>
                                                        Mr. Ram Sumer Yadav, Attendant<br></br>
                                                        Mr. Maheep Kumar, Trade Helper<br></br>
                                                        Mr. Ganesh Kannojiya, Outsourcing Clerk
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

export default MedicalAdministration;
