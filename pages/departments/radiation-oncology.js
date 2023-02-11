import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const RadiationOncology = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Radiation Oncology"
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
                                <img src="/images/departments/image-16.png" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            radonco@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            RT Building Ground Floor
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
                                        <h3>DEPARTMENT OF RADIATION ONCOLOGY</h3>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <p align="justify">
                                            The Department of Radiation Oncology initially started
                                            with a Theratron 780c Cobalt Teletherapy machine which was
                                            inherited from the erstwhile railway cancer hospital, in
                                            August 2018.
                                        </p>
                                        <p align="justify">
                                            Later on, the department was upgraded with the planned
                                            installation of 3 Linear Accelerators (TrueBeams with
                                            capability for higher technique treatments such as IMRT,
                                            Rapid Arc, IGRT, Large field treatment and SBRT/SRT), a
                                            fresh Cobalt Teletherapy machine and Brachytherapy. The
                                            Radiation Oncology Information System (ROIS) is already
                                            functional at HBCH and MPMMCC which enhances the safety of
                                            treatment delivery with multiple checks and counter
                                            checks. For accurate transfer of planning data from the
                                            planning systems to the treatment units, the department is
                                            equipped with ARIA networking System and PACS systems has
                                            enabled the department to seamlessly integrate with Dept.
                                            of Radiology and Dept. of Nuclear Medicine.
                                        </p>

                                        <p align="center">
                                            The following has been the timeline of growth of the HBCH
                                            and MPMMCC:
                                        </p>
                                        <p align="justify">
                                            The first Varian TrueBeam Linac (1st TrueBeam in Eastern
                                            UP &amp; Bihar) was commissioned on 6th August 2018 at
                                            HBCH with 1st patient started on treatment on 28th August
                                            2018. With this installation, all the latest technology
                                            and radiotherapy treatment modalities like 3DCRT, IMRT,
                                            Rapid Arc, SRT with Image Guidance were available at HBCH.
                                        </p>
                                        <p align="justify">
                                            Two other Varian Truebeam Linacs were commissioned at
                                            MPMMCC on 24th October 2019 and 11th November 2019 and the
                                            1st patients were treated on 27th November 2019 and 1st
                                            January 2020, respectively.
                                        </p>

                                        <p align="justify">
                                            The Department also has a dedicated CT Simulator – Siemens
                                            Somatom Confidence at MPMMCC that was commissioned on 18th
                                            December 2019.
                                        </p>

                                        <p align="justify">
                                            The new Bhabhatron Telecobalt Unit procured under the
                                            “Make in India” Program with first clinical treatment
                                            starting on 28th August 2020.
                                        </p>

                                        <p align="justify">
                                            The High Dose Rate (HDR) Flexitron Brachytherapy System
                                            (Cobalt based) was commissioned in May 2020. The first
                                            patient treatment was done on 28th August, 2020.
                                        </p>
                                        <p align="justify">
                                            The current staff members of the Department includes 8
                                            Radiation Oncology faculty, 7 Senior Residents, 7 Medical
                                            Physicists and 17 technological officers and other support
                                            staff members.
                                        </p>
                                        <p align="justify">
                                            List of care facilities presently available at Dept of
                                            Radiation Oncology, HBCH &amp; MPMMCC, Varanasi:
                                        </p>

                                        <p align="justify">
                                            High precision 3D-CRT, IMRT, IGRT, Rapid Arc teletherapy
                                            and Electron beam therapy with FFF TrueBeam Linear
                                            Accelerator.
                                        </p>
                                        <ul>
                                            <li>Frameless SRT / SBRT teletherapy.</li>

                                            <li>
                                                Teletherapy with Cobalt-60 Teletherapy unit
                                                (Bhabhatron).
                                            </li>

                                            <li>CT-Simulation with 20 slice CT-Simulator.</li>

                                            <li>
                                                Brachytherapy: Intra-cavitary, Intra-luminal,
                                                Interstitial &amp; Mould therapy using an Elekta
                                                Flexitron Cobalt-60 Brachytherapy Unit.
                                            </li>

                                            <li>Both Day Care &amp; Inpatient facilities.</li>

                                            <li>Large field irradiations.</li>
                                        </ul>
                                        <p align="justify">
                                            <strong>Achieved Statistics:</strong>
                                        </p>
                                        <p align="justify">
                                            The following are the departmental broad statistics
                                            reflecting its growth:
                                        </p>
                                        <p align="justify">
                                            1. Daily Teletherapy fractions of about 190-210 patients.
                                        </p>
                                        <p align="justify">
                                            2. The first Brachytherapy application was done on 4th
                                            July, 2000. Interstitial brachytherapy was started on 3rd
                                            October 2020. So far 305 cases of vaginal cylinder
                                            brachytherapy, intracavitary brachytherapy, surface mould
                                            brachytherapy and interstitial brachytherapy have been
                                            performed in the department.
                                        </p>
                                        <p align="justify">
                                            3. The Department of Radiation Oncology has treated 3050
                                            new patients in the year 2021.
                                        </p>
                                        <p align="justify">
                                            4. The footfalls in Radiation Oncology OPD were more than
                                            17,000 in 2021.
                                        </p>

                                        <p align="justify">
                                            <strong>
                                                Total Simulation Scans done in 2021 at MPMMCC were 3004
                                                and at HBCH were 895. This figure includes Radical,
                                                Palliative and Brachytherapy cases also.
                                            </strong>
                                        </p>

                                        <p>
                                            <strong>
                                                <u>Education:</u>
                                            </strong>
                                        </p>

                                        <p align="justify">
                                            Faculty from the Department have been invited as Invited
                                            Faculty at major regional and national conferences
                                            throughout the year.
                                        </p>
                                        <p align="justify">
                                            <strong>1. M.D. in Radiation Oncology:</strong> Letter of
                                            Intent and Letter of Permission has been received from
                                            National Medical Commission (NMC) for 4 seats from
                                            Academic Year 2021-2022.
                                        </p>
                                        <p align="justify">
                                            <strong>
                                                2. B.Sc in Radiation Therapy Technology Course:
                                            </strong>
                                            Under Process of Application.
                                        </p>
                                        <p align="justify">
                                            <strong>3. Medical Physics Internship:</strong>Students
                                            who have completed their Diploma Radiological Physics
                                            (Dip. RP)/MSc (Medical Physics) have been allowed by AERB
                                            to undergo their compulsory 1-year internship in Dept of
                                            Radiation Oncology, MPMMCC and HBCH, Varanasi. The first 2
                                            interns had joined in October 2020. 4 interns have
                                            completed their courses and currently there are 3 interns.
                                        </p>
                                        <p align="justify">
                                            <strong>
                                                <u>Research:</u>
                                            </strong>
                                        </p>

                                        <p align="justify">
                                            All the faculty and staff are encouraged to do basic and
                                            clinical research and to publish their works in the
                                            peer-reviewed journals. The Departmental faculty have
                                            submitted independent projects in Head and Neck and Brain
                                            Tumours to the IEC for approval. The department is also
                                            presently doing / has applied for IEC clearance as a part
                                            of the several studies in collaboration with other
                                            departments in HBCH and at TMH Mumbai.
                                        </p>

                                        <table
                                            class="table table-hover table-bordered"
                                            data-bt-active="true"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>STUDY NAME</th>
                                                    <th>IEC APPROVAL</th>
                                                    <th>REMAKS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            TRISUL Study in Oral Cancers
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">
                                                            Waiting for CTRI registration; TMH Collaboration
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            RAPPAL Study in Cervical cancers
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">
                                                            Study underway; TMH Collaboration
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            POLCA study in Gall Bladder cancers
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">TMH Collaboration</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            DOBL study on Non-Hodgkin’s Lymphoma
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">TMH Collaboration</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            MSS study on mould brachytherapy
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">Study underway</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            CRESH Study in High grade Gliomas
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">
                                                            Waiting for CTRI registration
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            Stress Levels in radiation health workers during
                                                            Covid-19
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">TMH Collaboration</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            Compliance to treatment according to NCG Protocol
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">TMH Collaboration</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            BART Study in bladder cancers
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">TMH Collaboration</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td data-th="STUDY NAME">
                                                        <span class="bt-content">
                                                            EPIC Study in Cervical cancers
                                                        </span>
                                                    </td>
                                                    <td data-th="IEC APPROVAL">
                                                        <span class="bt-content">Received</span>
                                                    </td>
                                                    <td data-th="REMAKS">
                                                        <span class="bt-content">
                                                            Waiting for CTRI registration
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <p align="justify">
                                            The Medical Physicists from Department of Radiation
                                            Oncology are collaborating with institutions like IIT BHU
                                            and have fabricated a 3D Phantom for Commissioning of
                                            Brachytherapy Applicators and a patent has been filed
                                        </p>

                                        <h4 class="itemTitle" align="left">
                                            <strong>Staff Members:</strong>
                                        </h4>

                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th height="40" colspan="2" scope="col">
                                                        <p align="Left">Radiation Oncologists</p>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td scope="col">Professor</td>
                                                    <td scope="col">
                                                        Dr. Satyajit Pradhan<br></br>
                                                        Dr. Ashutosh Mukherji
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">Assistant Professor</td>
                                                    <td scope="col">
                                                        Dr. Ajay GV<br></br>
                                                        Dr. Lincoln Pujari<br></br>
                                                        Dr. Sambit Swarup Nanda<br></br>
                                                        Dr. Prashant Giridhar<br></br>
                                                        Dr. Ajay Choubey<br></br>
                                                        Dr. Abhishek Shinghal
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th height="40" colspan="2" scope="col">
                                                        <p align="Left">Medical Physicists</p>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td scope="col">Scientific Officer (D) &amp; RSO </td>
                                                    <td scope="col">Ms. Priyanka Agarwal</td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">Scientific Officer (C) &amp; RSO</td>
                                                    <td scope="col">
                                                        Mr. Epili R Dandapani
                                                        <br></br>
                                                        Ms. Sanju<br></br>
                                                        Mr. Vinay Saini
                                                        <br></br>
                                                        Ms. Alka Kataria<br></br>
                                                        Mr. Sanjay Barman
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th height="40" colspan="2" scope="col">
                                                        <p align="Left">Radiotherapy Technologists</p>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td scope="col">Scientific Assistant (B)</td>
                                                    <td scope="col">
                                                        Mr. Anurag, Dosimetrist<br></br>
                                                        Mr. Fayaque Ahmad<br></br>
                                                        Mr. Nitish Kumar<br></br>
                                                        Mr. Duke Nandi<br></br>
                                                        Ms. Trisha Srivastava<br></br>
                                                        Mr. Pankaj Singh<br></br>
                                                        Mr. Kalpesh Jagannath Bhavsar<br></br>
                                                        Mr. Neeraj Upadhyay<br></br>
                                                        Mr. Ayush Kumar<br></br>
                                                        Mr. Sanjai Kumar<br></br>
                                                        Mr. Pratap Narain Singh<br></br>
                                                        Mr. Sunny Shashank Sundaram<br></br>
                                                        Mr. Kamal Kaushik<br></br>
                                                        Mr. Jay Prakash Verma<br></br>
                                                        Mr. Pramod<br></br>
                                                        Mr. Chandrapal Chauhan
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td scope="col">Other</td>
                                                </tr>

                                                <tr>
                                                    <td scope="col">LDC </td>
                                                    <td scope="col">Ms. Neha Jaiswal</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p align="justify">
                                            <strong>
                                                <u>Departmental Contact details:</u>
                                            </strong>
                                        </p>

                                        <p align="justify">MPMMCC Tel. +91-0542-2225022;</p>
                                        <p align="justify">
                                            MPMMCC: Extension number 3011 (Front Desk), 3026 (Office)
                                            for Department of Radiation Oncology;
                                        </p>
                                        <p align="justify">
                                            HBCH: Extension number 4150 for Department of Radiation
                                            Oncology
                                        </p>
                                        <p align="justify">
                                            E-mail ID: mpmmcc.info@tmc.gov.in;
                                            radoncovns@mpmmcc.tmc.gov.i
                                        </p>
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

export default RadiationOncology;
