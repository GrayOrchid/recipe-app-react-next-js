import React from 'react';
import Link from 'next/link';
import './header.css'
import { signOut, useSession } from 'next-auth/react';
import { GoSignOut } from 'react-icons/go'
import Auth from './Auth';
const Header = ({ show, setShow, providers }) => {
    let { data: session } = useSession()

    return (
        <header className={show ? 'header __active' : 'header'} onClick={() => setShow(false)}>
            <div className="header__body" onClick={(e) => e.stopPropagation()}>
                <h3 className='header__menu-close' onClick={() => setShow(false)}>X</h3>
                <nav className="header__menu-nav">
                    <Auth session={session} providers={providers} />
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
    );
}

export default Header;



