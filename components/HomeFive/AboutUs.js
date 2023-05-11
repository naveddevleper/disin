import React from "react";

const AboutUs = () => {
    return (
        <div className="welcome-area ptb-100">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-6 p-0">
                        <div className="welcome-item welcome-left">
                            <img src="/images/TMH.JPG" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 p-0">
                        <div className="welcome-item welcome-right">
                            <div className="section-title-two">
                                <h2>How We Care</h2>
                            </div>

                            <ul>
                                <li>
                                    <i className="icofont-doctor-alt"></i>
                                    <div className="welcome-inner">
                                        <h3>LEGACY OF CANCER CARE</h3>
                                        <p>
                                            We are the units of the Tata Memorial Centre (TMC), Mumbai. Tata Memorial Hospital has a legacy
                                            of leadership in cancer care, research, and education in India.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <i className="icofont-stretcher"></i>
                                    <div className="welcome-inner">
                                        <h3>24-HOURS EMERGENCY</h3>
                                        <p>
                                            We are also providing services for 24-hour medical emergencies, seven days a week, apart from
                                            routine consulting hours. The care is paid for or subsidised as needed. We offer ethical, professional
                                            treatment, creating trust and hope.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <i className="icofont-network"></i>
                                    <div className="welcome-inner">
                                        <h3>MODERN IT TECHNOLOGIES</h3>
                                        <p>
                                            Online Electronic Medical Record (EMR), Telemedicine, PACS, and CIS are modern IT technologies
                                            that are helping to improve the quality and efficiency of cancer care while also empowering patients
                                            to take a more active role in their own health.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
