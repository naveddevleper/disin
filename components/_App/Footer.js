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
                        For Patient care & queries
                      </a>
                      <a href="mailto:ams@mpmmcc.tmc.gov.in">ams@mpmmcc.tmc.gov.in</a>
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
                      <i className="icofont-facebook"></i>
                      <a href="https://www.facebook.com/profile.php?id=100057011783740" target="_blank">

                      </a>
                    </li>
                    <li className="social_icon">
                      <i className="icofont-twitter"></i>
                      <a href="https://twitter.com/TMC_Varanasi" target="_blank">

                      </a>
                    </li>
                    <li className="social_icon">
                      <i className="icofont-linkedin"></i>
                      <a href="https://www.linkedin.com/" target="_blank">
                      </a>
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
                      <Link href="/about">
                        <a>About us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/nodalofficer">
                        <a>Nodal Officer</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/PRO">
                        <a>Public Relations Officer</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Global Navigation</h3>
                  <ul>
                    <li>
                      <Link href="/service-details">
                        <a>Gallery</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-use">
                        <a>
                          Policies & Terms of Use</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/donation">
                        <a>How To Help Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>Site Map</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Institute Links</h3>
                  <ul>
                    <li>
                      <Link href="https://tmc.gov.in/index.php/en/">
                        <a target="_blank">TMC, Mumbai</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://tmc.gov.in/tmh/index.php/en/">
                        <a target="_blank">
                          TMH, Mumbai</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="http://tmcepi.gov.in/">
                        <a target="_blank">CCE, Mumbai</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://tmc.gov.in/tmh/index.php/en/hbch-sangrur">
                        <a target="_blank">HBCH, Sangrur, Punjab</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://tmc.gov.in/tmh/index.php/en/hbchrc-vizag">
                        <a target="_blank">HBCHRC, Vishakhapatnam</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.bbcionline.org/">
                        <a target="_blank">BBCI, Guhawati</a>
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
