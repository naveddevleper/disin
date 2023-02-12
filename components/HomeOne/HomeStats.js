import React from 'react';

const HomeStats = () => {
    return (
        <div className="counter-area">
            <div className="container">
                <div className="row counter-bg">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            {/* <i className="icofont-patient-bed"></i> */}
                            <h3 className="counter">Events</h3>
                            {/* <p>Patients Beds</p> */}
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            {/* <i className="icofont-patient-bed"></i> */}
                            <h3 className="counter">What's New</h3>
                            {/* <p>Patients Beds</p> */}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HomeStats;