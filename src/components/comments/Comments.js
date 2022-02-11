import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCommentsAll} from "../../store";

const Comments = () => {
    const {comments} = useSelector( state => state[`commentsReducer`]);
    console.log(comments)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommentsAll({comments}))
    }, [])
    return (

        <div style={{display:'flex', width:'99%', flexWrap:'wrap'}}>
      {
                comments.map(comment => <div key={comment.id}
                    style={{width:'16%', border:'2px solid red', margin: '10px', padding: '10px', background: 'pink'}}>
                    <h5>postId: {comment.postId}</h5>
                    <h5> id: {comment.id} </h5>
                    <h5>name: {comment.name} </h5>
                    <h5>email: {comment.email} </h5>
                    <h5>body: {comment.body} </h5>
               </div>)
            }
        </div>
    );
};

export {Comments};