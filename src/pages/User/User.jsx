import React from 'react'
import {useParams} from 'react-router-dom'
import GET_USERS, {GET_USER} from './UserQuery';
import { useQuery } from '@apollo/client';
import {  gql } from '@apollo/client';

function User() {
   const {id} = useParams();

   const { loading, error, data } = useQuery(GET_USER, {
    variables: {
        id: id
      }
   });
   
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error : {error.message}</p>;
   
    return (
        <div>
         {data.userById.name}
        </div>
    )
}

export default User
