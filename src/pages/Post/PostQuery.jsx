import React from 'react'
import { gql } from '@apollo/client';

const GET_POSTS = gql`
query posts {
    posts(first:2, page:1){
        data{
            id,
            title
       }
    }   
}
`;

export default GET_POSTS;