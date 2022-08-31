import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineNotification,
    AiOutlineUser
} from 'react-icons/ai'
import { BiMessageSquareAdd } from 'react-icons/bi'

const ControlBar = (props) => {

    const { pathname } = window.location;
    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    });
    console.log('selector global username:', username)

    return (
        <div className="container" >
            <div className="fixed-bottom bd-highlight">
                {
                    username == !true ?
                        null
                        :
                        <div className="btn-group h-2 "
                            role="group"
                            aria-label="Basic outlined button group">

                            <button type="button"
                                className="btn btn-outline-dark  
                                btn-light  d-table-cellbd-highlight"
                                onClick={() => navigate('/home')}>
                                <AiOutlineHome size={30} />
                            </button>
                            <button type="button"
                                className="btn btn-outline-dark btn-light 
                                d-table-cell p-3  bd-highlight">
                                < AiOutlineSearch size={30} />
                            </button>

                            <button type="button"
                                className="btn btn-warning 
                                 btn-outline-dark "
                                onClick={() => navigate('/post/create')}>
                                < BiMessageSquareAdd size={30} />
                            </button>

                            <button type="button"
                                className="btn btn-outline-dark 
                                btn-light  d-table-cell p-3 bd-highlight" >
                                <AiOutlineNotification size={30} />
                            </button>

                            <button type="button"
                                className="btn btn-outline-dark 
                                btn-light d-table-cell p-3 bd-highlight"
                                onClick={() => navigate('/profile')}>
                                <AiOutlineUser size={30} />
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default ControlBar; 