const Post = ({post}) => {
    const  {id, userId, title, body} = post;

    return (
        <div style={{background: 'silver'}}>
            <h4> userId:  {userId} </h4>
            <h4> id: {id} </h4>
            <h4> title: {title} </h4>
            <h4> body:{body} <hr></hr> </h4>
        </div>
    );
};

export default Post;