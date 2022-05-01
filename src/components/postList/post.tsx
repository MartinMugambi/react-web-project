import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchPost } from "../../redux";
import { RootState } from "../../redux/store";
import { Post } from "../posts/post";
import  './post.css';
import {TailSpin} from "react-loader-spinner"
interface PostData{
    userId: number
    id:number
    title: string
    body: string
}

const PostList = () =>{
    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(fetchPost())
    },[dispatch])

    const postData: PostData[] = useSelector((state: RootState) => state.post.data);
    const loading = useSelector((state:RootState) => state.post.loading);
    const id = useSelector((state:RootState) => state.user.id);
    const username  = useSelector((state:RootState) => state.user.name);

      
    const filteredPost = postData.filter(post => post.userId === id)

    
    return (
        <section className="">
            <p>Back to HomePage</p>
            <h3>Posts of {username}</h3>
        <article className="details">
            {loading && <TailSpin height={100} width = {100} color ="purple" ariaLabel="loading" />}
            {filteredPost.map(post => <Post  key={post.id}  title = {post.title} body ={post.body}/>)}
        </article>
        </section>
    );
}

export default PostList;