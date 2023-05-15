import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const AdministrativeServices = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Clinical Services"
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
                                            <thead className="bg-color">
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
                                                        <strong>General Administration </strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1.Clerical and Administrative Support<br></br>2.Inventory and Supplies Management
                                                            <br></br>3.Compliance and Regulatory Affairs
                                                            <br></br>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>B.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Medical Administration </strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1.Medical Office Management<br></br>2.Medical Records Management
                                                            <br></br>3.Medical Coding and Billing<br></br>4.Patient Registration and Admission
                                                            <br></br>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>C.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Accounts Department</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1.Accounts Payable<br></br>2.Accounts Receivable
                                                            <br></br>3.Payroll Processing<br></br>4.Financial
                                                            Reporting<br></br>5.Budgeting<br></br>6.Auditing
                                                            <br></br>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>D.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Engineering Department</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1.Facility Management<br></br>2. Maintenance of
                                                            Equipment<br></br>3. Emergency Response<br></br>{" "}
                                                            4. Energy Management<br></br>5. Safety Inspections
                                                            <br></br>6. Construction Projects
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>E.</b>
                                                    </td>
                                                    <td>
                                                        <strong>HR Department</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Recruitment and Selection<br></br>2. Training
                                                            and Development<br></br>3. Compensation and
                                                            Benefits
                                                            <br></br>4. Performance Management<br></br>5.
                                                            Compliance with Employment Regulations
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>F.</b>
                                                    </td>
                                                    <td>
                                                        <strong>IT Department</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Technical Support<br></br>
                                                            2. Network and System Administration<br></br>
                                                            3. Data Management<br></br>
                                                            4. Information Security<br></br>
                                                            5. In-house Software Devlopment
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>G.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Purchase Department</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Equipment Procurement<br></br> 2. Inventory
                                                            Management<br></br> 3. Vendor Management<br></br>{" "}
                                                            4. Budget Management<br></br> 5. Compliance with
                                                            Regulations<br></br>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>H.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Public Relation Department</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Managing Media Relations<br></br>2. Developing
                                                            Communication Strategies<br></br>3. Social Media
                                                            Management<br></br>
                                                            4. Event Planning<br></br>5. Internal
                                                            Communications<br></br>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>I.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Security Services Department</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Access Control<br></br>2. Patrols and
                                                            Surveillance<br></br>3. Response to Emergencies
                                                            <br></br>
                                                            4. Investigation of Incidents<br></br>
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

export default AdministrativeServices;
