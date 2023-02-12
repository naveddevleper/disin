import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const ClinicalServices = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Clinical Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="HBCH Services"
                bgImage="page-banner-tmc"
            />

            <div className="doctor-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <div className="doctor-details-item">
                                <div className="doctor-details-right">
                                    <div className="doctor-details-biography">
                                        <table class="table table-hover table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S.No</th>
                                                    <th scope="col">SERVICES;</th>
                                                    <th scope="col">Sub-Category</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><b>A.</b></td>
                                                    <td><strong>Surgical Oncology</strong></td>
                                                    <td>
                                                        <p>1.Gastrointestinal Oncology<br></br>2.Thoracic Oncology<br></br>3. Head &amp; Neck Oncology<br></br>4.Plastic and Reconstructive Surgery<br></br>5. Breast Oncology<br></br>6. Gynecology Oncology<br></br>7. Bone &amp; Soft tissue tumor<br></br>8. Genito-urinary Oncology<br></br>9. ediatric Surgical Oncology<br></br>10. Neuro Surgical Oncology</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b>B.</b></td>
                                                    <td><strong>Anesthesiology, Critical Care &amp; Pain</strong></td>
                                                    <td>
                                                        <p>1. General Anesthesia<br></br>2. Intensive Care Unit<br></br>3. Pain Clinic</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b>C.</b></td>
                                                    <td><strong>Medical Oncology</strong></td>
                                                    <td>
                                                        <p>1. Adult Solid Tumor<br></br>2. Adult Hematolymphoid Malignancies<br></br>3. Bone Marrow Transplantation</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b>D.</b></td>
                                                    <td><strong>Pediatric Oncology</strong></td>
                                                    <td>
                                                        <p>1. Pediatric Hematolymphoid malignancies<br></br>2. Pediatric Solid tumors</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b>E.</b></td>
                                                    <td><strong>Radiation Oncology</strong></td>
                                                    <td>
                                                        <p>1. Head &amp; Neck Oncology<br></br> 2. Breast Oncology<br></br> 3. Thoracic Oncology<br></br> 4. Gastrointestinal Oncology<br></br> 5. Gynecology Oncology<br></br> 6. Neuro Oncology<br></br> 7. Genitourinary Oncology<br></br> 8. Pediatric Radiation Oncology<br></br> 9. Bone &amp; Soft Tissue Tumors</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>F.</td>
                                                    <td><strong>Preventive Oncology</strong></td>
                                                    <td>
                                                        <p>1. Population Based Cancer Registry<br></br>2. Hospital Based Cancer Registry<br></br>3. Cancer Screening</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b>G.</b></td>
                                                    <td><strong>Palliative Medicine</strong></td>
                                                    <td>
                                                        <p>1. Pain &amp; Palliation Services<br></br>2. Hospice Care</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b>H.</b></td>
                                                    <td><strong>Dental &amp; Prosthetic Surgery</strong></td>
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
            </div>

            <Footer />
        </>
    );
};

export default ClinicalServices;
