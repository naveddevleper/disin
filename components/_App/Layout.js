import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>MPMMCC - Mahamana Pandit Madan Mohan Malaviya Cancer Centre</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="MPMMCC - Mahamana Pandit Madan Mohan Malaviya Cancer Centre" />
                <meta name="og:title" property="og:title" content="MPMMCC - Mahamana Pandit Madan Mohan Malaviya Cancer Centre"></meta>
                <meta name="twitter:card" content="MPMMCC - Mahamana Pandit Madan Mohan Malaviya Cancer Centre"></meta>
                <link rel="canonical" href="https://disin-react.envytheme.com/"></link>
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;