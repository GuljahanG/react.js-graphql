import React from 'react'
import {  gql } from '@apollo/client';

const GET_USERS = gql`
query users {
    users(first:2, page:1){
        data{
            id,
            name
       }
    }   
}
`;
export const GET_USER = gql`
   query userById($id: ID!){
       userById(id:$id) {
           id,
           name
       }
   }
   `;

export default GET_USERS;
