import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const Academics = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      {/* <PageBanner
        pageTitle="Academics"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImage="page-banner-mpmmcc"
      /> */}

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/Academic_Dept.jpg" alt="Doctor" />

                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call: +91-0542-2517699,Ext-1504
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      academics@hbchk.tmc.gov.in
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      DNT Building 5th Floor
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
                  <div className="about-item about-right">
                    <img src="/images/about-shape1.png" alt="About" />
                    <h3>EDUCATION</h3>
                    <p>
                      The mission of Tata Memorial Centre is to provide comprehensive cancer care to one and has the motto to achieve excellence in Service, Research, and Education. It has been observed that there is an acute shortage of trained Oncology manpower in the country. To partly overcome this problem and to fulfill the mandate of Education, Academics Section was formally started in HBCH, Varanasi from June, 2020.

                      HBCH, Varanasi is responsible for registering and running academic programmes (Medical, Paramedical and Nursing) and both MPMMCC and HBCH, Varanasi are responsible for running the cancer care services and also running the various academic programs. Both MPMMCC and HBCH are working as complementary units under the administrative control of the Director, HBCH & MPMMCC, Varanasi.
                    </p>
                    <strong>Medical Courses: </strong>
                    <p>
                      HBCH, Varanasi is a stand-alone post-graduate teaching Institute recognized by the Government of India. HBCH, Varanasi has received permission from National Medical Commission to start MD (Radiation Oncology) and M.Ch. (Surgical Oncology) from the Academic Session 2021-22. Institute looks forward to starting other Medical Courses in the field of Oncology.
                    </p>
                    <strong>Paramedical Courses: </strong>
                    <p>
                      HBCH, Varanasi runs unique Short-Term Training Courses in Pathology, Biochemistry, Hematopathology, Microbiology, Transfusion Medicine, Dental & Prosthetics Surgery, Physiotherapy, Advanced CT/MRI and OT/ICU technology. Students receive stipend during these short-term training courses. Short Term Training Courses start in the months of January and July each year. In addition, Internship Programs are available in our Institute in Radiological Physics, Medical Social Work and Hospital Administration.
                    </p>
                    <strong>Nursing Courses: </strong>
                    <p>
                      HBCH, Varanasi has received permission from the Indian Nursing Council to start Post Basic Diploma in Oncology Nursing (PBDON) from January 2022 Session. The Institute has also started Fellowship program in Paediatric Oncology Nursing and Palliative and Hospice Nursing Care. In addition, HBCH, Varanasi runs unique short-term courses on Central Venous Access Devices and Stoma Care in the month of March every year.
                    </p>


                  </div>

                  <div className="doctor-details-biography">
                    <h3>ACCOMMODATION:</h3>
                    <p>
                      Separate Gents and Ladies hostel facilities are available.
                    </p>
                    <h3>RESEARCH:</h3>
                    <p>
                      Our hospitals have an established Institutional Ethics Committee. For more details, please visit the IEC and Research Page available on the website.
                    </p>
                    <h3>DEPARTMENTAL INFORMATION FOR ACADEMIC COURSES OF HOMI BHABHA CANCER HOSPITAL, VARANASI</h3>
                    <p>
                      Separate Gents and Ladies hostel facilities are available.
                    </p>
                    <h3>DEPARTMENTAL INFORMATION FOR ACADEMIC COURSES OF HOMI BHABHA CANCER HOSPITAL, VARANASI</h3>
                    <p>
                      Separate Gents and Ladies hostel facilities are available.
                    </p>
                    <h3>DEPARTMENTAL INFORMATION FOR ACADEMIC COURSES OF HOMI BHABHA CANCER HOSPITAL, VARANASI</h3>
                    <p>
                      Homi Bhabha Cancer Hospital, Varanasi has been permitted by National Medical Commission for starting following courses from the Academic Session 2021-22:
                    </p>
                    <ol>
                      <li>M.D. (Radiation Oncology): 04 Seats</li>
                      <li>M.Ch. (Surgical Oncology): 02 Seats</li>
                    </ol>
                    <h3>DEPARTMENT OF RADIATION ONCOLOGY</h3>
                    <p>
                      The Department of Radiation Oncology initially started with a Theratron 780c Cobalt Teletherapy machine which was inherited from the erstwhile Railway Cancer Hospital, in August 2018. The following has been the timeline of growth of the Department of Radiation Oncology:
                    </p>
                    <ol>
                      <li>The first TrueBeam LINAC (1st TrueBeam in Eastern UP & Bihar) was commissioned on 6th August 2018 at HBCH with 1st patient being treated on 28th August 2018. With this installation all the latest technology and radiotherapy treatment modalities like 3DCRT, IMRT, Rapid Arc, SRT with Image Guidance were available at HBCH, Varanasi.</li>
                      <li>The other 2 new TrueBeam LINACs were commissioned in MPMMCC on 24th October 2019 and 11th November 2019 and the 1st patients were treated on the machines on 27th November 2019 and 1st January 2020, respectively.</li>
                      <li>The Department also has a dedicated CT simulator at MPMMCC which was commissioned on 18th December 2019.</li>
                      <li>The new Bhabhatron Telecobalt Unit under the “Make in India” Program was used for first used for clinical treatment on 28th August 2020.</li>
                    </ol>
                    <table class="table table-hover table-bordered">
                      <thead >
                        <tr>
                          <th scope="col">
                            DEPARTMENT OF RADIATION ONCOLOGY PERFORMANCE STATISTICS
                            (2018-2021)
                          </th>
                        </tr>
                      </thead>
                      <tr>
                        <th scope="row"></th>
                        <th scope="row">2018 (No. of patients)</th>
                        <th scope="row">2019 (No. of patients)</th>
                        <th scope="row">2020 (No. of patients)</th>
                        <th scope="row">2021 (No. of patients)</th>
                      </tr>
                      <tbody>
                        <tr>
                          <th scope="row">No. of New Patients Receiving Radiotherapy </th>
                          <td>532</td>
                          <td>1153</td>
                          <td>2090</td>
                          <td>3050</td>
                        </tr>
                        <tr>
                          <th colspan="5" scope="row">No. of Patients visiting Radiation Oncology OPD</th>
                        </tr>
                        <tr>
                          <th scope="row">HBCH</th>
                          <td>2207</td>
                          <td>13727</td>
                          <td>5094</td>
                          <td>3786</td>
                        </tr>
                        <tr>
                          <th scope="row">MPMMCC</th>
                          <td>not started</td>
                          <td>3482</td>
                          <td>5730</td>
                          <td>13439</td>
                        </tr>
                        <tr>
                          <th scope="row">Total No. of Patients </th>
                          <th>2207</th>
                          <th>17209</th>
                          <th>10824</th>
                          <th>17225</th>
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

export default Academics;
