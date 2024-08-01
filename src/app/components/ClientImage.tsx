'use client'
import Image from "next/image";
import Clients from "./Clients";
function ClientImage() {
    return (
        <>
        {Clients.map((client,index) =>{
                    return(
                        <Image src={client.src} width={100} height={100} alt="" />
                    )
                })
            }
        </>
    );
}

export default ClientImage;