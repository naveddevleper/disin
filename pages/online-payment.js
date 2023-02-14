import React from 'react';
import Link from 'next/link';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';

const OnlinePayment = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <div className="container py-3">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-2'>
                        <img className='payment-portal-logo' src="/images/HBCH_LOGO.webp" alt="HBCH Logo" />
                    </div>
                    <div className='col-8 text-center online-payment-heading'>
                        <h4><u>Mahamana Pandit Madan Mohan Malaviya Cancer Centre</u></h4>
                        <h3><u>&</u></h3>
                        <h4><u>Homi Bhabha Cancer Hospital</u></h4>
                    </div>
                    <div className='col-2'>
                        <img className='payment-portal-logo' src="/images/logo.webp" alt="MPMMCC Logo" />
                    </div>
                </div>
                <div className='payment-content'>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default OnlinePayment;