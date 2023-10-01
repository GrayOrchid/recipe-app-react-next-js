import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './cards.css';
import { motion } from 'framer-motion';

const Card = (props) => {
    let { recipe, deleteRecipe, session, index } = props
    return (
        <motion.div className="cards__card" style={{ backgroundImage: `url(${recipe?.img})` }}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.6, delay: index * .2 }}
        >
            <div className="cards__card-info">
                <div className="cards__card-info-creator" >
                    <Link className='cards__card-info-creator-link' href={`/userPage/${recipe?.creator?._id}`}>
                        <Image className="cards__card-info-creator-image" src={recipe?.creator?.image} width={30} height={30} alt='user-avatar' />
                        <span className='cards__card-info-creator-username'>{recipe?.creator?.username}</span>
                    </Link>
                    {session?.user?.id === recipe?.creator?._id ? <button className='cards__card-delete' onClick={() => deleteRecipe(recipe)}>X</button> : <>   </>}
                </div>
                <div className="cards__card-info-bottom">
                    <div className="cards__card-info-text">
                        <h3 className='cards__card-info-bottom-title'>{recipe?.title || <Skeleton />}</h3>
                        <Link className='cards__card-info-bottom-link' href={`/userPage/${recipe?.creator?._id}`} >Open Recipe Page</Link>
                    </div>
                </div>

            </div>
        </motion.div >
    );
}

export default Card;

