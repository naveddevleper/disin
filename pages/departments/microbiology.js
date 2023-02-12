import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const Microbiology = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Microbiology"
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
                                <img src="/images/departments/micro.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            microbiology@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            RT Building 3rd Floor
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
                                        <h3>DEPARTMENT OF MICROBIOLOGY</h3>
                                        <p align="justify">
                                            The Department has established Mycology laboratory in the
                                            year 2021. In the day to day functioning, the Microbiology
                                            Laboratory maintains high standards, good quality control
                                            and “turnaround-time”.
                                        </p>
                                        <p align="justify">
                                            A total of 38,628 Microbiology investigations have been
                                            done between 1st January to 31st December 2021 by the
                                            Department. With regard to distribution among the various
                                            sections, the investigations done were as:
                                        </p>
                                        <ul>
                                            <li>Bacteriology- 10,726</li>
                                            <br></br>
                                            <li>Clinical Microbiology Section- 3,299</li>
                                            <br></br>
                                            <li>Molecular Microbiology- 6,616 </li>
                                            <br></br>
                                            <li>Mycobacteriology-288 </li>
                                            <br></br>
                                            <li>Mycology- 113 </li>
                                            <br></br>
                                            <li>Serology Section- 17,586 </li>
                                            <br></br>
                                        </ul>
                                        <p align="justify">
                                            The laboratory regularly participates in External Quality
                                            and Assurance Schemes for different parameters and also
                                            performs environmental surveillance for the hospital. The
                                            Microbiology Department has started new tests in the scope
                                            of laboratory: Automated Identification and Sensitivity
                                            testing and Widal test for Typhoid.
                                        </p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3 class="itemTitle" align="left">
                                            <u>Infection Prevention and Control:</u>
                                        </h3>
                                        <p align="justify">
                                            The Department has been conducting regular infection
                                            control rounds in all the wards, OPDs, ICU and BMT of the
                                            hospital and training classes for the doctors, nurses and
                                            housekeeping staff about infection prevention and control
                                            practices to reduce healthcare associated infections.
                                            Regular in service classes is conducted for Nursing OICs
                                            twice in month for various hospital infection prevention
                                            and control practices.
                                        </p>
                                        <p align="justify">
                                            The Department has been participating in Hospital Acquired
                                            Infection Surveillance Network (CLABSI, CAUTI) in
                                            collaboration with AIIMS, New Delhi, funded by CDC
                                            Atlanta, USA.
                                        </p>
                                        <p align="justify">
                                            The Department has been contributing immensely ever since
                                            the commencement of COVID pandemic. Different infection
                                            control measures have been put in place and regular
                                            monitoring is being done. The Department is also involved
                                            in COVID-19 awareness for all the doctors, staff members
                                            and security personnel of the hospital. The Department has
                                            been participating in “IPC Capacity Building-Orientation
                                            Training for COVID-19 Preparedness and IPC for Healthcare
                                            Facilities” with AIIMS, New Delhi, Funded by Bill Melinda
                                            Gates Foundation, USA.
                                        </p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3 class="itemTitle" align="left">
                                            <u>Bio-Medical Waste Management:</u>
                                        </h3>
                                        <p align="justify">
                                            The Department also caters to the Bio-Medical Waste
                                            Management of the hospital. In light of the COVID
                                            pandemic, BMW management has also been adapted to the
                                            latest government guidelines. A total of 1,23,260 Kg
                                            Bio-Medical Waste was generated by the hospital during the
                                            calendar year 2021 of which 62,472 Kg was Yellow waste,
                                            4,157 Kg was sharp waste, 7,832 Kg was Blue waste and
                                            48,799 Kg was Red waste. Classes are held regularly for
                                            the health care workers and they are updated about the
                                            changes in the BMW guidelines.
                                        </p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3 class="itemTitle" align="left">
                                            <u>Bio-Medical Waste Management:</u>
                                        </h3>
                                        <p align="justify">
                                            Regular Seminars and Journal Clubs are held in the
                                            Department for doctors and the technical personnel. Two
                                            trainees have successfully completed training under the
                                            Short Term Training Certificate Course in the Department
                                            and the third candidate is currently undergoing training.
                                            Continuous Medical Education, trainings and workshops are
                                            also held to maintain an academic environment in the
                                            department.
                                        </p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3 class="itemTitle" align="left">
                                            <u>Research:</u>
                                        </h3>
                                        <p align="justify">
                                            The Department takes a keen interest in research
                                            activities and presently different projects are underway.
                                            The Microbiology department also undertakes different
                                            diagnostic challenges. The faculty, Senior Residents and
                                            technical personnel are involved in research and relevant
                                            publications are also being pursued.
                                        </p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3 class="itemTitle" align="left">
                                            <u>Staff Members:</u>
                                        </h3>
                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr></tr>
                                                <tr>
                                                    <th scope="col">Assistant Professor</th>
                                                    <td scope="col">
                                                        Dr. Rahul Jagannath Sarode<br></br>
                                                        Dr. Vijeta Bajpai<br></br>
                                                        Dr. Sujit Bharti
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

export default Microbiology;
