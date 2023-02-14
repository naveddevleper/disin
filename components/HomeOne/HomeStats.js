import React from 'react';

const HomeStats = () => {
    return (
        <div className="counter-area pt-5">
            <div className="container">
                <div className="row counter-bg d-flex justify-content-around">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <h3 className="counter fs-3">Events</h3>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <h3 className="counter fs-3">What's New</h3>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HomeStats;