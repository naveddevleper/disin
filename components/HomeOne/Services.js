import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="services-area pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Our Hospital Services</h2>
        </div>

        <div className="row gy-4">
          {/* <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-doctor"></i>
                <h3>Expert Doctor</h3>
              </div>

              <div className="service-end">
                <i className="icofont-doctor"></i>
                <h3>Expert Doctor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-prescription"></i>
                <h3>Diagnosis</h3>
              </div>

              <div className="service-end">
                <i className="icofont-prescription"></i>
                <h3>Diagnosis</h3>
                <p>
                  The process of determining the nature of a disease or disorder
                  and distinguishing it from other possible conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-patient-file"></i>
                <h3>Pathology</h3>
              </div>

              <div className="service-end">
                <i className="icofont-patient-file"></i>
                <h3>Pathology</h3>
                <p>
                  Study and diagnosis of disease through the examination of
                  surgically removed organs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-tooth"></i>
                <h3>Dental & Prosthetic Services</h3>
              </div>

              <div className="service-end">
                <i className="icofont-tooth"></i>
                <h3>Dental & Prosthetic Services</h3>
                <p>
                  A dental prosthesis is a dental appliance that replaces a
                  missing tooth or covers up tooth defects.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-heart-beat-alt"></i>
                <h3>Day Care</h3>
              </div>

              <div className="service-end">
                <i className="icofont-heart-beat-alt"></i>
                <h3>Day Care</h3>
                <p>
                  Day-care treatment refers to the medical procedures that
                  require hospitalization of less than 24-hours.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-laboratory"></i>
                <h3>Biochemistry</h3>
              </div>

              <div className="service-end">
                <i className="icofont-laboratory"></i>
                <h3>Biochemistry</h3>
                <p>
                  The study of biological processes at the cellular and
                  molecular level.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-ambulance-cross"></i>
                <h3>Emergency</h3>
              </div>

              <div className="service-end">
                <i className="icofont-ambulance-cross"></i>
                <h3>Emergency</h3>
                <p>
                  A part of a hospital that provides 24-hour emergency care to
                  patients who need urgent medical attention.
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-doctor-alt"></i>
                <h3>Histopathology</h3>
              </div>

              <div className="service-end">
                <i className="icofont-doctor-alt"></i>
                <h3>Histopathology</h3>
                <p>
                  Histopathology is the diagnosis and study of diseases of the
                  tissues, and involves examining tissues and/or cells under a
                  microscope.
                </p>
              </div>
            </div>
          </div> */}
          {/* 
          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-molecule"></i>
                <h3>Molecular Pathology</h3>
              </div>

              <div className="service-end">
                <i className="icofont-molecule"></i>
                <h3>Molecular Pathology</h3>
                <p>
                  Molecular pathology which is focused in the study of disease
                  at the molecular level
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                <i className="icofont-prescription"></i>
                <h3>Cytopathology</h3>
              </div>

              <div className="service-end">
                <i className="icofont-prescription"></i>
                <h3>Cytopathology</h3>
                <p>
                  Involves examining cells from bodily tissues or fluids to
                  determine a diagnosis
                </p>
              </div>
            </div>
          </div> */}

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                {/* <i className="icofont-patient-file"></i> */}
                <i class="icofont-medical-sign"></i>
                <h3>Clinical Services</h3>
              </div>

              <div className="service-end">
                {/* <i className="icofont-patient-file"></i> */}
                <i class="icofont-medical-sign"></i>
                <h3>Clinical Services</h3>
                <a href="/hbch/clinical-services">Know More</a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                {/* <i className="icofont-blood-drop"></i> */}
                <i className="icofont-patient-file"></i>
                <h3>Diagnostic Services</h3>
              </div>

              <div className="service-end">
                {/* <i className="icofont-blood-drop"></i> */}
                <i className="icofont-patient-file"></i>
                <h3>Diagnostic Services</h3>
                <a href="/hbch/diagnostic-services">Know More</a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                {/* <i className="icofont-xray"></i> */}
                <i class="icofont-surgeon"></i>
                <h3>Ancillary Services</h3>
              </div>

              <div className="service-end">
                {/* <i className="icofont-xray"></i> */}
                <i class="icofont-surgeon"></i>
                <h3>Ancillary Services</h3>
                <a href="/hbch/ancillary-services">Know More</a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item h-100">
              <div className="service-front">
                {/* <i className="icofont-dna-alt-1"></i> */}
                <i class="icofont-live-support"></i>
                <h3>Administrative Service</h3>
              </div>

              <div className="service-end">
                {/* <i className="icofont-dna-alt-1"></i> */}
                <i class="icofont-live-support"></i>
                <h3>Administrative Service</h3>
                <a href="/">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
