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
      <TopHeader />

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
                    <thead>
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
          <div className="row">
            <h2 className="text-center mb-4 border-bottom">MAJOR EQUIPMENTS</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-4">DEPARTMENT OF RADIATION ONCOLOGY</h3>
              <table class="table table-hover table-bordered mb-5">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      Linear Accelerator (Linac)- Total 3- High End Varian
                      Truebeam (MPMMCC-2, HBCH-1) capable of delivering 3DCRT,
                      IMRT, IGRT, SBRT, SRT.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Bhabhatron (MPMMCC-1)- Rotational Telecobalt</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">
                      High Dose Rate Brachytherapy- Cobalt based
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">CT Simulator (80 cm bore)</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td colspan="2">
                      An array of Radiation Dosimetry and QA equipment
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 className="mb-4">DEPARTMENT OF ANAESTHESIOLOGY</h3>
              <table class="table table-hover table-bordered mb-5">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <strong>Anesthesia Work Stations:</strong>
                      <br></br>- Anesthesia Workstations: 10 nos.
                      <br></br>- MRI compatible Anesthesia Workstations: 02 nos.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <strong>Multi-Channel Monitor (With 2 probes):</strong>
                      <br></br>- Multiparameter Anesthesia Monitors with
                      Anesthesia Gas Module: 10 nos.
                      <br></br>- MRI compatible Multiparameter Anesthesia
                      Monitors: 02 nos
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <strong>Fiberoptic Laryngoscope: 12 Nos.</strong>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>
                      <strong>
                        Fiberoptic Bronchoscope: 05 nos. (video bronchoscope)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>
                      <strong>Resuscitation equipment (for teaching):</strong>
                      <br></br>- 1 set Bag-Valve-Mask
                      <br></br>- Supraglottic Airway Devices (i-gel, LMA
                      supreme)
                      <br></br>- Laryngoscope
                      <br></br>- Endotracheal Tube
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>
                      <strong>Other equipment :</strong>
                      <br></br>- Cardiac Monitor for ICU: 18 nos.
                      <br></br>- Multiparameter Monitor for OT Recovery Room: 12
                      nos.
                      <br></br>- Biphasic Cardiac Defibrillator with manual and
                      AED Modes: 02 nos.
                      <br></br>- Biphasic Cardiac Defibrillator with manual and
                      AED Modes and Transcutaneous Cardiac Pacing: 01 nos.
                      <br></br>- Continuous Cardiac Output Monitor (Edwards
                      EV1000): 01 nos.
                      <br></br>- Forced Air Warmer (Patient Warmer): 10 nos.
                      <br></br>- Fluid Warmer: 10 nos.
                      <br></br>- ICU Ventilator: 12 nos.
                      <br></br>- Portable USG Machine for point of care USG
                      guided procedures in OT & ICU: 04 nos.
                      <br></br>- Hemodialysis Machine (for bedside dialysis in
                      ICU): 01 nos.
                      <br></br>- ABG Machine: 02 nos.
                      <br></br>- Syringe Infusion Pump: 50 nos.
                      <br></br>- Volumetric Infusion Pump: 40 nos.
                      <br></br>- 2nd generation supraglottic airway devices: 12
                      sets.
                      <br></br>- Portable Electric Suction Machine: 12 nos.
                      <br></br>- Target Controlled Infusion Pump: 02 nos.
                      <br></br>- Manual jet ventilators: 04 nos.
                      <br></br>- Portable Multiprogrammable PCA (Patient
                      Controlled Analgesia Pumps): 36 nos
                      <br></br>- 12 channel ECG Machine with recorder: 02 nos.
                      <br></br>- HFNC Machine: 04 nos.
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 className="mb-4">
                DEPARTMENT OF RADIODIAGNOSIS & DEPARTMENT OF NUCLEAR MEDICINE
              </h3>
              <table class="table table-hover table-bordered mb-5">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <strong>SPECT (MPMMCC-1)</strong>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <strong>PET/CT Scanner (MPMMCC-1, HBCH-1)</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 className="mb-4">DEPARTMENT OF RADIODIAGNOSIS</h3>
              <table class="table table-hover table-bordered mb-5">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <strong>CT Dual Energy Scanner (MPMMCC-1, HBCH-1)</strong>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <strong>MRI 3 Tesla (MPMMCC-1, HBCH-1)</strong>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <strong>1000mAh Stationary DR System (2)</strong>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>
                      <strong>Portable Digital Radiograph (2)</strong>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>
                      <strong>
                        Fully Field Digital Mammography System (MPMMCC-1,
                        HBCH-1)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>
                      <strong>
                        Ultrasound High end colour Doppler (MPMMCC-4, HBCH-3)
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 className="mb-4">DEPARTMENT OF ONCO-PATHOLOGY</h3>
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan="2" scope="row">
                      Histopathology & Cytopathology (MPMMCC):
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Biosafety Cabinet: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Grossing Station: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Bone Saw: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Bone Decalcifier: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Automated Tissue Processor: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Tissue Embedding Unit: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Hot Air Oven: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Microtome: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Cooling Plate: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Tissue Flotation Bath: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Slide Warming Table: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Autostainer: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>Cover Slipper: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td colspan="2">Cryostat: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td colspan="2">Automated Immunostainer (IHC): 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td colspan="2">Microwave: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td>Lab centrifuge: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">18</th>
                    <td>Cytospin: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">19</th>
                    <td>Refrigerator: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td colspan="2">Microscope (Tri-header): 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">21</th>
                    <td colspan="2">Microscope (Tri-header): 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">22</th>
                    <td colspan="2">Microscope (Binocular): 9 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">23</th>
                    <td>Microscope (Binocular with polarizer): 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">24</th>
                    <td>LED Projector & Microscope for Teaching: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">25</th>
                    <td>Eye Wash Station: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th colSpan="2" scope="row">
                      Molecular Pathology (MPMMCC):
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Biosafety Cabinet: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Deep Freezer (-80°C): 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Deep Freezer (-20°C): 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Real-Time PCR Machine: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Shaking Water Bath: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Horizontal Gel Electrophoresis Unit: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Vertical Gel Electrophoresis unit: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Non Refrigerated Centrifuge: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Refrigerated Centrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Vortex Mixture: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Magnetic Stirrer cum Hot Plate: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Incubator: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>Dry Bath: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th colSpan="2" scope="row">
                      Hematopathology (HBCH):
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Automated CBC Analyser: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Automatic Coagulation Analyser: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Non-Refrigerated Centrifuge: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Water Bath: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Hot Air Oven: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Cytocentrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Deep Freezer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Water Purification System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Binocular Microscope: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">
                      Pentahead Microscope (For Teaching): 1 No.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Refrigerator: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th colSpan="2" scope="row">
                      Hematopathology (Flow Cytometry-HBCH):
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Flow Cytometer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">CBC Analyser (3 Part): 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Refrigerated Centrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Biosafety Cabinet: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Vortex Mixer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Mini Centrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th colSpan="2" scope="row">
                      Hematopathology (MPMMCC):
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>CBC Analyser: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Automatic Coagulometer: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Water Bath: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Centrifuge: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Cytocentrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Incubator: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Hot Air Oven: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Binocular Microscope: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Refrigerators: 4 Nos.</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="mb-4">DEPARTMENT OF BIOCHEMISTRY</h3>
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan="2" scope="row">
                      MPMMCC :
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Automated Immunoassay Analyser: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Automated Biochemistry Analyser: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">HPLC Analyser: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Osmometer: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Spectrophotometer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Centrifuge: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Refrigerator: 5 Nos.</td>
                  </tr>

                  <tr>
                    <th colSpan="2" scope="row">
                      HBCH:
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Automated Immunoassay Analyser: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Automated Biochemistry Analyser: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Osmometer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Spectrophotometer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Centrifuge: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Refrigerator: 3 Nos.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-md-6">
              <h3 className="mb-4">DEPARTMENT OF SURGICAL ONCOLOGY</h3>
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Laparoscopic Surgery Set: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Headlight: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Laryngoscope with all blades: 15 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">High end suction machine: 16 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Infusion pump:40 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Endoscope: 7 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Hopkins: 10 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Vessel sealing instrument: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Colposcope: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Hysteroscope with set: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Operating Microscopes: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Gamma Probe:1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>CO2 Laser: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td colspan="2">C-Arm Machine: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td colspan="2">Pulse Lavage System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td colspan="2">Stryker Saw System: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td>Midaz RX 8 Drill System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">18</th>
                    <td>NSK Drill System: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">19</th>
                    <td>Endotrainer: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td colspan="2">Sternum Saw: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">21</th>
                    <td colspan="2">Video- Mediastinoscope with set: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">22</th>
                    <td colspan="2">Microdebrider: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">23</th>
                    <td>
                      Cavitron Ultrasonic Surgical Aspirator (CUSA): 2 Nos.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">24</th>
                    <td>Synthesis Saw System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">25</th>
                    <td>Pneumatic Saw System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">26</th>
                    <td>Video-Laryngoscope (CMAC): 2 Nos</td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>USG Machine: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">28</th>
                    <td>Portable Doppler: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">29</th>
                    <td>Operating Loupes: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">30</th>
                    <td>Tourniquet Machine: 5 Nos.</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="mb-4">DEPARTMENT OF MICROBIOLOGY</h3>
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan="2" scope="row">
                      Clinical Bacteriology & Serology:
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Autoclave: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Laminar Air Flow: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Biosafety Cabinet: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Bacteriological Incubator: 2 Nos..</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Automated Blood Culture System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Hi Electric Loop Sterilizer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Drying Oven: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Centrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Cyclo Mixer: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Binocular Microscopes: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Refrigerator: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Deep Freezer (-80℃): 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>CO2 Incubator: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td colspan="2">Glassware Washer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td colspan="2">Densitometer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td colspan="2">Automated Serology Analyser: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td>Centrifuge: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th colSpan="2" scope="row">
                      Molecular Microbiology
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>RT-PCR Machine: 2 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">True Nat PCR Machine: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">True Nat Extractor Machine: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Biosafety Cabinet: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Laminar Air Flow: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Refrigerator: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Cyclo Mixer: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Quick Centrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Refrigerated Centrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Deep Freezer (-20°C): 1 No</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Heating Block/ Dry Bath: 1 No</td>
                  </tr>
                  <tr>
                    <th colSpan="2" scope="row">
                      Mycology & Mycobacteriology :
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>BOD Incubator: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Incubator: 1 No</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Water Bath: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Centrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Shaker: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>ELISA Washer & Reader: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Biosafety Cabinet: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Fluorescent Microscope: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Binocular Microscope: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Refrigerator: 2 Nos</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Spectrophotometer: 1 No.</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="mb-4">DEPARTMENT OF TRANSFUSION MEDICINE</h3>
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan="2" scope="row">
                      MPMMCC:
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Blood Donor Couches: 8 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Automated Cell Washer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Automated ELISA Processor: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Automated Heamoglobinometer: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Blood Collection Monitor: 12 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Cell Counter 3 Part: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Central Monitoring System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Centrifuges: 5 in Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Cryoprecipitate Bath: 1 No</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Deep Freezer -20°C: 1 No</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Deep Freezer -40°C: 2 Nos</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Deep Freezer -80°C: 2 Nos</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>ELISA Reader/Washer: 2 Nos</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td colspan="2">Hand Sealer: 1 No</td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td colspan="2">Incubator: 4 Nos</td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td colspan="2">Laminar Airflow: 1 No</td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td>Plasma Expresser: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">18</th>
                    <td>Plasma Thawing Bath: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">19</th>
                    <td>Platelet Incubator with Agitator: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td colspan="2">Refrigerator: 7 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">21</th>
                    <td colspan="2">Semi-Automated Coagulometer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">22</th>
                    <td colspan="2">Sterile Connecting Device: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">23</th>
                    <td>Autoclave: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">24</th>
                    <td>Tube Sealer with Multiple Heads: 6 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">25</th>
                    <td>Shaker: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th colSpan="2" scope="row">
                      HBCH:
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Blood Donor Couches: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Automated Cell Separator: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Blood Collection Monitor: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Tube Sealer: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Automated Heamoglobinometer: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Refrigerator 2-6 °C: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Plasma Thawing Bath: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">
                      Platelet Agitator with Incubator: 2 Nos.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Deep Freezer -80°C: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Deep Freezer -40°C: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Deep Freezer -20°C: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Refrigerated Centrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>Automated Component Separator: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td colspan="2">Plasma Expresser: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td colspan="2">Sterile Connecting Device: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td colspan="2">Laminar Air Flow: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td>Binocular Microscopes: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">18</th>
                    <td>ELISA Reader and Washer: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">19</th>
                    <td>Autoclave: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td colspan="2">Incubator/Dry Bath: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">21</th>
                    <td colspan="2">Centrifuge: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">22</th>
                    <td colspan="2">Orbital Shaker: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">23</th>
                    <td>Cryoprecipitate Bath: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">24</th>
                    <td>Cell Washer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">25</th>
                    <td>Hand Sealer : 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">26</th>
                    <td>Central Monitoring System: 1 NO.</td>
                  </tr>
                  <tr>
                    <th colSpan="2" scope="row">
                      HBCH (HLA Laboratory) :
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Autoclave Vertical: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Thermal Cycler 96 well: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Laminar Flow Cabinet: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Cyclo Mixture/Vortex Mixture: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Deep Freezer -30°C: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Deep Freezer -80°C: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Gel Documentation System and thermal printer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Hot air oven: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Incubator: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Microcentrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Nanospectrophotometer: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Refrigerated centrifuge: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>Submarine Gel Electrophoresis: 1 No.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HBCHVaranasi;
