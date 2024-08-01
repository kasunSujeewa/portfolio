'use client'
import {Logo} from '@/app/Interfaces/Logo'
interface Props {
    logo: Logo,
    index: number
}

function ImageLogos(props:Props) {
    const handleDirect = (data: Logo) =>{
        window.open(data.link, '_blank', 'noopener,noreferrer');
    }
    return (
        <img src={props.logo.src} key={props.index} className="size-8 cursor-pointer" onClick={()=>handleDirect(props.logo)} />
    );
}

export default ImageLogos;