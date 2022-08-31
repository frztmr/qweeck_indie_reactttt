import React from "react";
import {
    Text, Avatar, AvatarBadge, 
} from '@chakra-ui/react'
import { Navigate, useNavigate } from "react-router-dom"
import {
    AiOutlineUserAdd,
    AiOutlineMessage
} from 'react-icons/ai'

const ProfilePage = () => {

    const username = localStorage.getItem('userLogStore')
    const navigate = useNavigate()

    return (
        <div className="container">
            <div className="card m-3">
                <div className="bg-warning card-header d-flex align-items-start bd-highlight mb-2">
                    <strong><h3>{username}</h3></strong>
                </div>
                <div className="card-body d-flex  bd-highlight mb-2">
                    <div className="row">
                        <div className="col col-lg-2 col-12 justify-content-start">
                            <Avatar className="btn" name={username} size='xl'>
                                <AvatarBadge boxSize='em' bg='green.500' />
                            </Avatar>
                        </div>
                        <div className="col col-lg-12 col-12 justify-content-start">
                            <p class="card-text text-break justify-content-start">
                                FOLLOWING
                            </p>
                            <p>
                                FOLLOWERS
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-lg-12 col-12">
                            <p class="card-text text-break justify-content-start">
                                makan dan tidur
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem consequuntur, praesentium officia mollitia totam sit molestias esse, incidunt at odit accusamus aliquid quasi aut, iusto voluptas quaerat numquam neque.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-warning card-footer text-muted">
                    <div class="d-flex justify-content-start bd-highlight mb-2">
                        <button className="btn p-2 bd-highlight"> < AiOutlineUserAdd size={29} /> </button>
                        <button className="btn p-2 bd-highlight"> < AiOutlineMessage size={26} /> </button>
                    </div>
                    <span className="position-absolute bottom-0 end-0 p-3"><button className="btn p-2 bd-highlight" onClick={()=>navigate('/profile/setting')}>Pengaturan</button></span>
                </div>
            </div>
        </div>

    )
}

export default ProfilePage;