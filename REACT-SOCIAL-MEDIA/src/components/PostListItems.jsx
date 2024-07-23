import React, { useContext,useEffect } from 'react'
import Post from './Post'
import {PostList} from '../store/post-list-store'
import Welcomemessage from './Welcomemessage'

const PostListItems = () => {
  const {postList, setInitialPosts} = useContext(PostList)

  useEffect( () => {
  fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data => {
      setInitialPosts(data.posts);
      // console.log(data.posts);
      
    })
    },[]);



  return (
    <>

    {postList.length === 0 && <Welcomemessage/>}

    {postList.map((post) => (
        <Post key={post.id} post={post} />)
    )}
    </>
  )
}

export default PostListItems