import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Departments = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Departments"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Departments"
                bgImage="page-banner-mpmmcc"
            /> */}

            <div className="departments-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center gy-4">
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-injection-syringe"></i>
                                <h3>Anesthesiology</h3>
                                <p>
                                    Anesthesiology, anaesthesiology, or anaesthesia is the medical
                                    specialty concerned with the total perioperative care of
                                    patients before, during and after surgery.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/anesthesiology">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-laboratory"></i>
                                <h3>Biochemistry</h3>
                                <p>
                                    Biochemistry is the application of chemistry to the study of
                                    biological processes at the cellular and molecular level.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/biochemistry">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-tooth"></i>
                                <h3>Dental & Prosthetic Surgery</h3>
                                <p>
                                    Replacement of missing teeth with fixed or removable
                                    prosthodontics, include implants. Cosmetic or aesthetic
                                    procedures (composite bonding, veneers, bleaching)
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/prosthetic-surgery">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-herbal"></i>
                                <h3>Dietetics</h3>
                                <p>
                                    Dietetics is a field of science that determines how nutrition
                                    and good eating affect our overall health.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/dietetics">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-xray"></i>
                                <h3>Radiodiagnosis & Imaging</h3>
                                <p>
                                    Radiodiagnosis, also known as diagnostic imaging, is the medical specialty which deals with generating images of the interior of the body through different physical agents.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/medical-administration">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-pills"></i>
                                <h3>Medical Oncology</h3>
                                <p>
                                    Medical oncology is a type of cancer care that involves
                                    treatment using chemotherapy, immunotherapy, hormone therapy,
                                    and targeted therapy.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/medical-oncology">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-nurse-alt"></i>
                                <h3>Oncology Nursing</h3>
                                <p>
                                    An oncology nurse is a specialized nurse who cares for cancer patients.
                                    These nurses require advanced certifications and
                                    clinical experiences in oncology.Oncology nursing cares during the time of their disease.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/medical-social-works">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-test-bottle"></i>
                                <h3>Microbiology</h3>
                                <p>
                                    Microbiology is the scientific study of microorganisms, those
                                    being unicellular, multicellular, or acellular. Microbiology
                                    encompasses numerous sub-disciplines including virology,
                                    bacteriology, protistology,
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/microbiology">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-patient-bed"></i>
                                <h3>Nuclear Medicine</h3>
                                <p>
                                    Nuclear medicine is a specialized area of radiology that uses
                                    very small amounts of radioactive materials to examine organ
                                    function and structure.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/nuclear-medicine">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-nurse"></i>
                                <h3>Occupational Therapy</h3>
                                <p>
                                    Occupational therapist help these patients develop, recover,
                                    improve, as well as maintain the skills needed for daily
                                    living and working.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/occupational-therapy">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-prescription"></i>
                                <h3>Onco-Pathology</h3>
                                <p>
                                    The department is dedicated to all the histological
                                    diagnostics necessary for the patients.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/onco-pathology">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-drug-pack"></i>
                                <h3>Palliative Medicine</h3>
                                <p>
                                    Palliative care is specialized medical care that focuses on
                                    providing patients relief from pain and other symptoms of a
                                    serious illness, no matter the diagnosis or stage of disease.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/palliative-medicine">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Pediatric Oncology</h3>
                                <p>
                                    Pediatric oncologists who specialize in treating of cancer in
                                    children and young adults.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/pediatric-oncology">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-autism"></i>
                                <h3>Physiotherapy</h3>
                                <p>
                                    Physiotherapy is a health care profession which assists people
                                    to restore, maintain and maximize their strength, function,
                                    movement, and overall well-being.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/physiotherapy">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-surgeon-alt"></i>
                                <h3>Preventive Oncology</h3>
                                <p>
                                    It is an interdisciplinary branch of medical science that aims
                                    to prevent cancer and its development or progression.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/preventive-oncology">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-radio-active"></i>
                                <h3>Radiation Oncology</h3>
                                <p>
                                    Radiation oncologists who specialize in treating cancer with
                                    radiation therapy.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/radiation-oncology">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-surgeon"></i>
                                <h3>Surgical Oncology</h3>
                                <p>
                                    Surgical Oncology is a discipline of medicine committed to
                                    treating cancer tumors through the means of surgery.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/surgical-oncology">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-blood-drop"></i>
                                <h3>Transfusion Medicine</h3>
                                <p>
                                    Transfusion medicine is the branch of medicine that is
                                    concerned with the process of collecting (donation), testing,
                                    processing, storing, and transfusing blood and its components.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/transfusion-medicine">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                </Link>

                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-company"></i>
                                <h3>General Administration</h3>
                                <p>
                                    Administration is responsible for managing and overseeing the daily operations of the hospital, ensuring that patients receive high-quality care, and coordinating with the medical departments to ensure that the hospital runs smoothly.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/transfusion-medicine">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                </Link>

                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-doctor"></i>
                                <h3>Medical Administration</h3>
                                <p>
                                    Medical Administration is administration or management
                                    utilising the medical and clinical knowledge, skill, and
                                    judgement of a registered medical practitioner, and capable of
                                    affecting the health and safety of the public or any person.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/medical-administration">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-crutch"></i>
                                <h3>Medical Social Works</h3>
                                <p>
                                    MSW are responsible for offering the support and resources
                                    that patients need in order to fully recover from a medical
                                    illness or injury as well as the resulting emotional,
                                    physical, or psychological concerns.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/medical-social-works">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-file-spreadsheet"></i>
                                <h3>Accounts Department</h3>
                                <p>
                                    Department responsible for all financial transactions of the organization, including sales, purchases, expenses,
                                    payroll, and other monetary activities.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="#">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-engineer"></i>
                                <h3>Engineering Department</h3>
                                <p>
                                    Department is a vital function within an organization that focuses on the design, development, and implementation of
                                    various engineering projects and solutions.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="#">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-people"></i>
                                <h3>HR Department</h3>
                                <p>
                                    It is responsible for a wide range of tasks related to employee recruitment, hiring, training, development,
                                    compensation, benefits, and employee relations.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="#">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-computer"></i>
                                <h3>IT Department</h3>
                                <p>
                                    IT plays an important role in hospitals by helping to manage patient information, medical records, and other healthcare data. These technologies can improve patient care, reduce medical errors, and increase efficiency in healthcare delivery.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="#">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-shopping-cart"></i>
                                <h3>Purchase Department</h3>
                                <p>
                                    It is responsible for acquiring the goods, materials, and services necessary for an organization's operations and ensure that the organization obtains the required products or
                                    services at the right price, quality, and quantity.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="#">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-handshake-deal"></i>
                                <h3>Public Relation Department</h3>
                                <p>

                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="#">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i class="icofont-ssl-security"></i>
                                <h3>Security Services Department</h3>
                                <p>
                                    It is responsible for ensuring the safety and security of an organization, its employees, assets, and premises and maintaining a secure environment.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="#">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-drop mt-3"
                                    >
                                        Read More
                                    </button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Departments;
