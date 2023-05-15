import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const ClinicalResearchSecretariat = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      {/* <PageBanner
        pageTitle="ClinicalResearchSecretariat"
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
                <img src="/images/departments/biochem.webp" alt="Doctor" />

                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call: +91-0542-2575032,35
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      biochemistry@mpmmcc.tmc.gov.in
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      RT Building 3rd Floor
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
                    <h3>CLINICAL RESEARCH SECRETARIAT</h3>
                    <p> Clinical Research Secretariat (CRS) of HBCH, Varanasi was
                      officially inaugurated by Dr. R.A. Badwe, Director, Tata
                      Memorial Centre on 01st October 2021. The CRS offers a wide
                      range of services from collection, maintenance, quality
                      control & analysis of data to design & execution of
                      prospective trials of importance to the institute and nation.
                    </p>
                    <p>
                      Currently, the CRS Department at MPMMCC/HBCH is staffed with
                      trained manpower and has a well-developed infrastructure to
                      run and support various clinical trials conducted by the
                      investigators in MPMMCC & HBCH.
                    </p>
                    <p>
                      CRS Department is actively engaged in the conduct of BIRAC CTN
                      Project which is related to establishing Clinical Trial
                      Network units across the National Cancer Grid to promote
                      multicentric collaborative research in the field of drug and
                      device development. In addition to this, CRS also supported
                      the multicentric project such as GRID Oncology: Remaking
                      Cancer Care in India” in collaboration with King’s College
                      London.
                    </p>
                    <p>
                      CRS has supported over 100 research studies which includes
                      retrospective, prospective studies from clinic and randomized
                      clinical trials. A large number of the studies have been
                      either presented or published in peer reviewed journals.
                    </p>
                    <strong>CRS Staff:: </strong>
                    <p>
                      Mr. Bhavesh P. Bandekar,
                      Scientific Officer (CRC)
                    </p>
                    <h5>Contact us:</h5>
                    <p>
                      Clinical Research Secretariat, 1st Floor, DNT Block,<br></br>
                      Mahamana Pandit Madan Mohan Malaviya Cancer Centre<br></br>
                      Varanasi- 221005 (Uttar Pradesh).<br></br>
                      Phone No.: 0542-2517699 Extn: 1161 / 1162
                    </p>
                    <br />
                    <p>
                      LIST OF ONGOING PROJECTS AT HBCH/MPMMCC, VARANASI   <strong><br /><a className="outline-none bg-transparent text-primary" href="https://tmc.gov.in/tmh/PDF/varanasi/List%20of%20Ongoing%20Projects.pdf" target="_blank">Plese Click here to know more...</a></strong>
                    </p>

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

export default ClinicalResearchSecretariat;

