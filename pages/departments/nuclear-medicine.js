import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const NuclearMedicine = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Nuclear Medicine"
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
                                <img src="/images/departments/nuclear.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-2575032,35
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            nuclearmed@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            RT Building 2nd Floor
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
                                        <h3>DEPARTMENT OF NUCLEAR MEDICINE</h3>
                                        <p align="justify">
                                            In the year 2021, the Department of Nuclear Medicine and
                                            Molecular Imaging, MPMMCC and HBCH set multiple new
                                            milestones. With the commencement of a new gamma camera,
                                            gates were opened to a whole new spectrum of diagnostic
                                            tests that are now available:
                                        </p>
                                        <ul type="disc">
                                            <li>
                                                <p>
                                                    Imaging and quantitative tests such as estimation of
                                                    GFR using gamma camera and MUGA imaging for evaluation
                                                    of cardiac ejection fraction was made available for
                                                    pre and post chemotherapy patient assessment.
                                                </p>
                                            </li>
                                            <li>
                                                <p>MDP bone scan was introduced for disease staging.</p>
                                            </li>
                                            <li>
                                                <p>
                                                    In collaboration with breast DMG, sentinel node
                                                    imaging was introduced with close communication
                                                    between nuclear medicine physicians and surgeons- a
                                                    new standardised protocol was set for accurate
                                                    localization of axillary nodes with fusion imaging
                                                    made available for presurgery visualization of
                                                    location of nodes (a first in TMC), nuclear medicine
                                                    physicians are also present during nodal dissection to
                                                    ensure gamma probes are optimally used and for
                                                    recording of count statistics of radioactivity emitted
                                                    from axillary nodes.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    In collaboration with thoracic DMG, lung perfusion
                                                    imaging was introduced for accurate prediction of post
                                                    pneumonectomy lung function.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    In collaboration with GI and Thoracic DMG,
                                                    Tc-HYNIC-TOC was introduced for SSTR imaging, useful
                                                    in accurate staging of SSTR expressing neoplasms. Just
                                                    like Tc-HYNIC-PSMA imaging, a new protocol was
                                                    standardized with fusion imaging available for review
                                                    by referring physicians and surgeons via online PACS
                                                    viewer.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    The Department has experienced a never before increase
                                                    in patient footfall. Besides starting multiple new
                                                    diagnostic tests, focus was set on increasing capacity
                                                    for FDG PET/CT imaging as well. By creating a new
                                                    logistical pathway, patient capacity was gradually
                                                    increased to nearly ~500 scan per month to help in
                                                    reducing patient waiting lists and allowing timely
                                                    imaging for accurate staging.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Communication with clinicians was encouraged with
                                                    Nuclear Medicine physicians visiting different OPDs to
                                                    increase awareness about the new diagnostic modalities
                                                    and explaining the optimal indications for the same.
                                                    Regular participation in Joint Clinics (JC) was also
                                                    undertaken. Dept of Nuclear medicine increased its
                                                    participation in pediatric JCs which is now being held
                                                    almost 3 times a week with different case
                                                    subdivisions. There was regularization of Thoracic JCs
                                                    which was made possible because of close collaboration
                                                    between surgery, radiotherapy and Nuclear Medicine.
                                                    General bilateral communication with live feedback has
                                                    always been emphasized for precise reporting.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    After receiving regulatory clearance from AERB, a new
                                                    2 bedded therapy ward was commissioned. In
                                                    collaboration with Head Neck DMG first thyroid cancer
                                                    patients were undertaken for high dose radioactive
                                                    iodine therapy. Other therapeutic options such as
                                                    I-131 MIBG therapy for neuroblastoma, PSMA therapy for
                                                    prostate cancer, and PRRT for neuroendocrine tumors
                                                    have also been taken approval for.
                                                </p>
                                            </li>
                                        </ul>
                                        {/* <p align="center">
                                            <img src="assets\img\doctors\PET 1.png" width="100%" height="400" hspace="10" vspace="10"></p>
                                        <p align="center">
                                            <img src="assets\img\doctors\PET 2.png" width="100%" height="400" hspace="10" vspace="10"></p> */}
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3 align="center">
                                            <u>Staff Members</u>
                                        </h3>
                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr></tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Assistant Professor</strong>
                                                    </td>
                                                    <td scope="col">
                                                        Dr. Varun Shukla<br></br>
                                                        Dr. Manikandan M V
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Senior Resident</strong>
                                                    </td>
                                                    <td scope="col">
                                                        Dr. Nihit Mhatre<br></br>
                                                        Dr. Keerti Sitani
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>RSO</strong>
                                                    </td>
                                                    <td scope="col">
                                                        Mr. Santosh Gupta, RSO (III) Cyclotron<br></br>
                                                        Mr. Jay Prakash Kumar, RSO (III) MPMMCC<br></br>
                                                        Mr. Manoj Chauhan, RSO (II) HBCH
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>SAC (HBCH/ MPMMCC)</strong>
                                                    </td>
                                                    <td scope="col">
                                                        Mr. Ravi Chauhan
                                                        <br></br>
                                                        Mr. Ritvik Sinha<br></br>
                                                        Mr. Uddeshya Narayan Jha<br></br>
                                                        Mr. Ajay Rajbhar
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

export default NuclearMedicine;
