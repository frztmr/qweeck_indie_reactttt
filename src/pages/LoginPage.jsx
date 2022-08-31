import React from "react";
import { useNavigate } from "react-router-dom";
import { loginAction, loginMiddleware } from "../action/userAction"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Axios from "axios"
import { API_URL } from "../helper"



// import isEmail from "validator/lib"
// import isEmpty from "validator/lib"

import { useToast } from "@chakra-ui/react";
const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toast = useToast();

    const [username, handleUsername] = React.useState('');
    const [password, handlePassword] = React.useState('');
    const [visible, setVisible] = React.useState('password');
    // const validator = validator()

    //mask and unmask password
    const onVisibility = () => {
        if (visible == "password") {
            setVisible("text")
        } else if (visible == "text") {
            setVisible("password")
        }
    }
    // const handleLogin = async () => {
    //     let res = await dispatch(loginMiddleware(username, password));
    //     if (res.success) {
    //         navigate('/', { replace: true });
    //     }
    // }

    const handleLogin = () => {
        
        
        const userData = {
            //email,
            username,
            password
        }
       // console.log("userData", userData)

        

        //emailcheck
        if (username == "" || password == "") {
            toast({
                title: "Ooopsie!",
                description: `password atau username belum diisi!`,
                status: "error",
                duration: 2000, //in second
                isClosable: true
            })

        } else {

            Axios.post(API_URL + "/auth/login", {
                username,
                password
            }).then((results) => {
                console.log("res.data dari API SERVER", results.data);
                if (results.data.length == 0) {
                    //loading gagal karena gk ada data yg ketemu
                    toast({
                        title: "Ooopsie!",
                        description: `username atau password salah! `,
                        status: "error",
                        duration: 2000, //in second
                        isClosable: true
                    })
                } else {
                    //login success. data ditemukan :)
                    
                    localStorage.setItem('userLogStore', results.data[0].username)

                    dispatch(loginAction(results.data[0]));
                    navigate('/home', { replace: true });
                    toast({
                        title: "yeay!",
                        description: `login berhasil! `,
                        status: "success",
                        duration: 2000, //in second
                        isClosable: true
                    })
                }
                console.log('data di username dari LoginPage', username)
                console.log('data di localStorange dari LoginPage', localStorage)

            }).catch((error) => {
                console.log("catch error", error);
            })
        }

    }



    return (
        <div className="container ">
            <div className="card shadow-sm p-2 m-2 bg-white rounded">
                <div className="card-header bg-warning">
                    <strong>
                        Masuk!
                    </strong>
                </div>
                <div className="card-body">

                    <form class="row g-3 needs-validation mx-auto"
                    // novalidate=""
                    >

                        <form>
                            <div className='row mb-3'>
                                <label
                                    className='col form-label' >
                                    Username
                                </label>

                                <div className="col-12 col-sm-12 input-group" >
                                    <span class="input-group-text"
                                        id="inputGroupPrepend" >
                                        @
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="manusia01"
                                        id="username"
                                        aria-describedby="emailehelp"
                                        onChange={
                                            (e) => handleUsername(e.target.value
                                                //,
                                                //console.log(e.target.value)
                                            )
                                        }
                                    />

                                </div>
                            </div>


                            <div class="row mb-3">
                                <label for="inputPassword3"
                                    class="col-12 col-sm-12 col-form-label"
                                >
                                    Password
                                </label>

                                <div class="col-12 col-sm-12 input-group">
                                    <input
                                        type={visible}
                                        class="form-control"
                                        id="inputPassword3"
                                        placeholder="tulis passwordmu di sini"
                                        onChange={
                                            (e) => handlePassword(e.target.value
                                                // ,
                                                // console.log(e.target.value)
                                            )
                                        }
                                    />
                                    <span onClick={onVisibility}
                                        className="input-group-text bg-warning border-0"
                                        id="basic-addon2">
                                        {
                                            visible == "password" ?
                                                <AiOutlineEye size={26} />
                                                : <AiOutlineEyeInvisible size={26} />
                                        }
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div class="col-12">
                            <button class="btn btn-warning"
                                type="button"
                                onClick={() => handleLogin()}
                            >
                                Masuk!
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginPage; 