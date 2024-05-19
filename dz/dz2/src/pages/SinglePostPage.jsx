import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const SinglePostPage = () => {
    const [post, setPost ] =useState({})
    const [comments,setComments]=useState([])
    const { postId}=useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPost = async() => {
            const response = await axios.get(`https://dummyjson.com/posts/${postId}`)
            setPost(response.data)
            console.log(response.data)

            const responseTwo = await axios.get(`https://dummyjson.com/posts/${postId}/comments`)
            setComments(responseTwo.data.comments)

        }

        fetchPost()
    }, [postId]);
    return (
        <div>
            <h3>{post.title}</h3>
            <h4>комментарии</h4>
            {
                comments.map(comment => <p key={comment.id}>{comment.body}</p>)
            }
            <button onClick={()=>navigate(-1)}>назад</button>
        </div>
    );
};

export default SinglePostPage;