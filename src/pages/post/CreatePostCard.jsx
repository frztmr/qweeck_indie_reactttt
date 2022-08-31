import React from "react";
import { MdAddPhotoAlternate } from 'react-icons/md'
import Axios from "axios";
import { API_URL } from "../../helper";
import { Toast, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const CreatePostCard = () => {


    // const handleChange = (event) => setValue(event.target.value)
    const [text, handleInputText] = React.useState('')
    const [time, handleDate] = React.useState(0)
    const toast = useToast()
    const navigate = useNavigate();

    // const time = getTime
    // const getTime = new Date().getTime()

    // console.log(time);
    // 

    const handlePost = () => {

        let username = localStorage.getItem('userLogStore');
        let imgRef = "yeye";

        const userData = {
            username,
            time,
            text,
            imgRef
        }
        console.log('hasil dari create post', userData)

        Axios.post(API_URL + "/auth/post", {
            username,
            time,
            text,
            imgRef
        }).then((res) => {
            console.log("res.data", res.data);
            if (res.data.success) {
                handleInputText('')
                navigate('/home');
                toast({
                    title: "Hore!",
                    description: `berhasil posting!`,
                    status: "success",
                    duration: 3000,
                    isClosable: true
                })
            }
        }).catch((err) => {
            console.log("ERRROR MESSAGE", err.data);
            toast({
                title: "Posting gagal Gagal",
                description: `Error 500 `,
                status: "error",
                duration: 2000, //in second
                isClosable: true
            })
        })

    }
    return (
        <div className="container">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-warning">
                        <h5 className="modal-title "
                            id="modalBasicLabel">Buat Postingan</h5>
                        <button type="button"
                            className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="form-floating p-2">
                        <textarea className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            onChange={
                                (e) => handleInputText(e.target.value,
                                    console.log(e.target.value))
                            }
                        >
                        </textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                            className="btn px-2 btn-warning">
                            < MdAddPhotoAlternate size={23} />
                        </button>
                        <button type="button"
                            className="btn btn-warning"
                            onClick={() => handlePost()}>
                            Buat Post!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePostCard;

