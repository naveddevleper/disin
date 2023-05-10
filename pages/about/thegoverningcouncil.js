import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const Thegoverningcouncil = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            {/* <PageBanner
        pageTitle="History"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImage="page-banner-mpmmcc"
      /> */}

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-start">

                        <div className="col">
                            <div className="about-item about-center">
                                {/* <img src="/images/about-shape1.png" alt="About" /> */}
                                <h2>Organisational Chart</h2>
                                <div class="row align-items-start">
                                    <div class="col-lg-12">
                                        <div id="main2">
                                            <div id="menubox1">
                                                <div class="menu1">
                                                    <table className="table table-bordered table-hover">
                                                        <thead className="bg-color">
                                                            <tr>
                                                                <td className="first_row" colspan="2">GOVERNING COUNCIL MEMBERS</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody border="double">
                                                            <tr class="odd">
                                                                <th>Mr. K. N. Vyas,<br />
                                                                    <span class="style7">Chairman, Atomic Energy Commission &amp; Secretary, Dept. of Atomic Energy, Government of India</span><p></p>
                                                                </th>
                                                                <td>Chairman</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th>Prof. N. K. Ganguly,<br />
                                                                    <span class="style7">Distinguished Biotechnology Fellow &amp; Advisor, Translation Health Science &amp; Technology Institute, National Institute of Immunology, New Delhi &amp; Former Director, ICMR</span></th>
                                                                <td>Member</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th>Mr. Jayant Banthia,<br />
                                                                    <span class="style7">Ex-Chief Secretary, Govt. of Maharashtra</span></th>
                                                                <td >
                                                                    <p>Member</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th>Mr. Sanjay Kumar,<br />
                                                                    <span class="style7" >Joint Secretary (Administration &amp; Accounts) </span></th>
                                                                <td>Member (Ex-officio)</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th>Ms. Richa Bagla,<br />
                                                                    <span class="style7" >Joint Secretary ( Finance ), Department of Atomic Energy, Government of India</span></th>
                                                                <td>Co-Opted Member</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th>Dr. Snehalata Deshmukh,<br />
                                                                    <span class="style7">Ex-Vice Chancellor, University of Mumbai.</span></th>
                                                                <td>Co-Opted Member</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th>Mr. Vijay Singh,<br />
                                                                    <span class="style7">Vice Chairman, Sir Dorabji Tata Trust</span></th>
                                                                <td>Member</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th>Mr. Lakshman Sethuraman,<br />
                                                                    <span class="style7">Head Support Services, Sir Dorabji Tata Trust</span></th>
                                                                <td>Member</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th>Dr. R. A. Badwe,<br />
                                                                    <span class="style7">Director, Tata Memorial Centre, Dr. E Borges Road, Parel, Mumbai, (Maharashtra) 400012</span></th>
                                                                <td>Member (Ex-Officio)</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <td colspan="2" align="center ">
                                                                    <h2>Permanent Invitee</h2>
                                                                </td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th>Dr. C. S. Pramesh,<br />
                                                                    <span class="style7" >Director, Tata Memorial Hospital, Dr. E Borges Road, Parel, Mumbai, (Maharashtra) 400012</span></th>
                                                                <td>Permanent Invitee</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th >Dr. S. D. Banavali,
                                                                    <br />
                                                                    <span class="style7">Director (Academics) Tata Memorial Centre, Dr. E Borges Road, Parel, Mumbai, (Maharashtra) 400012</span></th>
                                                                <td>Permanent Invitee</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th >Dr. Sudeep Gupta,
                                                                    <br />
                                                                    <span class="style5 style7 style7" >Director, Advanced Center for Treatment Research and Education in Cancer,Kharghar, Navi Mumbai,
                                                                        <br />
                                                                        (Maharashtra) 410210</span></th>
                                                                <td >Permanent Invitee</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th >Dr.Umesh Mahantshetty,
                                                                    <br />
                                                                    <span class="style7">Director, Homi Bhabha Cancer Hospital &amp; Research Centre( HBCH&amp;RC), Visakhapatnam&nbsp;(A P) 530053</span></th>
                                                                <td >Permanent Invitee</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th >Dr. Amal C. Kataki,
                                                                    <br />
                                                                    <span class="style7">Director, Dr. Bhubaneswar Borooah Cancer Institute&nbsp;( BBCI ), Guwahati&nbsp;(Assam) 781016</span></th>
                                                                <td >Permanent Invitee</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th >Dr. Satyajit Pradhan,
                                                                    <br />
                                                                    <span class="style7" >Director, Homi Bhabha Cancer Hospital &amp; Mahamana Pandit Madan Mohan Malaviya Cancer Centre, Varanasi 221005 (Uttar Pradesh)</span></th>
                                                                <td>Permanent Invitee</td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <td colspan="2" align="center ">
                                                                    <h2>Secretary</h2>
                                                                </td>
                                                            </tr>
                                                            <tr class="odd">
                                                                <th >Mr. A. N. Sathe,
                                                                    <br />
                                                                    <span class="style7" >Chief Administrative Officer, Tata Memorial Centre, Dr. E Borges Road, Parel, Mumbai, (Maharashtra) 400012</span></th>
                                                                <td>Secretary</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Thegoverningcouncil;
