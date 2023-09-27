'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './header.css'
import { signOut, useSession } from 'next-auth/react';
import { GoSignOut } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'
import Auth from './Auth';
const Header = () => {
    let { data: session } = useSession()

    let [show, setShow] = useState(false)
    return (
        <>
            <header className={show ? 'header __active' : 'header'} onClick={() => setShow(false)}>
                <div className="header__body" onClick={(e) => e.stopPropagation()}>
                    <h3 className='header__menu-close' onClick={() => setShow(false)}>X</h3>
                    <nav className="header__menu-nav">
                        <Auth session={session} />
                        <ui className="header__menu-nav-list">
                            <li className="header__menu-nav-list-item"><Link className="header__menu-nav-list-link" href={'/'}>Home</Link></li>
                            {session?.user && (<li className="header__menu-nav-list-item"><Link className="header__menu-nav-list-link" href={'/recipeAddPage'}>Create Recipe</Link></li>)}
                            {/* <li className="header__menu-nav-list-item"><Link className="header__menu-nav-list-link" href={'/'}>Contacts</Link></li> */}
                            {/* <li className="header__menu-nav-list-item"><Link className="header__menu-nav-list-link" href={'/'}>About</Link></li> */}
                        </ui>
                        {session?.user && (
                            <GoSignOut className='header__menu-nav-sign-out' onClick={signOut} />
                        )}
                    </nav>
                </div>
            </header >
            <GiHamburgerMenu className='menu-open' onClick={() => setShow(true)} />
        </>
    );
}

export default Header;



