'use client'
import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
import { SessionProvider, getProviders } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import "styles/global.css";

export const metadata = {
    title: 'More Food',
    desciption: 'Add , share and cook with More Food '
}

const Layout = ({ children }) => {
    let [show, setShow] = useState(false)
    let [providers, setProviders] = useState(null)
    useEffect(() => {
        let setUpProviders = async () => {
            let response = await getProviders()
            setProviders(response)
        }
        setUpProviders()
    }, []);

    return (
        <html>
            <body className={show ? 'body __none-scroll' : 'body'}>
                <SessionProvider >
                    <Header show={show} setShow={setShow} providers={providers} />
                    <GiHamburgerMenu className='menu-open' onClick={() => setShow(true)} />
                    <main className="main">{children}</main>
                </SessionProvider>
                <Footer />
            </body>
        </html>
    );
}

export default Layout;
