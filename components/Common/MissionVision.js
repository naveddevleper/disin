import React from 'react';
import * as styles from './missionVision.module.css'


const MissionVision = () => {
    return (
        <div className="appointment-area-three">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className={styles.container}>
                        <div className={styles.subContainer}>
                            <img className={styles.missionVisionImage} src="/images/mission.jpg" alt="Mission" />
                            <h2 className={styles.heading}>
                                Mission
                            </h2>
                            <p className={styles.para}>
                                To provide comprehensive cancer care to one and all, through its motto of excellence in service, education and research.
                            </p>
                        </div>
                        <div className={styles.subContainer}>
                            <img className={styles.missionVisionImage} src="/images/vision.jpg" alt="Vision" />
                            <h2 className={styles.heading}>VISION</h2>
                            <p className={styles.para}>
                                To provide leadership in guiding the national policy and
                                strategy for cancer care by:
                            </p>
                            <ol>
                                <li>
                                    Promoting outstanding services through evidence-based
                                    practice of oncology.
                                </li>
                                <li>
                                    Commitment of imparting education in cancer to students,
                                    trainees, professionals, employees and the public.
                                </li>
                                <li>
                                    Emphasizing on research that is affordable, innovative and
                                    relevant to the needs of the country.
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MissionVision;