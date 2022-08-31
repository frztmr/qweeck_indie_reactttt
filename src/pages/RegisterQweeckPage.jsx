// const dotenv = require('dotenv');
// dotenv.config();
import React from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";

import Axios from "axios";
import { API_URL } from "../helper";
import { useNavigate } from "react-router-dom";
// import SimpleReactValidator from 'simple-react-validator'

const RegisterQweeckPage = (props) => {

    const toast = useToast();
    const navigate = useNavigate()
    const huruf = /[a-zA-Z]/;
    const angka = /[0-9]/;

    const [username, handleUsername] = React.useState('');
    const [email, handleEmail] = React.useState('');
    const [password1, handlePassword1] = React.useState('');
    const [password, handlePassword2] = React.useState('');
    // const [confirmAgree, handleAgree] = React.useState('');
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

    const handleSubmit = () => {

        const userData = {
            username,
            email,
            password1,
            password
        }
        console.log(userData)

        if (password1 != password) {
            toast({
                title: "Konfirmasi password tidak sesuai",
                description: `cek kembali password anda `,
                status: "error",
                duration: 2000, //in second
                isClosable: true
            })
        } else if (password.length < 8) {
            toast({
                title: "Password",
                description: ` kurang dari 8 karakter `,
                status: "error",
                duration: 2000, //in second
                isClosable: true
            })
            // }
            // else if(password2){

        } else if (username.includes(" ")) {
            toast({
                title: "Username",
                description: `tidak boleh ada spasi `,
                status: "error",
                duration: 2000, //in second
                isClosable: true
            })
        } else if (!email.includes("@") || !email.includes(".")) {
            toast({
                title: "Email tidak benar",
                description: `cek email yang anda masukkan `,
                status: "error",
                duration: 2000, //in second
                isClosable: true
            })
        } else if (!huruf.test(password)) {
            toast({
                title: "Password belum mengandung huruf!",
                description: `berisi huruf, angka, huruf besar, dan huruf kecil `,
                status: "error",
                duration: 2000, //in second
                isClosable: true
            })
        } else if (!angka.test(password)) {
            toast({
                title: "Password belum mengandung angka!",
                description: `berisi huruf, angka, huruf besar, dan huruf kecil `,
                status: "error",
                duration: 2000, //in second
                isClosable: true
            })
        } else {
            Axios.post(API_URL + "/auth/check", {
                username,
            }).then((results) => {
                console.log("res.data", results.data);
                if (!results.data.length == 0) {
                    //loading gagal karena gk ada data yg ketemu
                    toast({
                        title: "Username",
                        description: `tidak tersedia `,
                        status: "error",
                        duration: 2000, //in second
                        isClosable: true
                    })
                } else {
                    Axios.post(API_URL + "/auth/register", {
                        email,
                        username,
                        password
                    }).then((res) => {
                        console.log(res.data);
                        if (res.data.success) {
                            handleUsername('')
                            handleEmail('')
                            handlePassword1('')
                            handlePassword2('')
                            navigate('/home');
                            toast({
                                title: "Hore!",
                                description: `Pendaftaran berhasil!`,
                                status: "success",
                                duration: 3000,
                                isClosable: true
                            })
                        } 
                    }).catch((err) => {
                        console.log(err.response.data);
                        toast({
                            title: "Pendaftaran Gagal",
                            description: `Error 500 `,
                            status: "error",
                            duration: 2000, //in second
                            isClosable: true
                        })
                    })
                    //navigate('/homepage')
                }
            }).catch((error) => {
                console.log(error);
            })

        }


        // }

    }

    return (
        <div className="container ">
            <div className="card mx-1 my-3 shadow-sm p-3 mb-5 bg-white rounded">
                <div className="card-header bg-warning">
                    <strong>
                        Daftar Sekarang!

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
                                            (e) => handleUsername(e.target.value,
                                                console.log(e.target.value))
                                        }
                                    />

                                </div>

                                <div id="emailHelp" className='form-text'>
                                    Buat username yang unik
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label for="inputEmail"
                                    className='col-12 col-sm-12 form-label'>
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className=" form-control col-12 col-sm-12"
                                    id="inputEmail"
                                    aria-describedby="emailehelp"
                                    placeholder="manusia@mail.com"
                                    onChange={
                                        (e) => handleEmail(e.target.value,
                                            console.log(e.target.value))
                                    }
                                />

                                <div id="emailHelp" className='form-text col-12 col-sm-12'>
                                    <p>
                                        Tulis alamat email yang valid
                                    </p>
                                    <p>
                                        Pada laman selanjutnya
                                        Anda akan diminta memvalidasinya
                                    </p>
                                </div>
                            </div>


                            <div class="row mb-3">
                                <label for="inputPassword3"
                                    class="col-12 col-sm-12 col-form-label"
                                >
                                    Password
                                </label>

                                <div class="col-12 col-sm-12">
                                    <input
                                        type={visible}
                                        className="form-control"
                                        id="inputPassword3"
                                        placeholder="tulis passwordmu di sini"
                                        onChange={
                                            (e) => handlePassword1(e.target.value,
                                                console.log(e.target.value))
                                        }
                                    />
                                    <div id="emailHelp" className='form-text'>
                                        <p>terdiri dari 8 karakter</p>
                                        <p>berisi huruf, angka, huruf besar, dan huruf kecil</p>
                                    </div>

                                    <label for="inputPassword3"
                                        class="col-12 col-sm-12 col-form-label"
                                    >
                                        Tulis Ulang Password
                                    </label>

                                    <input
                                        type={visible}
                                        className="form-control"
                                        id="inputPassword3"
                                        placeholder="tulis kembali passwordmu di sini"
                                        onChange={
                                            (e) => handlePassword2(e.target.value,
                                                console.log(e.target.value))
                                        }
                                    />
                                </div>
                            </div>

                            <div className="col
                                btn btn-primary"
                                onClick={onVisibility}>
                                {
                                    visible == "password" ?
                                        <p>Tampilkan Password</p>
                                        : <p>Sembunyikan Password</p>
                                }

                            </div>

                        </form>

                        <div class="col-12">
                            <div className="row">
                                <p className="col-sm-11 
                                            form-check-label 
                                            text-muted 
                                            justify-content-start"
                                >
                                    Dengan membuat akun,
                                    Anda  setuju pada
                                    regulasi dan ketentuan
                                    yang berlaku.
                                </p>
                            </div>

                        </div>

                        <div class="col-12">
                            <button class="btn btn-warning"
                                type="button"
                                onClick={handleSubmit}
                            >
                                <strong>
                                    Buat Akun
                                </strong>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default RegisterQweeckPage; 