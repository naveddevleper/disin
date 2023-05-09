import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Stats from "../components/HomeOne/Stats";

const Disclaimer = () => {
    return (
        <>
            <Navbar />

            <div className="about-area pt-5 pb-70">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="about-item about-right">
                            <img src="/images/about-shape1.png" alt="About" />
                            <h2>Disclaimer</h2>
                            <p>
                                This website is designed, developed and maintained by MPMMCC,
                                TMC, a grant-in-aid institution under the Department of Atomic
                                Energy, Government of India, with an objective to enable
                                single window access to information and services being
                                provided by the centre.
                            </p>
                            <p>
                                Though all efforts have been made to ensure the accuracy and
                                currency of the content on this website, the same should not
                                be construed as a statement of law or used for any legal
                                purposes. MPMMCC accept no responsibility in relation to the
                                accuracy, completeness, usefulness or otherwise of the
                                contents. Users are advised to verify/check any information
                                with the relevant Government department(s) and/or other
                                source(s) and to obtain any appropriate professional advice
                                before acting on the information provided on the website.
                                Pages accessed directly through URLs and not through the
                                website may be outdated or invalid. Only these website links
                                should be used to access its web pages.
                            </p>
                            <p>
                                In no event will the Government or MPMMCC be liable for any
                                expense, loss or damage including without limitation, indirect
                                or consequential loss or damage, or any expense, loss or
                                damage whatsoever arising from use, or loss of use of data,
                                arising out of or in connection with the use of this website.
                            </p>
                            <p>
                                The MPMMCC portal will not mention endorse or recommend any
                                commercial products, processes or services. Any mention of
                                commercial products, processes, or services as a part of the
                                web content on Centre&#39;s portal https://mpmmcc.tmc.gov.in,
                                should not be construed as an endorsement or recommendation.
                            </p>
                            <p>
                                These terms and conditions shall be governed by and construed
                                in accordance with the Indian Laws. Any dispute arising under
                                these terms and conditions shall be subject to the exclusive
                                jurisdiction of the courts of India.
                            </p>
                            <p>
                                Press releases or other materials other than those created by
                                MPMMCC, TMC or DAE will not be posted on the MPMMCC website.
                            </p>
                            <p>
                                The Centre publishes advertisements for career opportunities
                                /job vacancies in leading national newspapers and
                                international and national scientific journals. MPMMCC, TMC,
                                is not responsible for any fraudulent job offer(s) and no
                                candidate is required to pay anything for a job at this Centre
                                / Hospital(s).
                            </p>
                            <p>Use of Health Information on the website</p>
                            <p>
                                The MPMMCC, TMC does not provide specific medical advice to
                                its users. It will provide users with information to help them
                                better understand their health, diagnosed conditions,
                                available treatments, prevention, screening, supportive care
                                and other related information. The information created and
                                posted is for general education on health and disease. This
                                information will be updated as and when found necessary. The
                                information should not be used for self-diagnosing, /
                                treatment etc., and MPMMCC, TMC will not be responsible or
                                liable in any manner whatsoever for such acts. It is advised
                                that specific personal health queries may be directed to the
                                treating physician for better advice.
                            </p>
                            <p>
                                Material featured on this portal may be reproduced free of
                                charge after taking appropriate permission by sending an
                                e-mail to the concerned/webmaster. However, the material
                                should be reproduced accurately and should not be used in a
                                derogatory manner or out of context. Whenever the material is
                                being published, the source must be prominently acknowledged.
                                Also, the permission to reproduce this material shall not
                                extend to third party, unless the permission is obtained from
                                the concerned copyright holder.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Disclaimer;
