import React from "react";
import {
    Text, Avatar, AvatarBadge, Spinner, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Badge
} from '@chakra-ui/react'
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHeart } from 'react-icons/ai'
import { BiCommentAdd } from 'react-icons/bi'
import { Navigate, useNavigate } from "react-router-dom"
import Axios from 'axios'
import { API_URL } from "../helper";

const HomePage = () => {

    const [data, setData] = React.useState([]);
    // const [img, setImg] = React.useState('');
     const [username, setName] = React.useState('');
     const [text, setText] = React.useState('')

    const navigate = useNavigate();
    // let username = localStorage.getItem('userLogStore')

    const getData = () => {
        Axios.get(API_URL + "/auth/getpost")
            .then((res) => {
                setData(res.data);
                console.log("axios", res.data)
            }).catch((err) => {
                console.log("error",err)
            })
    }

    React.useEffect(() => {
        getData()
    }, [])

    const printData = () => {
        return data.map((val, idx) => {
            console.log("idx", idx)
            return (
                <div className="gap-3">
                    <div
                        className=" btn card-header d-flex 
                        align-items-start bd-highlight mb-2"
                        onClick={() => navigate('/profile')}
                    >
                        {val.username}
                    </div>
                    <div className="card-body d-flex  bd-highlight mb-2">
                        <div className="row">
                            <div className="col col-sm-2 justify-content-start mb-2">
                                <Avatar className="btn"
                                    onClick={() => navigate('/profile')} name={val.username} size='xl'>
                                    <AvatarBadge boxSize='em' bg='green.500' />
                                </Avatar>
                            </div>
                            <div className="col-12 col-sm-10">
                                <p class="card-text text-start justify-content-between">
                                    {val.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    
            )
        })
    }

    return (
        <div className="container">
            <div class="card gap-3 mb-5 ">
                {printData()}
            </div>
        </div >


    )
}


export default HomePage; 