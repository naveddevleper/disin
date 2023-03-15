import React from 'react';


const HomeStats = () => {

    return (
        <div className="counter-area pt-5">
            <div className="container">
                <div className="row counter-bg d-flex justify-content-around">

                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="card-title text-center">Notices</h2>
                            <div className="card ">
                                <div className="card-body exmple-body">

                                    <div className="card-text example">
                                        <p>1. With supporting text below as a natural lead-in to additional content.</p>
                                        <p>2. With supporting text below as a natural lead-in to additional content.</p>
                                        <p>3. With supporting text below as a natural lead-in to additional content.</p>
                                        <p>4. With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="card-title text-center">Events</h2>
                            <div className="card">
                                <div className="card-body exmple-body ">

                                    <div className="card-text example ">
                                        <p>1. With supporting text below as a natural lead-in to additional content.</p>
                                        <p>2. With supporting text below as a natural lead-in to additional content.</p>
                                        <p>3. With supporting text below as a natural lead-in to additional content.</p>
                                        <p>4. With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HomeStats;