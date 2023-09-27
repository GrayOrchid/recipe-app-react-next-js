import React from 'react';

const AddCommentarie = ({ commentarie, setCommentarie, postCommentarie }) => {
    return (
        <form className="recipe-page__add-commentarie-form" onSubmit={postCommentarie}>
            <textarea className='recipe-page__add-commentarie-form-textarea' type="text" required value={commentarie} onChange={(e) => setCommentarie(e.target.value)} />
            <button className='recipe-page__add-commentarie-form-button'>Add Commentarie</button>
        </form>
    );
}

export default AddCommentarie;
