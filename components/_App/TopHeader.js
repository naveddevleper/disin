import React, { useEffect, useState } from 'react';

const TopHeader = () => {
    // useEffect(() => {
    //     var addScript = document.createElement('script');
    //     addScript.setAttribute(
    //         'src',
    //         '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    //     );
    //     document.body.appendChild(addScript);
    //     window.googleTranslateElementInit = googleTranslateElementInit;
    // }, []);
    // const googleTranslateElementInit = () => {
    //     new window.google.translate.TranslateElement(
    //         {
    //             pageLanguage: 'en',
    //             includedLanguages: 'en,hi', // include this for selected languages
    //             layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //         },
    //         'google_translate_element'
    //     );
    // };
    return (
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-8 col-lg-9">
                        <div className="header-top-item">
                            <div className="header-top-left">
                                <ul>
                                    <li>

                                        <a href="#">
                                            <i className="icofont-ui-call"></i>
                                            Call : +91-0542-6917700, 0542-2517699
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:ms@mpmmcc.tmc.gov.in">
                                            <i className="icofont-ui-message"></i>
                                            ms@mpmmcc.tmc.gov.in
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-3">
                        <div className="header-top-item">
                            <div className="header-top-right">
                                {/* <div id="google_translate_element"> </div> */}
                                {/* <ul className="lang-list">
                                    <li><a href="/">EN</a></li>
                                    <li><a href="/ar">AR</a></li>
                                </ul> */}
                                <ul className="lang-list">
                                    <a href="https://online.mpmmcc.tmc.gov.in/OnlineAppt/" target='_blank'><li><button className='btn btn-primary btn-sm'> Make Appointment </button></li></a>
                                    <a href="/donation"><li><button className='btn btn-primary btn-sm'> Donate Now </button></li></a>
                                </ul>
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
        </div >
    )
}

export default TopHeader;