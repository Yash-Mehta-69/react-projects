import React from 'react'
import { useContext } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { PostList } from '../store/post-list-store';

const Post = ({post}) => {

  console.log(post);

  const {deletePost} = useContext(PostList)
  return (
    <div className="card post-card" style={{width : "30rem"}}>
        <div className="card-body">
            <h5 className="card-title">{post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
            onClick={ () => {deletePost(post.id)}}>
            <MdDeleteForever/>
            </span>
            </h5>

            <p className="card-text">{post.body}</p>
            {post.tags.map((tagname) => (<span key={tagname} className="badge text-bg-primary hashtag">{tagname}</span>))}

            <div className="alert alert-dark reactions" role="alert">
              This Pas has been reacted by {post.reaction} people.
            </div>
        </div>
    </div>
  )
}

export default Post


