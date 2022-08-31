import React from "react";

import { Heading } from "@chakra-ui/react"

const LandingPage = () => {
    return (
        <div className="container-lg ">

            <div className="row">
                <div className="col-12 col-sm-6 m-auto">
                    <Heading as='h1' textAlign='center' fontSize='8xl'>
                        QWEECK
                    </Heading>
                    <Heading as='h1' textAlign='center' fontSize='lg'>
                        Bebas Cerita ke Siapa Aja, Apa aja, Kapan aja
                    </Heading>
                </div>
                <div className="col-12 col-sm-6">
                    <img className=" m-0  "
                        src={require('../assets/images/logo.png')}
                        width='100%' alt="content" />
                </div>
            </div>
        </div>
    )
}
export default LandingPage;