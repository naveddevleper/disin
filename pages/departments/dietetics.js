import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
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
                                            hello@disin.com
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            4th Floor, 408 No Chamber
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

                                    <div class="message-box">
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
                                            <li
                                            //  style="line-height: 20pt;"
                                            >
                                                A Standard Operating Protocol (SOP) has been formulated
                                                in order to provide right diet of good quality &amp;
                                                adequate quantity to the inpatients.{" "}
                                            </li>
                                            <br></br>
                                            <li
                                            //  style="line-height: 20pt;"
                                            >
                                                Dietician conduct daily bed to bed ward rounds and sees
                                                the doctor’s instruction regarding diet based on
                                                diagnosis.
                                            </li>
                                            <br></br>
                                            <li
                                            //  style="line-height: 20pt;"
                                            >
                                                Observe the condition of the patients in terms of
                                                his/her illness, appetite, oral tolerance vis-à-vis
                                                requirement
                                            </li>
                                            <br></br>
                                            <li
                                            //  style="line-height: 20pt;"
                                            >
                                                Required diet modification Is done as per requirement,
                                                after consultation with treating doctor.
                                            </li>
                                            <br></br>
                                            <li
                                            //  style="line-height: 20pt;"
                                            >
                                                Briefly counsel the patient’s attendant regarding the
                                                diet to be provided from the hospital
                                            </li>
                                            <br></br>
                                            <li
                                            //  style="line-height: 20pt;"
                                            >
                                                Get feedback regarding the diet acceptance or tolerance
                                                by the patient
                                            </li>
                                        </ul>
                                        <h5 align="CENTER">
                                            <u>Dietetics Department Consultations, 2021:</u>
                                        </h5>
                                        <table
                                        // class="table-style style-colorheader"
                                        // width="50%"
                                        // border="0"
                                        // cellspacing="0"
                                        // cellpadding="1"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        scope="col"
                                                    // style="border: double; padding: 10px; width: 30%"
                                                    >
                                                        <strong>Hospital</strong>
                                                    </td>
                                                    <td
                                                        scope="col"
                                                        // style="border: double; padding: 10px;"
                                                        colspan="3"
                                                    >
                                                        OPD
                                                    </td>
                                                    <td
                                                        scope="col"
                                                        // style="border: double; padding: 10px;"
                                                        colspan="3"
                                                    >
                                                        IPD
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        scope="col"
                                                    // style="border: double; padding: 10px; width: 30%"
                                                    >
                                                        <strong>HBCH</strong>
                                                    </td>
                                                    <td
                                                        scope="col"
                                                        // style="border: double; padding: 10px;"
                                                        colspan="3"
                                                    >
                                                        369
                                                    </td>
                                                    <td
                                                        scope="col"
                                                        // style="border: double; padding: 10px;"
                                                        colspan="3"
                                                    >
                                                        2087
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td
                                                        scope="col"
                                                    // style="border: double; padding: 10px; width: 30%"
                                                    >
                                                        <strong>MPMMCC </strong>
                                                    </td>
                                                    <td
                                                        scope="col"
                                                        // style="border: double; padding: 10px;"
                                                        colspan="3"
                                                    >
                                                        3429
                                                    </td>
                                                    <td
                                                        scope="col"
                                                        // style="border: double; padding: 10px;"
                                                        colspan="3"
                                                    >
                                                        9601
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <br></br>
                                        <h5 align="left">
                                            <u>Staff Members:</u>
                                        </h5>
                                        <table
                                            class="table-style style-colorheader"
                                            width="50%"
                                            border="0"
                                            cellspacing="0"
                                            cellpadding="1"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        scope="col"
                                                    // style="border: double; padding: 10px; width: 30%"
                                                    >
                                                        <strong>Asst. Dietician</strong>
                                                    </td>
                                                    <td
                                                        scope="col"
                                                        // style="border: double; padding: 10px;"
                                                        colspan="2"
                                                    >
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
