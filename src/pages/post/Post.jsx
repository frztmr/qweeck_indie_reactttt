import React from "react";
import {
    Text,
    Button, Image, useToast
} from '@chakra-ui/react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../helper';

const Post = () => {

    const toast = useToast();
    const navigate = useNavigate();
    const [data, setData] = React.useState([]);
    
    const getData = () => {
        Axios.get(API_URL + "/posts")
            .then((res) => {
                setData(res.data);
            }).catch((err) => {
                console.log(err)
            })
    }

    React.useEffect(() => {
        getData()
    }, [])

    
    return(
        <div>
            Post
        </div>
    )
}
  
export default Post;