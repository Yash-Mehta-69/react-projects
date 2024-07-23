import { createContext, useReducer } from "react";



export const PostList = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {},
    setInitialPosts: () => {}
});

const postListReducer = (currentpostList,action) => {

    let newPostList = currentpostList
    if (action.type === "ADD_POST"){
        newPostList =  [action.payload, ...currentpostList]
    }

    else if (action.type === "DELETE_POST"){
        newPostList =  currentpostList.filter(post => post.id!== action.payload.id)
    }


    else if (action.type === "SET_INITIAL_POSTS"){
        newPostList =  action.payload.posts
    }

    return newPostList
}

const PostListProvider = ({children}) => {

    const [postList,dispacthpostList] = useReducer(postListReducer, []);

    const addPost = (posttitle, postbody, postreactions, postuserId, posthashtags) => {
        dispacthpostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: posttitle,
                body: postbody,
                reaction : postreactions,
                userId : postuserId,
                tags : posthashtags
            
            }})
    }


    const setInitialPosts = (posts) => {
        dispacthpostList({
            type: "SET_INITIAL_POSTS",
            payload:{
                posts
            }})
    }



    const deletePost = (id) => {
        dispacthpostList({
            type: 'DELETE_POST',
            payload: {
                id: id
            }
        })

    }
    return <PostList.Provider value={{
        postList: postList,
        addPost : addPost,
        deletePost : deletePost,
        setInitialPosts : setInitialPosts
    }}>
        {children}
    </PostList.Provider>
}





export default PostListProvider;