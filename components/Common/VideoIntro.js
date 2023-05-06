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
                                                    Administration is responsible for managing and overseeing the daily operations of the hospital,
                                                    ensuring that patients receive high-quality care, and coordinating with the medical departments to
                                                    ensure that the hospital runs smoothly.
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
                                                <h3>Pharmacy</h3>
                                                <p>
                                                    The in-house pharmacy is established and works 24 hours a day. Pharmacists help ensure the safe
                                                    and effective use of medications for cancer patients. They also compound medications and dispense
                                                    them to patients, ensuring that patients receive the correct medications and doses.
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
                                                <h3>KEVAT</h3>
                                                <p>
                                                    Patient navigation is a process by which a trained healthcare professional, known as a patient
                                                    navigator, guides patients through the healthcare system, helping them to navigate the complexities
                                                    of diagnosis, treatment, and survivorship.
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
                                                <h3>MSW</h3>
                                                <p>
                                                    Medical Social Work department plays a critical role in ensuring that patients receive the
                                                    comprehensive care they need to manage their health and well-being. Medical social workers
                                                    provide a wide range of services, including Psychosocial assessments, Counselling, Financial
                                                    assistance etc.
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
                                                    IT plays an important role in hospitals by helping to manage patient information, medical records,
                                                    and other healthcare data. These technologies can improve patient care, reduce medical errors, and
                                                    increase efficiency in healthcare delivery. IT services include networking, servers and software
                                                    applications.
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
                        <Tab>KEVAT</Tab>
                        <Tab>MSW</Tab>
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
