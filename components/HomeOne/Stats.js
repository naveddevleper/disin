import React from 'react';

const Stats = () => {
    return (
        <div className="counter-area">
            <div className="container">
                <div className="row counter-bg">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-patient-bed"></i>
                            <h3 className="counter">531</h3>
                            <p>Patients Beds</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-people"></i>
                            <h3><span className="counter">5000</span>+</h3>
                            <p>Patients Visits</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-doctor-alt"></i>
                            <h3><span className="counter">500</span>+</h3>
                            <p>Medical Staffs</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-badge"></i>
                            <h3 className="counter">2019</h3>
                            <p>Year Of Commissioned</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;