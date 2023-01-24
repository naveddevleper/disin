import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const ClinicalServices = () => {
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
                                    <table class="table-style style-colorheader" width="100%">
                                        <thead>
                                            <tr>
                                                <th scope="col" width="11%">S.No</th>
                                                <th scope="col" width="32%">SERVICES;</th>
                                                <th scope="col" width="57%">Sub-Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td align="center"><b>A.</b></td>
                                                <td align="center"><strong>Surgical Oncology</strong></td>
                                                <td>
                                                    <p>1.Gastrointestinal Oncology<br></br>2.Thoracic Oncology<br></br>3. Head &amp; Neck Oncology<br></br>4.Plastic and Reconstructive Surgery<br></br>5. Breast Oncology<br></br>6. Gynecology Oncology<br></br>7. Bone &amp; Soft tissue tumor<br></br>8. Genito-urinary Oncology<br></br>9. ediatric Surgical Oncology<br></br>10. Neuro Surgical Oncology</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center"><b>B.</b></td>
                                                <td align="center"><strong>Anesthesiology, Critical Care &amp; Pain</strong></td>
                                                <td>
                                                    <p>1. General Anesthesia<br></br>2. Intensive Care Unit<br></br>3. Pain Clinic</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center"><b>C.</b></td>
                                                <td align="center"><strong>Medical Oncology</strong></td>
                                                <td>
                                                    <p>1. Adult Solid Tumor<br></br>2. Adult Hematolymphoid Malignancies<br></br>3. Bone Marrow Transplantation</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center"><b>D.</b></td>
                                                <td align="center"><strong>Pediatric Oncology</strong></td>
                                                <td>
                                                    <p>1. Pediatric Hematolymphoid malignancies<br></br>2. Pediatric Solid tumors</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center"><b>E.</b></td>
                                                <td align="center"><strong>Radiation Oncology</strong></td>
                                                <td>
                                                    <p>1. Head &amp; Neck Oncology<br></br> 2. Breast Oncology<br></br> 3. Thoracic Oncology<br></br> 4. Gastrointestinal Oncology<br></br> 5. Gynecology Oncology<br></br> 6. Neuro Oncology<br></br> 7. Genitourinary Oncology<br></br> 8. Pediatric Radiation Oncology<br></br> 9. Bone &amp; Soft Tissue Tumors</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center">F.</td>
                                                <td align="center"><strong>Preventive Oncology</strong></td>
                                                <td>
                                                    <p>1. Population Based Cancer Registry<br></br>2. Hospital Based Cancer Registry<br></br>3. Cancer Screening</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center"><b>G.</b></td>
                                                <td align="center"><strong>Palliative Medicine</strong></td>
                                                <td>
                                                    <p>1. Pain &amp; Palliation Services<br></br>2. Hospice Care</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center"><b>H.</b></td>
                                                <td align="center"><strong>Dental &amp; Prosthetic Surgery</strong></td>
                                                <td>
                                                    <p>1. General Dental Services for Cancer Patients<br></br>2. Maxillo-facial Prosthetic Rehabilitation Services<br></br>3. Dental Services for Cancer Patients &nbsp;before and after receiving chemotherapy and radiotherapy</p>
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

            <Footer />
        </>
    );
};

export default ClinicalServices;
