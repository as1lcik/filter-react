import React, { useEffect, useState } from "react";
import {useParams,Link} from 'react-router-dom'
import {IoMdArrowRoundBack} from 'react-icons/io'

 
export default function PostDetail( {posts, setPosts}){
    const params = useParams()
    const [post,setPost] = useState([])

    useEffect(() => setPost(posts.find(post => post.id === +params.id)),[])
    console.log(post);

    return(
        <div className="section" >
            <Link to='/'>
                <IoMdArrowRoundBack size={50} color={'danger'} />
            </Link>
            <br></br>
            <div className="columns ">
                <div className="column is-6 box ">
                    <figure className="image" >
                        <img src={post.thumb} alt="" />
                    </figure>
                    <br />
                  <div className="has-text-centered">
                  <h1 className="title" >{post.title}</h1>
                    <br />
                    <p className="" >{post.author}</p>
                    <br />
                    <p>{post.category}</p>
                      <br />  
                    <p>{post.body}</p>
                    <br />
                    <p>{post.createdAt}</p>
                  </div>
                </div>
            </div>
        </div>
    )
}