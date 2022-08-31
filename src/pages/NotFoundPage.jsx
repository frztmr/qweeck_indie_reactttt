import React from "react";
import { Text } from '@chakra-ui/react'

const NotFoundPage = (props) => {
    return (
        <div className="container">
            <div className="card">
                <Text textAlign='center' fontSize='6x2'>
                    404 NOT FOUND
                </Text>
                <Text textAlign='center' fontSize='6x1'>
                    Halaman yang kamu akses tidak tersedia
                </Text>

            </div>
        </div>
    )
}

export default NotFoundPage;