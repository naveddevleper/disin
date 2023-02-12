import React from "react";
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from "react-tabs";
resetIdCounter();
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
    ssr: false,
});

const VideoIntro = () => {
    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="video-wrap">
                <Tabs>
                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openModal();
                                                }}
                                                className="popup-youtube"
                                            >
                                                <i className="icofont-ui-play"></i>
                                            </div>

                                            <div className="video-content">
                                                <h3>Hospital Administration</h3>
                                                <p>
                                                    Administration is managing and overseeing the daily
                                                    operations of the hospital, ensuring that patients
                                                    receive high-quality care, and coordinating with the
                                                    medical departments to ensure that the hospital runs
                                                    smoothly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openModal();
                                                }}
                                                className="popup-youtube"
                                            >
                                                <i className="icofont-ui-play"></i>
                                            </div>

                                            <div className="video-content">
                                                <h3>About Our Pharmacy</h3>
                                                <p>
                                                    Pharmacists helps in ensuring the safe and effective
                                                    use of medications for cancer patients. Compounding
                                                    and dispensing: Pharmacists may compound medications.
                                                    They also dispense medications to patients, ensuring
                                                    that patients receive the correct medications and
                                                    doses.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openModal();
                                                }}
                                                className="popup-youtube"
                                            >
                                                <i className="icofont-ui-play"></i>
                                            </div>
                                            <div className="video-content">
                                                <h3>Our reasearch center and lab</h3>
                                                <p>
                                                    Research and lab facilities play a vital role in
                                                    advancing scientific knowledge and improving our
                                                    ability to address complex challenges across many
                                                    fields of science.Research and lab facilities for the
                                                    development and implementation of new and innovative
                                                    cancer treatments.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openModal();
                                                }}
                                                className="popup-youtube"
                                            >
                                                <i className="icofont-ui-play"></i>
                                            </div>
                                            <div className="video-content">
                                                <h3>Biomedical Waste Management</h3>
                                                <p>
                                                    Hospital is crucial to ensure that the waste produced
                                                    in the hospital is handled and disposed of properly,
                                                    to prevent the spread of infections and protect public
                                                    health. Segregation, Collection, Treatment, Disposal. We
                                                    ensuring that hospital operates safely and
                                                    hygienically, protecting both patients and staff from
                                                    the risks of infection and contamination.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openModal();
                                                }}
                                                className="popup-youtube"
                                            >
                                                <i className="icofont-ui-play"></i>
                                            </div>
                                            <div className="video-content">
                                                <h3>IT Services</h3>
                                                <p>
                                                    IT plays an important role in hospitals by helping to
                                                    manage patient information, medical records, and other
                                                    healthcare data. These technologies can improve
                                                    patient care, reduce medical errors, and increase
                                                    efficiency in healthcare delivery.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabList>
                        <Tab>Hospital Administration</Tab>
                        <Tab>Pharmacy</Tab>
                        <Tab>Reasearch & Lab</Tab>
                        <Tab>Biomedical Waste Management</Tab>
                        <Tab>IT Services</Tab>
                    </TabList>
                </Tabs>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel="youtube"
                isOpen={!isOpen}
                videoId="bk7McNUjWgw"
                onClose={() => setIsOpen(!isOpen)}
            />
        </>
    );
};

export default VideoIntro;
