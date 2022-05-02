import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchPost } from "../../redux";
import { RootState } from "../../redux/store";
import { Post } from "../posts/post";
import  './post.css';
import {TailSpin} from "react-loader-spinner"
import  {useNavigate} from "react-router-dom"
import {PostData} from "../../types/types"

const PostList = () =>{
    const dispatch = useDispatch();
  
    useEffect(()=>{

      dispatch(fetchPost())
    },[dispatch])

   const navigate = useNavigate();

   //selecting post data from redux store
    const postData: PostData[] = useSelector((state: RootState) => state.post.data);

    //selecting loading status from redux store
    const loading = useSelector((state:RootState) => state.post.loading);

  //selecting user id  from redux store
    const id = useSelector((state:RootState) => state.user.id);

      //selecting user  name  from redux store
    const username  = useSelector((state:RootState) => state.user.name);

      
    //filtering post data based on the user id
    const filteredPost = postData.filter(post => post.userId === id)

    

    // go to previous page
     const previousPage = () =>{
         navigate(-1)
     }

    return (
        <section className="">
            <p onClick={previousPage}>Back to HomePage</p>
            <h3>Posts of {username}</h3>
        <article className="details">
            {loading && <TailSpin height={100} width = {100} color ="purple" ariaLabel="loading" />}
            {filteredPost.map(post => <Post  key={post.id}  title = {post.title} body ={post.body}/>)}
        </article>
        </section>
    );
}

export default PostList;