import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const PalliativeMedicine = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Palliative Medicine"
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
                                <img src="/images/departments/pilliative.png" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +07 554 332 322
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            palliative@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            DNT Building OPD - 18
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
                                        <h3>DEPARTMENT OF PALLIATIVE MEDICINE</h3>
                                        <p align="justify">
                                            The Palliative Medicine Department plays a pivotal role in
                                            providing support to terminally ill cancer patients and
                                            their families, to improve the quality of life and
                                            alleviate the sufferings. The Department has provided
                                            services dedicatedly to our patients regularly during this
                                            COVID-19 pandemic.
                                        </p>


                                    </div>

                                    <div className="doctor-details-biography">
                                        <p className="mt-3">
                                            <u>
                                                <strong>SERVICES PROVIDED:</strong>
                                            </u>
                                        </p>
                                        <ul>
                                            <li>
                                                OPD Consultation (Private OPD started from Oct 2020)
                                            </li>

                                            <li>IPD Consultation</li>

                                            <li>
                                                Dedicated Pain Clinic for Comprehensive Pain Management
                                            </li>

                                            <li>Home Care Services (started from December 2019)</li>

                                            <li>
                                                Telemedicine Based Home Care Services (started from Oct
                                                2020)
                                            </li>

                                            <li>Symptom Management of Cancer Patients </li>

                                            <li>Lymphoedema Management</li>

                                            <li>
                                                Patient and family counselling and communications
                                            </li>

                                            <li>Bereavement support </li>

                                            <li>End of life care </li>

                                            <li>Psycho-Oncology</li>

                                        </ul>
                                        <p className="mt-3" align="justify">
                                            <u>
                                                <strong>EDUCATION:</strong>
                                            </u>
                                        </p>
                                        <p align="justify">
                                            There is a plan to start 1-year full time PG-Fellowship
                                            Palliative Medicine. We are all set to start 2-years
                                            Fellowship in Palliative Care Nursing programme and are
                                            also in a process to start 3-years full time DNB teaching
                                            course soon as necessary paper works are underway.
                                        </p>

                                        <ul>
                                            <li>Monday- Journal club</li>

                                            <li>Tuesday-Home Care meet</li>

                                            <li>Wednesday- Audit meet </li>

                                            <li>Friday- Academic meet </li>

                                            <li>
                                                Alternate Saturday – Nurses and Social Worker teaching
                                                programme
                                            </li>

                                        </ul>

                                        <p className="mt-3" align="justify">
                                            <u>
                                                <strong>RESEARCH:</strong>
                                            </u>
                                        </p>
                                        <p align="justify">
                                            Contributed and published the EBM Book for the year 2020
                                            (Palliative Medicine) jointly with other TMC units’
                                            Palliative Medicine faculties.
                                        </p>
                                        <p align="justify">
                                            Started first multi-centric international project jointly
                                            with M D Anderson Cancer Centre, Texas, USA
                                        </p>
                                        <p align="justify">
                                            Part of many research projects jointly with Medical and
                                            Surgical Oncology Department.
                                        </p>
                                        <table
                                            class="table table-hover table-bordered"
                                            align="center"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td scope="col">
                                                        Major Achievements of the Department for the year of
                                                        2021
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        Palliative Medicine Department in both the hospitals
                                                        (MPMMCC and HBCH) have dedicated OPD, IPD services.
                                                        Total of 11,598 patients were seen in OPD in the
                                                        year 2021.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        Celebrated World Hospice Day on 09.10.21 first time
                                                        in Varanasi city with terminally ill pediatric
                                                        palliative care patients.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        Home bound 874 terminally ill patients (adult +
                                                        pediatric) got benefited by our

                                                        Telemedicine based Home Care Services.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        A dedicated Pain Clinic has been functioning on
                                                        daily basis under Department of Palliative Medicine.
                                                        Total of 3913 patients were seen
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        Collaborated in publishing EBM book, ‘Evidence Based
                                                        Medicine’ published this year in February 2020.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        Have started our first multi-centric international
                                                        project jointly with M D Anderson Cancer Centre,
                                                        Texas, USA
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">
                                                        Eventually the department has evolved as integral
                                                        part of IAPC (Indian Association of Palliative Care)
                                                        for Palliative Medicine training and teaching center
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h5 align="justify">
                                            <strong>
                                                <u>Staff Members</u>
                                            </strong>
                                        </h5>

                                        <table class="table table-hover table-bordered">
                                            <tbody>
                                                <tr></tr>
                                                <tr>
                                                    <td scope="col">
                                                        <strong>Assistant Professor</strong>
                                                    </td>
                                                    <td scope="col">
                                                        Dr. Somnath Dey<br></br>
                                                        Dr. Kunal Ranjan
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

export default PalliativeMedicine;
