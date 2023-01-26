import React from 'react';

const TopHeader = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-8 col-lg-9">
                        <div className="header-top-item">
                            <div className="header-top-left">
                                <ul>
                                    <li>
                                        <a href="tel:+07554332322">
                                            <i className="icofont-ui-call"></i>
                                            Call : +91-0542-2575032,35, 0542-2517699
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:ams@mpmmcc.tmc.gov.in">
                                            <i className="icofont-ui-message"></i>
                                            ams@mpmmcc.tmc.gov.in
                                        </a>
                                    </li>
                                    {/* <li>
                                        <i className="icofont-location-pin"></i>
                                        210-27 Quadra, Canada 
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-3">
                        <div className="header-top-item">
                            <div className="header-top-right">
                                <ul className="lang-list">
                                    <li><a href="/">EN</a></li>
                                    <li><a href="/ar">AR</a></li>
                                </ul>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;