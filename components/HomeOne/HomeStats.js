import React from 'react';


const HomeStats = () => {

    return (
        <div className="counter-area pt-5">
            <div className="container">

                <div className="row">
                    <div className="row counter-bgg d-flex justify-content-around">
                        <div className="col-lg-6">
                            <div class="card-header text-center">
                                <h5>Notices</h5>
                            </div>
                            {/* <h2 class="card-title text-center">Notices</h2> */}
                            <div class="card-body exmple-body">

                                <p class="card-text example">Some quick example text to build on the card title and make up the bulk of the card's content.
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                    Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div class="card-footer text-muted">
                                2 days ago
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div class="card-header text-center">
                                <h5>Events</h5>
                            </div>
                            {/* <h2 class="card-title text-center">Events</h2> */}
                            <div class="card-body exmple-body">

                                <p class="card-text example">Some quick example text to build on the card title and make up the bulk of the card's content.
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                    Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div class="card-footer text-muted">
                                2 days ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default HomeStats;