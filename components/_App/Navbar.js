import React from "react";
import Link from "../../utils/ActiveLink";
import * as styles from "../_App/navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const router = useRouter();
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area sticky-top">
      <div className="main-nav">
        <div className="container continer-custom">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className={`${styles.heroLogo}`}>
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  {router.pathname.includes('/hbch') ?
                    <img className="w-100" src="/images/hbch-logo.svg" alt="logo" />
                    : <img className="w-100" src="/images/mpmmcc-logo.svg" alt="logo" />
                  }
                  {/* <img className="w-100" src="/images/logo-2.webp" alt="logo" /> */}
                </a>
              </Link>
            </div>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav" style={{ paddingTop: '10px' }}>
                <li className="nav-item">
                  {router.pathname.includes('/hbch') ?
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        MPMMCC
                      </a>
                    </Link>
                    :
                    <Link href="/hbch-varanasi" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        HBCH
                      </a>
                    </Link>
                  }
                </li>

                <li className="nav-item">
                  <Link href="#" activeClassName="active">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      About Us
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/about" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          About Us
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/about/history" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          History
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/about/organisationalchart" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Organisational Chart
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/collegiummembers" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Collegium Members
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/thegoverningcouncil" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          The Governing Council
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/departments" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Departments
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Academic
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/academics" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Academic
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/academics/clinical-research-secretariat"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Clinical Research Secretariat
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/academics/ethics-committee"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Institutional Ethics Committees
                        </a>
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                                            <Link href="/academics/courses" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Courses</a>
                                            </Link>
                                        </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Patient Service
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          International Patients Advisor
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/online-payment" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Online Payment
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://tmc.gov.in/m_webemr_Varanasi/emr/Login"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          E-Medical Records(EMR)
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="https://tmc.gov.in/tmh/pdf/Common_Cancer_FAQs.pdf" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link" target="_blank">
                          FAQ's
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Recruitment
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="https://tmc.gov.in/m_events/Events/JobVacancies" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link" target="_blank">
                          Careers
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="https://tmc.gov.in/m_events/events/examination" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link" target="_blank">
                          Examination
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://tmc.gov.in/m_events/events/interviews"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link" target="_blank">
                          Interview
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="https://tmc.gov.in/m_events/events/results" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link" target="_blank">
                          Results
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <Link href="/coming-soon" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Recruitment
                    </a>
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link href="/coming-soon" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Tenders
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
