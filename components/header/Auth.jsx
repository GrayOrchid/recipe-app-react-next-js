import { getProviders, signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Auth = ({ session }) => {
    let [providers, setProviders] = useState(null)
    useEffect(() => {
        let setUpProviders = async () => {
            let response = await getProviders()
            setProviders(response)
        }
        setUpProviders()
    }, []);


    return (
        <>
            {session?.user ? <Link className="header__menu-user" href={`/userPage/${session?.user?.id}`}>
                <Image className="header__menu-user-img" src={session?.user?.image} width={30} height={30} />
                <h2 className="header__menu-username">{session?.user?.name}</h2>
            </Link> : <> {providers &&
                Object.values(providers).map((provider) => (
                    <button
                        type='button'
                        key={provider.name}
                        onClick={() => {
                            signIn(provider.id);
                        }}
                        className='header__menu-signIn'
                    >
                        Sign in
                    </button>
                ))}</>}

        </>
    );
}

export default Auth;
