import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const TermsOfUse = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
                pageTitle="Privacy Policy & Terms Of Use"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Privacy Policy & Terms Of Use"
                bgImage="page-banner-mpmmcc"
            /> */}

            <div className="privacy-area about-area pt-5 pb-70">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="about-item about-right">
                            <img src="/images/about-shape1.png" alt="About" />
                            <h3>Content Policy</h3>
                            <p align="justify">“ This portal is designed, developed and maintained by Mahamana Pandit Madan Mohan Malaviya Cancer Centre a unit of TMC an autonomous body owned, funded and under the control of the Department of Atomic Energy, Government of India. ”</p>
                            <hr></hr>
                            <h3 class="item-title">Copyright Policy</h3>
                            <p align="justify">Contents of this portal shall not be reproduced partially or fully, without due permission from MPMMCC, if referred to as a part of another website, the source must be appropriately acknowledged. The contents of this portal shall not be used in any misleading or objectionable context/manner. Violation by the concerned user shall attract civil/criminal legal action. The content related to health information is only informative in nature.</p>
                            <p align="justify">The MPMMCC portal does not provide specific medical advice to its users. It will provide users with information to help them better understand their health, diagnosed conditions, available treatments, prevention, screening, and supportive care and other related information. The information created and posted is for general education on health and disease. This information will be up dated as and when found necessary. The information should not be used for self- diagnosing, / treatment etc., and MPMMCC will not be responsible or liable in any manner whatsoever for such acts. It is advised that specific personal health queries may be directed to the treating physician for better advice.</p>
                            <hr></hr>
                            <h3 class="item-title">Use of material posted on MPMMCC portal</h3>
                            <p align="justify">Material featured on this portal may be reproduced free of charge after taking appropriate permission by sending a mail to the concerned/webmaster. However, the material should be reproduced accurately and should not be used in a derogatory manner or out of context. Whenever the material is being published, the source must be prominently acknowledged. Also, the permission to reproduce this material shall not extend to third party, unless the permission is obtained from the concerned copyright holder.</p>
                            <hr></hr>
                            <h3>Privacy Policy</h3>
                            <p align="justify">This portal does not automatically capture any specific personal information from you (like name, phone number or e-mail address) that allows us to identify you individually.</p>
                            <p align="justify">You can visit this site without revealing any personal information and / or prior registration process, unless you choose to provide such information.</p>
                            <p align="justify">If the portal requests you to provide personal information, you will be informed for the particular purposes for which the information is gathered and adequate security measures will be taken to protect your personal information.</p>
                            <p align="justify">We do not sell or share any personally identifiable information volunteered on this portal to any third party (Public/Private). Any information provided to this portal will be protected from loss, misuse, unauthorized access or disclosure, alteration or destruction.</p>
                            <hr></hr>
                            <h3 class="item-title">Linking Policy</h3>
                            <h5>Links to the external websites/portal</h5>
                            <p align="justify">At some places in this portal, you shall find links to other websites/portals. These links have been placed for your convenience. MPMMCC is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this portal should not be assumed as endorsement of any kind. We do not guarantee that these links will work all the time and we have no control over availability of linked pages.</p>
                            <hr></hr>
                            <h5 class="item-title">Links to MPMMCC by other websites</h5>
                            <p align="justify">We do not object to you linking directly to the information that is hosted on this portal and no prior permission is required for the same. However, we would like you to inform us about any links provided to this portal so that you can be informed of any changes or updations therein. Also, we do not permit our pages to be loaded into frames on your site. The pages belonging to this portal must load into a newly opened browser window of the User.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TermsOfUse;
