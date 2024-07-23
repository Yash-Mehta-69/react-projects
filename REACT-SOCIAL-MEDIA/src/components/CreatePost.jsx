import React from 'react'
import { useRef,useContext } from 'react';
import { PostList } from '../store/post-list-store';

const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const posttitle_element = useRef();
  const postbody_element = useRef();
  const postreactions_element = useRef();
  const postuserId_element = useRef();
  const posthashtags_element = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const posttitle = posttitle_element.current.value;
    const postbody = postbody_element.current.value;
    const postreactions = postreactions_element.current.value;
    const postuserId = postuserId_element.current.value;
    const posthashtags = posthashtags_element.current.value.split(' ');

    posttitle_element.current.value = "";
    postbody_element.current.value = "";
    postreactions_element.current.value = "";
    postuserId_element.current.value = "";
    posthashtags_element.current.value = "";

    addPost(posttitle, postbody, postreactions, postuserId, posthashtags);


  }


  return (
    <form className='create-post' onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="title" ref={posttitle_element} placeholder='How are you feeling today...'/>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Body</label>
        <textarea rows={4} type="text" className="form-control" id="body" ref={postbody_element} placeholder='Tell us more about it...'/>
      </div>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User Id</label>
        <input type="text" className="form-control" id="userId" ref={postuserId_element} placeholder='Your user Id...'/>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input type="text" className="form-control" id="reactions"  ref={postreactions_element} placeholder='Enter the no of reactions...'/>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Hashtags</label>
        <input type="text" className="form-control" id="tags" ref={posthashtags_element} placeholder='Please enter yoy tags using space...'/>
      </div>


      <button type="submit" className="btn btn-primary">Post</button>

      
</form>
  )
}

export default CreatePost