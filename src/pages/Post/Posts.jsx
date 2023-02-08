import React from 'react'
import GET_POSTS from './PostQuery';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

function Posts() {
    const [skip, setSkip] = useState(false);
    const { loading, error, data } = useQuery(GET_POSTS);
   
   useEffect(() => {
 
    if (!loading && !!data) {
        setSkip(true)
      }
   }, [data, loading]);
   
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error : {error.message}</p>;
   
    return (
        <div>
            <ul>
               {data.posts.data.map((post) => (
                <li key={post.id}>
                    <p>{post.title}'s Page</p>
                </li>
            ))} 
            </ul>
        </div>
    )
}

export default Posts