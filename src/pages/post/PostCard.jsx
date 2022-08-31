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


const PostCard = () => {

    const navigate = useNavigate();
    let username = localStorage.getItem('userLogStore')



    return <div className="container">
        <div class="card m-3 mb-5">
            <div
                className=" btn card-header d-flex align-items-start bd-highlight mb-2"
                onClick={() => navigate('/profile')}
            >
                {username}
            </div>
            <div className="card-body d-flex  bd-highlight mb-2">
                <div className="row">
                    <div className="col col-sm-2 justify-content-start mb-2">
                        <Avatar className="btn"
                            onClick={() => navigate('/profile')} name={username} size='xl'>
                        <AvatarBadge boxSize='em' bg='green.500' />
                    </Avatar>
                </div>
                <div className="col-12 col-sm-10">
                    <p class="card-text text-start justify-content-between">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem officiis rerum quae autem fugiat qui possimus odio aperiam, nostrum hic voluptas dignissimos adipisci beatae tempora, harum, itaque sapiente aliquam. Ad.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, totam! Voluptate odit a cumque nesciunt possimus saepe voluptates iure exercitationem blanditiis corrupti, reprehenderit itaque veritatis? Dolores expedita veritatis doloribus quia?
                    </p>
                </div>
            </div>
        </div>
        <div className="card-footer text-muted">
            <div class="d-flex justify-content-start bd-highlight mb-2">
                <button className="btn  bd-highlight">
                    <AiOutlineHeart size={26} />
                </button>
                <button className="btn p-2 bd-highlight"> < BiCommentAdd size={26} /> </button>
                <button className="btn p-2 bd-highlight">< AiOutlineShareAlt size={26} /></button>
            </div>
            <span className="position-absolute bottom-0 end-0 p-3">  2 days ago </span>
        </div>
    </div>
    </div >

}

export default PostCard;

