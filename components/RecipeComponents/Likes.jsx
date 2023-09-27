import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs'
const Likes = ({ likes, postLike, toggleLike, session, deleteLike }) => {

    return (
        <div className='recipe-page__likes'>
            <span className='recipe-page__likes-count'>  Likes: {likes.length}</span>
            <div className={toggleLike ? 'recipe-page__likes-body __active-likes' : 'recipe-page__likes-body'}>
                {session?.user?.id ?
                    <>
                        {toggleLike ?
                            <BsFillHeartFill className='recipe-page__likes-btn __active-like' onClick={() => deleteLike()} />
                            :
                            <BsFillHeartFill className='recipe-page__likes-btn ' onClick={() => postLike()} />}

                    </>
                    :
                    <BsFillHeartFill className='recipe-page__likes-btn __active-like' />
                }
                <div className="recipe-page__likes-items">
                    {
                        likes.map((like, index) => (
                            <Link className='recipe-page__likes-items-like-link' href={`/userPage/${like?._id}`} key={index}>
                                <Image className='recipe-page__likes-items-like-img' src={like?.image} width={16} height={16} />
                            </Link>
                        ))
                    }
                </div>

            </div>

        </div>

    );
}

export default Likes;
