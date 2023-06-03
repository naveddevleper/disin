import React from 'react';
import TopHeader from '../../components/_App/TopHeader';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';

const PreventiveOncology = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Preventive Oncology"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Departments"
                bgImage="page-banner-mpmmcc"
            /> */}

            <div className="doctor-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="doctor-details-item doctor-details-left">
                                <img src="/images/departments/preventive.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +91-0542-6917700
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            preventive@mpmmcc.tmc.gov.in
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            IPD Ground Floor OPD - 40
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
                                        <h3>DEPARTMENT OF PREVENTIVE ONCOLOGY</h3>
                                        <ul>
                                            <li>The Department of Preventive Oncology at Mahamana Pandit Madan Mohan Malaviya Cancer Centre (MPMMCC) and Homi Bhabha Cancer Hospital (HBCH), Varanasi provides a range of services for cancer prevention. These include:</li>

                                            <li>Early detection of premalignant oral, breast and cervical lesions through community and opportunistic screening and prevention of risk factor such as tobacco cessation counselling. Evidence based treatment of pre-cancer lesion and prompt referral to disease management groups for timely treatment of diagnosed malignancy.</li>

                                            <li>Community outreach projects in urban wards and rural blocks of Varanasi district for oral, breast and cervical cancer screening. </li>

                                            <li>Population based cancer registry to assess the burden of cancer in Varanasi district.</li>

                                            <li>Hospital based cancer registry to support Hospital administration.</li>

                                            <li>Community education programme regarding hazards of tobacco, tobacco cessation and risk factors of preventable cancers for schools and college students, front line workers namely ASHA, ANM, Anganwadi workers, Nagar Nigam workers, Nurses and Medical officers.</li>

                                            <li>Continuous Medical Education and awareness programme for preventable cancer risk factors, early detection and referral for hospital staff and other institutes. </li>

                                            <li>Capacity building for oral, breast and cervical cancer screening by training nurses Dentist, Medical Officers, Nurses, front line workers for methods of screening and risk factor detection. </li>

                                            <li>Medical Certification for Cause of Death, ICD coding of the hospital deaths and training of doctors for death certification. </li>

                                            <li>COVID-19 Vaccination services for staff and patients and their attendant at the centres.</li>
                                        </ul>
                                        <p align="justify">The department registered a total of 3968 patients by the end of 2021 through preventive screening services for oral, breast and cervical cancer. These registered patients were also given awareness for risk factors of preventable cancers, early signs of cancer and risk modifications. All ever-tobacco users were given tobacco cessation interventions to encourage quitting tobacco in all forms and to maintain the same. All patients with premalignant lesions were provided treatment or referral as per the evidence-based guidelines. The confirmed malignancy cases were given a prompt referral to the disease management group. The department also supported the KEVAT for the disease management group allocation as and when required.</p>
                                        <p align="justify"><u><strong>Education:</strong></u></p>
                                        <p align="justify">In the year 2021, we organized a virtual conference on the occasion of breast cancer awareness month in October. Faculty guest speakers were from reputed institutions such as TMH (Mumbai), PGIMER (Chandigarh), Pallium India (Kerala). Over 100 doctors and nurses participated from various medical institutions of different states such as TMH- Mumbai, ICMR-Delhi, NCI Jhajjar, AIIMS-New Delhi, Kidwai Memorial Institute of Oncology-Bengaluru, PGIMER-Chandigarh, IMSBHU, VIMSAR-Burla-Odisha, SCB-Cuttack-Odisha, AIIMS-Bhatinda-Punjab, ASMC-Ayodhya-UP, SJMC-Puri-Odisha, BBMCH-Balangir-Odisha, SVIMS-Tirupati-Andhra Pradesh, Dr NTR University-Vijaywada-Andhra Pradesh, MGIMS-Warhda-Maharahtra etc.</p>
                                        <p align="justify">The Faculty and Staff have presented papers in National &amp; International Conferences. The department regularly participates in seminars and journal clubs under the Academic Programme organized by the CCE. The senior residents present weekly seminars in the department and are trained for the screening methods, research and community participatory learning method.</p>
                                        <p align="justify">Community education for cancer awareness is one of the key activities of our department. Several education camps for ASHA, ANM, Anganwadi workers, Nurses, School students and the general community have been organized for oral, breast and cervical cancer and hazards of tobacco use. Our work towards community educations was also recognized by the official social handle of the DAE. The Cancer Registry department apart from cancer registration duties is also involved in the School Education Programme.</p>
                                        <p align="justify"><u><strong>Ongoing Research Projects:</strong></u></p>
                                        <p align="justify">The department has conducted an audit of Medical Certification of Cause of Death for all death certificates prepared at both HBCH and MPMMC. The report was presented to the Hospital administration which resulted in the introduction of remedial measures to reduce the errors in death certification.</p>
                                        <p align="justify">The Cancer Registry department has submitted the Population-based Cancer Registry report on the incidence and mortality report of cancer burden in Varanasi district for the year 2018 and the Hospital-based Cancer Report of the HBCH for the year 2018 to the CCE for their technical guidance. The finalization of the report is in the process.</p>
                                        <p align="justify">In October 2021, a large community-based screening project for oral, breast and cervical cancer was undertaken under the MOU between ICS and MPMMCC, with a target to screen 20,000 men and women of the Cholapur (rural) block of Varanasi. The screened positives were promptly referred to MPMMCC for diagnostic confirmation and management. In a period of three and a half months, 4313 beneficiaries were screened and were given tobacco cessation counselling and cancer awareness through 63 camps. In the same month, an even more ambitious project for screening 2 lakh women for oral, breast and cervical cancer funded by the Dept. of Atomic Energy was launched in the Sewapuri (rural) block of the Varanasi district. Several women have been encouraged to undergo screening with very good participation. All beneficiaries were also given cancer awareness. Another ongoing ambitious oral cancer screening project funded by BIOCON with an aim to compare the efficacy of conventional screening with mHealth in the identification of oral potentially malignant disorders (OPMDs) and oral cancer with a target population of 10,000 participants is continuing and has screened over 3500 participants.</p>
                                        <p align="justify">While the majority of the developed countries have faced a major setback in their organized cancer screening programmes and cancer registry in several countries was drastically impacted due to the Covid-19 pandemic, these ongoing population-based projects and continued field-based activities in Cancer Registry are positive examples of exemplary efforts and dedication of the recruited staff, who made it possible despite such unprecedented times.</p>
                                        <p align="justify"><u><strong>Our Vision:</strong></u></p>
                                        <p align="justify">In the coming years, our goals are to develop a sustainable population-based cancer screening programme, start dedicated tobacco quitline services, develop cancer prevention strategies for Varanasi and to upgrade Varanasi Cancer Registry under the technical guidance from CCE, ACTREC, TMC.</p>

                                    </div>

                                    <div className="doctor-details-biography">
                                        <h5 align="left"><strong>Staff Members:</strong></h5>

                                        <table class="table table-hover table-bordered">
                                            <thead className="bg-color">
                                                <tr>
                                                    <th scope="col"><strong>Assistant Professor</strong></th>
                                                    <th scope="col">Dr. Divya Khanna </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td scope="col">Senior Resident</td>
                                                    <td scope="col">Dr. Abhishek Dandpat<br></br>
                                                        Dr. Saraswathy MV </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">ICS-Cholapur Screening Project</td>
                                                    <td scope="col">Dr Arti Divya, Gynaecologist<br></br>
                                                        Dr Sanjukta, Medical Officer<br></br>
                                                        Dr Ayushi, Dentist<br></br>
                                                        Mrs Manorama, Nurse<br></br>
                                                        Miss Sarita, Nurse
                                                        <br></br>
                                                        Mr Abhishek, Field Co-Ordinator<br></br>
                                                        Mr Nayan, Patient Navigator<br></br>
                                                        Mrs Kiran, Filed Investigator<br></br>
                                                        Mr Praveen, Filed Investigator<br></br>
                                                        Mr Kishan, Data Entry Operator
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">BIOCON Oral Cancer Screening Project</td>
                                                    <td scope="col">Dr Tulika, Medical Officer<br></br>
                                                        Dr Aqusa Khan, Medical Officer<br></br>
                                                        Mr Ambuj Pandey, Field Co-Ordinator </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">Hospital Based Cancer Registry</td>
                                                    <td scope="col">Dr Payal Singh, Research Co-Ordinator<br></br>
                                                        Mr Shahid Hussain Khan, Scientific Assistant
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col">Population Based Cancer Registry</td>
                                                    <td scope="col">Mr. Rajesh Kumar Vishwakarma, Field Supervisor<br></br>
                                                        Mr. Anand Narayan Sharma, Field Supervisor<br></br>
                                                        Mr. Amit Kumar Pandey, Field Investigator<br></br>
                                                        Mr. Abhishek Kumar Pandey, Field Investigator<br></br>
                                                        Mr. Vijay Kumar Maurya, Field Investigator<br></br>
                                                        Mr. Rahul Kumar Varma, Field Investigator<br></br>
                                                        Mr. Priyanshu Kumar, Field Investigator<br></br>
                                                        Mr. Shivam Tiwari, Field Investigator<br></br>
                                                        Fahad Mahmood, Field Investigator<br></br>
                                                        Aman Riguvanshi, Field Investigator<br></br>
                                                        Niraj Kumar Maurya, Field Investigator<br></br>
                                                        Swarn Prakash Singh, Field Investigator<br></br>
                                                        Priya Singh, Field Investigator<br></br>
                                                        Varsha Tripathi, Data Entry Operator<br></br>
                                                        Miss Neetu, Housing Staff<br></br>
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
    )
}

export default PreventiveOncology;