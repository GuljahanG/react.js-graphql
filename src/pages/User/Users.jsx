import React from 'react'
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import GET_USERS from './UserQuery';
import {Link} from "react-router-dom";

function Users() {
    const [skip, setSkip] = useState(false);
    const { loading, error, data } = useQuery(GET_USERS);
   
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
               {data.users.data.map((user) => (
                <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}'s Page</Link>
                </li>
            ))} 
            </ul>
        </div>
    )
}

export default Users