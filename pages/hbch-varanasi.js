import React from "react";
import Link from "next/link";
import HBCHSlider from '../components/HomeOne/HBCHSlider';
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const HBCHVaranasi = () => {
  return (
    <>
      {/* <TopHeader /> */}

      <Navbar />
      <HBCHSlider />
      {/* <PageBanner
        pageTitle="Homi Bhabha Cancer Hospital"
        pageSubtitle="Tata Memorial Centre"
        homePageUrl="/"
        homePageText="Home"
        activePageText=" HBCH"
        bgImage="page-banner-tmc"
      /> */}

      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/HBCH.webp" alt="Doctor" />

                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call: 0542 251 7699
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      ams@mpmmcc.tmc.gov.in
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      Old Loco Colony, Shivpurwa, Varanasi, Uttar Pradesh 221010
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
              <div className="doctor-details-work">
                <h3>Services</h3>
                <div class="list-group mb-3">
                  <a href="/hbch/clinical-services" class="list-group-item list-group-item-action">Clinical Services</a>
                  <a href="/hbch/diagnostic-services" class="list-group-item list-group-item-action">Diagnostic Services</a>
                  <a href="/hbch/ancillary-services" class="list-group-item list-group-item-action">Ancillary Services</a>
                </div>
              </div>


            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>The Hospitals</h2>
                <p>
                  HBCH was commissioned on 1st May 2018 as a 179-bedded hospital
                  while the 352-bedded MPMMCC was commissioned on 19th February,
                  2019. Both HBCH and MPMMCC were formally inaugurated by
                  Hon’ble Prime Minister, Shri Narendra Modi Ji on 19th February
                  2019. The distance between HBCH, Varanasi and MPMMCC, Varanasi
                  is about 8 kilometers with driving time of 20 minutes. There
                  is very good road connectivity between the two hospitals. Both
                  HBCH and MPMMCC are working as complementary units under the
                  administrative control of Director, HBCH & MPMMCC.
                </p>
                <p>
                  Our hospitals cater to the "cancer belt of India”, a
                  population of nearly 40 crore people living in the States of
                  Uttar Pradesh, Uttarakhand, Bihar, Jharkhand, Madhya Pradesh,
                  Chhattisgarh, etc. The area not only has the highest burden of
                  cancer cases but also is plagued with acute shortage of
                  trained manpower to deal with management of cancer. The
                  situation is going to worsen in the next couple of decades due
                  to rapid urbanization in these areas. Through our twin
                  hospitals, we are bringing comprehensive and very high-quality
                  cancer care at affordable costs to the doorsteps of patients
                  of Varanasi (Uttar Pradesh), its neighboring districts and
                  adjoining States.
                </p>
                <div className="row">
                  <p>
                    HBCH, Varanasi is situated at Lahartara, near to Varanasi
                    Cantonment Railway Station. It is a three storey building
                    with distribution of various facilities as under:
                  </p>
                </div>
                <div className="row">
                  <table class="table table-bordered table-hover">
                    <thead className="bg-color">
                      <tr>
                        <th scope="col">Floor</th>
                        <th scope="col">Facilities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Ground Floor</th>
                        <td>
                          Central Registration Office, Medical Social Service,
                          Out Patient Department, Radiation Oncology,
                          Radiodiagnosis, Nuclear Medicine, Pharmacy Dispensary,
                          Emergency, Daycare Wards, Isolation Ward.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">First Floor</th>
                        <td>
                          Operation Theatres, Intensive Care Unit, Bone Marrow
                          Transplant Unit, Hematolymphoid Ward, In-patient
                          Wards, CSSD.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Second Floor</th>
                        <td>
                          Diagnostic Laboratories, Transfusion Medicine Centre,
                          Administrative Offices, Inpatient wards, Patient
                          Waiting Areas.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Annexe Areas</th>
                        <td>
                          Patient Waiting Canopy, Raeen Basera (Patient
                          Accommodation), Mortuary, Biomedical Waste Disposal
                          Area, Hazardous Chemical Storage Area, Playground.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col about-item">
            <h2>Hospital Services</h2>
            <p>
              HBCH, Varanasi mainly caters to Paediatric Medical Oncology as
              well as Paediatric and Adult Haematolymphoid malignancy. In
              MPMMCC, solid tumour patients of various specialties i.e., Head
              & Neck, Thorax, Breast, Gastrointestinal, Gynaecology,
              Genitourinary, Neurosurgical, Bone & Soft Tissue Tumors, etc.
              are being treated. Diagnostic Imaging services, that include
              Radiodiagnosis and Nuclear Medicine, have state of the art
              diagnostic equipment and are fully functional at both the
              hospitals.
            </p>
            <p>
              Laboratory Medicine Services are fully functional and equipped
              with the latest technologies for specialized tests. In
              Laboratory Medicine, besides all routine diagnostic tests,
              Pathology laboratory performs immunohistochemistry and molecular
              diagnostic tests, Hematopathology laboratory performs flow
              cytometry and coagulation studies, Biochemistry laboratory
              performs immunoassays for tumor markers and therapeutic drug
              monitoring, while Microbiology department has focused activities
              towards Infection Control, COVID testing and proper management
              of Biomedical Waste in our hospitals. Transfusion Medicine
              Centers at both the hospitals are approved by the State and the
              Central Blood Bank Licensing Authorities and well equipped with
              the latest high end equipment. At HBCH, we have started Bone
              Marrow Transplant facility with a strong laboratory support that
              includes Hematopathology, Cytogenetics and HLA testing.
            </p>
            <p>
              In addition, we are running a Population Based Cancer Registry
              in the district of Varanasi covering a population of 4 million
              and also various screening programs for common cancers, e.g.,
              Head and Neck Cancer, Cervical Cancer, Breast Cancer and
              Gallbladder Cancer.
            </p>

          </div>

          <Link href="/hbch-varanasi-details">
            <a className="btn btn-primary">Know More</a>
          </Link>

        </div>
      </div>

      <Footer />

    </>
  );
};

export default HBCHVaranasi;
