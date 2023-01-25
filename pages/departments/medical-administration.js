import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const MedicalAdministration = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Medical Administration"
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
                                <img src="/images/doctors/doctor3.jpg" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +07 554 332 322
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
                                                    Monday <span>9:00 AM - 8:00 PM</span>
                                                </li>
                                                <li>
                                                    Tuesday <span>9:00 AM - 8:00 PM</span>
                                                </li>
                                                <li>
                                                    Wednesday <span>9:00 AM - 8:00 PM</span>
                                                </li>
                                                <li>
                                                    Sunday <span>9:00 AM - 8:00 PM</span>
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
                                    {/* <div className="doctor-details-biography">
                                        <h3>Dr. Sarah Taylor (Neurosurgeon)</h3>
                                        <p>MBBS in Neurology, PHD in Neurosurgeon</p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Biography</h3>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>

                                        <p></p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Education</h3>
                                        <ul>
                                            <li>PHD Degree in Neurology at University of UCLan School of Medicine Preston (2006)</li>
                                            <li>Master of Neurosurgery at University of University of Exeter Medical School Exeter (2002)</li>
                                        </ul>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Experience</h3>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
                                    </div> */}
                                    {/* <div class="col-md-8">
                    <div class="message-box"> */}
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
                                        <li
                                        // style="line-height: 20pt;"
                                        >
                                            Running of COVID facility at HBCH, Varanasi.{" "}
                                        </li>
                                        <br></br>
                                        <li
                                        // style="line-height: 20pt;"
                                        >
                                            Un-interrupted cancer care during COVID pandemic.
                                        </li>
                                        <br></br>
                                        <li
                                        // style="line-height: 20pt;"
                                        >
                                            Coordination of Donation of 150 Oxygen Concentrator to
                                            Varanasi Division.
                                        </li>
                                        <br></br>
                                        <li
                                        // style="line-height: 20pt;"
                                        >
                                            Coordination with Varanasi Administration and other
                                            Institutions/ Organizations.
                                        </li>
                                        <br></br>
                                        <li
                                        // style="line-height: 20pt;"
                                        >
                                            Coordination of Installation of Oxygen Plant at HBCH
                                            &amp; MPMMCC.
                                        </li>
                                        <br></br>
                                    </ul>
                                    <p align="justify">
                                        The departments of Nursing, Biomedical Engineering,
                                        Central Registration Office, CSSD, Pharmacy and Stores,
                                        Medical Social Work, Physiotherapy, Occupational
                                        Therapy, Patient Dietary Services and Hospital Staff
                                        Clinic work in tandem with Medical Administration.
                                    </p>

                                    <h4 class="itemTitle">
                                        <strong>Staff Members:</strong>
                                    </h4>

                                    <table
                                        class="table-style style-colorheader"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="1"
                                    >
                                        <tbody>
                                            <tr></tr>
                                            <tr>
                                                <td
                                                    scope="col"
                                                //   style="border: double; padding: 10px;"
                                                >
                                                    Medical Superintendent
                                                </td>
                                                <td
                                                    scope="col"
                                                //   style="border: double; padding: 10px;"
                                                >
                                                    Dr. Akash Anand{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    scope="col"
                                                //   style="border: double; padding: 10px;"
                                                >
                                                    Assistant Medical Superintendent{" "}
                                                </td>
                                                <td
                                                    scope="col"
                                                //   style="border: double; padding: 10px;"
                                                >
                                                    Dr. Ruchi Kushwaha{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    scope="col"
                                                //   style="border: double; padding: 10px;"
                                                >
                                                    Assistant Administrative Officer{" "}
                                                </td>
                                                <td
                                                    scope="col"
                                                //   style="border: double; padding: 10px;"
                                                >
                                                    Mr. Ravindra Bundela
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    scope="col"
                                                //   style="border: double; padding: 10px;"
                                                >
                                                    Others
                                                </td>
                                                <td
                                                    scope="col"
                                                //   style="border: double; padding: 10px;"
                                                >
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
                    {/* </div>
          </div> */}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default MedicalAdministration;
