import React from "react";
import {
    Text, Avatar, AvatarBadge,
} from '@chakra-ui/react'
import { Navigate, useNavigate } from "react-router-dom"
import {
    AiOutlineUserAdd,
    AiOutlineMessage
} from 'react-icons/ai'
import { MdAddPhotoAlternate } from 'react-icons/md'


const ProfileSettingPage = () => {

    const username = localStorage.getItem('userLogStore')
    const navigate = useNavigate()

    return (
        <div className="container">
            <div className="card m-3">
                <div className="bg-warning card-header d-flex text-center bd-highlight mb-2">
                    <strong><h3>{username}</h3></strong>


                </div>
                <div className="card-body bd-highlight ">
                    <div className="row">
                        <div className="col-sm-2 col-lg-2 col-12 justify-content">
                            <button type="button"
                                className=" text-center btn rounded btn-warning">
                                < MdAddPhotoAlternate size={40} />
                                <p className="lh-1 text-center text-break">Ganti gambar profil</p>
                            </button>
                        </div>
                        <div class="col-sm-10 col-lg-10 col-12 card-text  justify-content-start">
                            <textarea className="form-control"
                                placeholder="tulis status, biografi, atau apapun yang anda suka disini. 'saya manusia, bernafas, dan berbau'"
                                id="floatingTextarea" >
                            </textarea>
                        </div>

                    </div>
                </div>
                <div className="bg-warning card-footer text-muted">
                    <span class="d-flex justify-content-end bd-highlight mb-2">

                        <button type="button"
                            className="btn btn-light">
                            Simpan Ubahan
                        </button>


                    </span>
                </div>
            </div>
        </div>

    )


}

export default ProfileSettingPage;