import React from 'react';
import TopHeader from '../../components/_App/TopHeader';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';

const PediatricOncology = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Pediatric Oncology"
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
                                <img src="/images/departments/pediatric.webp" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: 0542 251 7699
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            -
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            Ground Floor OPD - 7,8,9
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
                                        <h3>DEPARTMENT OF PEDIATRIC ONCOLOGY</h3>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h4 align="center"><strong><u>Center for Childhood Cancer </u></strong></h4>
                                        <p align="justify">The Center in Varanasi was set up in 2018, and is linked to the Tata Memorial Hospital Mumbai, which treats the largest number of children with cancer in India and is constantly striving to improve outcomes institutionally and through the National Cancer Grid https://tmc.gov.in/ncg/ .As an affiliate of TMH, our physicians have access to the latest advances in pediatric cancer research and participate in associated clinical trials. The Childhood Cancer Program provides our children and families with the cancer care for which they would otherwise need to travel to Mumbai. The Homi Bhabha Cancer Hospital has 22 Pediatric Beds, an attached ICU, a newly opened Bone Marrow Transplant Unit, and state-of-the-art radiology, pathology and laboratory testing. On any given day, there are an average of twenty children receiving inpatient care at HBCH and a busy outpatient unit with dozens of children each day receiving chemotherapy and other procedures; in 2021 there were almost 20,000 outpatient visits.</p>
                                        <p align="justify">Medical care is provided by a dedicated staff of Physicians, Residents, and highly trained chemotherapy and procedure Nurses and Volunteers and Support Staff led by an experienced Pediatric Oncologist. We have a dedicated pediatric surgeon, pediatric neurosurgeon and oncology orthopedic surgeon. The support of all of HBCH diagnostic and treatment subspecialists is available. Patients and families are supported by a pediatric Social Worker, dedicated Dieticians, an Infection Control Nurse, a Psychosocial Counselor, and a Child Life specialist. In 2021, out of 527 new patients registered, we treated over 400 childhood cancer patients, and diagnosed and referred out over another 60 patients with a variety of blood disorders or benign tumors. Almost 100 patients transferred in from TMH Mumbai to receive care closer to home.</p>
                                        <p align="justify">The Center is fortunate to receive significant assistance from a variety of Government and Non-Government Organizations (NGOs), which allows us to provide direct financial assistance of several Crores of rupees each year to children and families. Apart from Governmental funding through MOHFW and Ayushman Bharat, the ImPACCT Foundation also provides funding for newly diagnosed patients, and ensures that a significant portion of donations come to Varanasi so that most families do not have to worry about the financial burden of treating their child. In addition, various agencies such as the Indian Cancer Society and Jiv Daya Foundation Fund an array of supportive staff, including a Data Manager, Medical Social Worker, Infection Control Nurse and Counselor. TheKevat Patient Navigation Program provides invaluable help in guiding families around multiple testing areas and clinics. St Jude Foundation provides accommodation at no charge for families who travel from a distance for treatment. Supplies are also provided: in 2021 ImPACCT supplied 270 PICC lines (used to administer chemotherapy so the child does not have to be poked with an IV every time). The Round Table Chapter of Varanasi equipped a play therapy area with toys.</p>
                                        <p align="justify"><strong>Where do our patients travel from?</strong></p>
                                        <p align="justify">Almost two-third of children come from Varanasi and neighboring towns and live within a 4-hour travel distance, and one-third of patients live 4-8 hrs away from the Center. The Center is uniquely situated to serve not just Eastern Uttar Pradesh, but also parts of Bihar, Jharkhand, Chhattisgarh and Madhya Pradesh. A portion of patients (&lt;10%) come from as far away as Bareilly in UP, Eastern Bihar or Jharkhand and the States of West Bengal and Punjab.</p>
                                        <p align="justify"><strong>What types of childhood cancer do we treat?</strong></p>
                                        <p align="justify">Children came to HBCH with the entire range of cancers from straightforward acute leukemias to complex solid tumors including bone tumors and brain tumors. In 2021, over 520 children were registered at the Center and 435 were diagnosed with cancer: a simplified chart of the types of cancer is seen below. Approximately 10% of patients who came to HBCH were found to have a non-cancerous blood disorder or a benign tumor. Approximately 4% of patients left without confirming the type of cancer.</p>
                                        <p align="justify">This chart appears complex because of the variety of cancers that occur in children. All parts shaded in red represent leukemias (blood cancers), those shaded in purple lymphomas (lymph gland cancers), those shaded in yellow/orange bone cancers, those in blue different kinds of solid tumors (cancers) affecting various organs of the body, and the one in grey brain cancers. </p>
                                        <p align="justify"><strong>What is the likelihood of cure?</strong></p>
                                        <p align="justify">This varies depending on the type of cancer. Over half of all children with cancer will be cured, and some cancers such as Hodgkin Lymphoma are highly curable with long term survival of over 80% (see below). The Center has only been in operation for 3 years, so we have not followed our patients long enough to know their final cure rate; outcomes so far are similar to TMH Mumbai.</p>
                                        <p align="justify"><strong>How many children do we serve?</strong></p>
                                        <p align="justify">From 2018, when the Center was first established, the number of children being seen each year has gone up three-fold, and in 2021 we saw 520+ new patients. This figure does not include those patients from TMH Mumbai who either chose to transfer here to receive care closer to home, or who were off treatment but developed a new problem which needed to be assessed.</p>
                                        <p align="justify"><u><strong>Our Faculty:</strong></u>&emsp;Dr Vikramjit S Kanwar MBBS, MBA, MRCP(UK), FIAP is Senior Consultant and oversees the Centre for Childhood Cancer, HBCH, Varanasi since 2020, and is supported by a team of experienced practitioners and staff.</p>
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

export default PediatricOncology;