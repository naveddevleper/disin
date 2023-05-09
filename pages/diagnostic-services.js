import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const DiagnosticServices = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Diagnostic Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="HBCH Services"
                bgImage="page-banner-tmc"
            /> */}

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
                                                    <th scope="col">Sr.No</th>
                                                    <th scope="col">Services</th>
                                                    <th scope="col">Sub-Category</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <b>A.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Radiodiagnosis &amp; Imaging</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. CT Scan<br></br>2. MRI Scan<br></br>3.
                                                            Mammography<br></br>4. Ultrasonography<br></br>5.
                                                            Conventional X-ray
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>B.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Nuclear Medicine Imaging</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. PET CT Scan<br></br>2. SPECT Scan
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>C.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Laboratory Medicine</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Histopathology &amp; Cytopathology including
                                                            Molecular Pathology<br></br>2. Hematopathology
                                                            including Flow Cytometry<br></br>3. Cancer
                                                            Cytogenetics<br></br>4. Biochemistry<br></br>5.
                                                            Microbiology including Mycology, Mycobacteriology
                                                            &amp; Molecular Microbiology
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>D.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Transfusion Medicine</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Transfusion Medicine Services including
                                                            Apheresis, Stem Cell harvest, Blood Irradiation
                                                            Facility.<br></br>2. HLA Laboratory
                                                        </p>
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

export default DiagnosticServices;
