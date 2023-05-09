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
                                <iframe src="/images/Holiday_List_2023.pdf" width="500px" height="300px" />

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
                                <div className='card-text example'>
                                    <p>1. “Pall Evolution” - Palliative Medicine</p>
                                    <p>2. NMPAICON 2023 - Nuclear Medicine</p>
                                    <p>3. CME of Oncopathology “Morphology to Molecular Techniques”</p>
                                    <p>4. CME Biochemistry - MPMMCC</p>
                                    <p>5. 43 RD ICRO SUN PG Teaching Programme to Be Held On 06 May 2023 &amp; 07 May 2023</p>
                                    <p>13 TH Annual Conference of
                                        Indian Brachytherapy Society IBSCON – 2023 4 TH to 6 TH August 2023</p>
                                </div>
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