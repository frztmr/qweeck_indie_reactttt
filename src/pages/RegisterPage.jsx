import React from "react";
import { useNavigate } from "react-router-dom"
const RegisterPage = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="card my-2 mx-0 ">
                <div className="row d-flex justify-content-center bd-highlight mb-2 py-4 ">
                    <div className="col-5 py-1 bd-highlight">
                        <button className="btn btn-warning" onClick={() => navigate('/register/native')}>
                            Buat akun
                        </button>
                    </div>
                    <div className="col-2 p-3 bd-highlight">
                        <strong>
                            ATAU
                        </strong>
                    </div>
                    <div className="col-5 py-1 bd-highlight">
                        <button className="btn btn-outline-primary"
                            onClick={() => navigate('/register/google')}>
                            Dengan google
                        </button>
                    </div>
                </div>
            </div>
            <div className=" justify-content-center bd-highlight mb-2 px-5 py-2">
                <div className=" ">
                    <strong>
                        Sudah punya akun?
                    </strong>
                </div>
                <div className="row py-2">
                    <button className="btn btn-warning" onClick={() => navigate('/login')}>
                        Masuk!
                    </button>
                </div>
            </div>


        </div>
    )
}

export default RegisterPage;