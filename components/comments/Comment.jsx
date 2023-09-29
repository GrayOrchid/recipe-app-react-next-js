import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Comment = (props) => {
    let { commentarie, deleteCommentarie, session, index } = props
    return (
        <motion.div className='comments__item'
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.6, delay: index * .2 }}

        >
            <div className='comments__item-creator'>
                <div className='comments__item-creator-info'>
                    <Image className='comments__creator-img' src={commentarie?.creator?.image} width={30} height={30} />
                    <Link className='comments__creator-name' href={`/userPage/${commentarie?.creator?._id}`}>{commentarie?.creator?.username}</Link>
                </div>
                {session?.user?.id === commentarie?.creator?._id &&
                    (
                        <span className='comments__creator-delete' onClick={() => deleteCommentarie(commentarie)}>X</span>
                    )
                }
            </div>
            <p className='comments__text'>{commentarie?.text}</p>
        </motion.div>

    );
}

export default Comment;
