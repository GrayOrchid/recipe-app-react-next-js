import React from 'react';
import Comment from './Comment';
import './comments.css'
const Comments = ({ commentaries, deleteCommentarie, session, }) => {
    return (
        <div className='comments'>
            <div className='comments_list'>
                {commentaries?.sort((a, b) => a?.text?.length - b?.text?.length).map((commentarie, index) => (
                    <Comment key={index} index={index} commentarie={commentarie} deleteCommentarie={deleteCommentarie} session={session} />
                ))}
            </div>

        </div>
    );
}

export default Comments;
