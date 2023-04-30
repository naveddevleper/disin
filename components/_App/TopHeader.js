import React, { useEffect, useState } from 'react';

const TopHeader = () => {
    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute(
            'src',
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                includedLanguages: 'en,hi', // include this for selected languages
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
        );
    };
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
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-3">
                        <div className="header-top-item">
                            <div className="header-top-right">
                                <div id="google_translate_element"> </div>
                                {/* <ul className="lang-list">
                                    <li><a href="/">EN</a></li>
                                    <li><a href="/ar">AR</a></li>
                                </ul> */}

                                {/* <ul>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100057011783740" target="_blank">
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/TMC_Varanasi" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;