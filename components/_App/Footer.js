import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-contact">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a>
                        For Patient Care &amp; Related Queries
                      </a>
                      <a href="mailto:ms@mpmmcc.tmc.gov.in">ms@mpmmcc.tmc.gov.in</a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+91-0542-2575032">
                        Call: +91-0542-2575032,35
                      </a>
                      <a href="tel:+91-0542-2517699">Call: +91-0542-2517699 </a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      Mahamana Pandit Madan Mohan Malaviya Cancer Centre, Sundar
                      Bagiya, Near Nariya Gate, Banaras Hindu University Campus,
                      Varanasi (U.P.) - 221005 India
                    </li>

                  </ul>

                  <ul className="social_list">
                    <li className="social_icon">

                      <a href="https://www.facebook.com/profile.php?id=100057011783740" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li className="social_icon">

                      <a href="https://twitter.com/TMC_Varanasi" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li className="social_icon">

                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>



                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Patients Services</h3>
                  <ul>
                    <li>
                      <Link href="https://online.mpmmcc.tmc.gov.in/OnlineAppt/">
                        <a>Appointment</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://tmc.gov.in/m_webemr_Varanasi/emr/Login">
                        <a>
                          E-Medical Records (EMR)</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/donation">
                        <a>How To Help Us</a>
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/contact">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>Gallery</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/nodalofficer">
                        <a>Nodal Officer</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/PRO">
                        <a>Public Relations Officer</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="#">
                        <a>Site Map</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://tmc.gov.in/index.php/en/">
                        <a target="_blank">TMC, Mumbai</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://actrec.gov.in/">
                        <a target="_blank">
                          ACTREC, Mumbai</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>



            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Website Policies</h3>
                  <ul>
                    <li>
                      <Link href="https://tmc.gov.in/index.php/en/">
                        <a target="_blank">Copyright Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://tmc.gov.in/tmh/index.php/en/">
                        <a target="_blank">
                          Disclaimer</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-use">
                        <a target="_blank">Policies &amp; Terms of Use</a>
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Design & Developed by{" "}
              <a href="https://mybrandmanagers.com" target="_blank">
                mybrandmanagers

              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
