import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const AncillaryServices = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Ancillary Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="HBCH Services"
                bgImage="page-banner-tmc"
            />

            <div className="doctor-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="doctor-details-item">
                                <div className="doctor-details-right">
                                    <div className="doctor-details-biography">
                                        <table class="table table-hover table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S.No</th>
                                                    <th scope="col">SERVICES;</th>
                                                    <th scope="col">Sub-Category</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <b>A.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Oncology Nursing</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. General and Oncology Nursing<br></br>2. ICU
                                                            Care<br></br>3. CVAD Clinic<br></br>4. Stoma
                                                            Clinic
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>B.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Onco-Physiotherapy </strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Pre-op Pulmonary Rehabilitation<br></br>2.
                                                            Post-operative counselling for Breast Cancer
                                                            <br></br>3. Geriatric Physiotherapy Services for
                                                            Oncology Patients<br></br>4. Physiotherapy in
                                                            restricted mobility<br></br>5. Pelvic floor
                                                            exercises for Urogenital cancers<br></br>6.
                                                            Physiotherapy for Lymphedema in Head &amp; Neck,
                                                            Breast and Urogenital cancers<br></br>7. Chest
                                                            clearance and early mobilization for ICU patients
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>C.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Occupational Therapy</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            . Activities of Daily Life and Quality of Life
                                                            Training<br></br>2. Gait training for Bone and
                                                            Soft Tissue Tumor patients<br></br>3. Mirror
                                                            therapy for amputation patients <br></br>4. Hand
                                                            splinting and Prosthesis training<br></br>5.
                                                            Multilayer Bandaging Technique for Breast Cancer
                                                            <br></br>6. Patients needing Vaginal Dilatation
                                                            for Gynecological Cancers<br></br>7. Balance
                                                            Training <br></br>8. Cognitive and Perceptual
                                                            Training in Neuro-Oncology<br></br>9. Wheel Chair
                                                            Training for Paralytic Patients<br></br>10. Jaw
                                                            Stretching for Head &amp; Neck Cancer<br></br>
                                                            11.Vocational Rehabilitation Training
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>D.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Dietetics</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Personalized Dietary Counselling for Cancer
                                                            Patients<br></br>2. Prescription of Diet &amp;
                                                            Preparation of Dietary Chart<br></br>3. Monitoring
                                                            of Food Quality
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>E.</b>
                                                    </td>
                                                    <td>
                                                        <strong>Medical Social Works</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Psycho-Social Counselling<br></br>2.Family
                                                            Counselling<br></br>3. Financial Assistance to
                                                            poor patients<br></br>4. Railway Travel Concession
                                                            <br></br>5. Patient Accommodation<br></br>6. Tele
                                                            Consultation for Palliative Medicine<br></br>7.
                                                            Blood Donation Counselling<br></br>8. Liasioning
                                                            with Government and Non-Government Organization
                                                            for Support Services
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>F.</b>
                                                    </td>
                                                    <td>
                                                        <strong>St. Jude Child Care Facility</strong>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            1. Free neat and clean accommodation and food
                                                            facility for Pediatric cancer patients on long
                                                            term treatment
                                                        </p>
                                                    </td>
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

            <Footer />
        </>
    );
};

export default AncillaryServices;
