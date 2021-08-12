import {IMAGES} from "./Utils";
import Screen from "./Screen";
import {useEffect, useState} from "react";

const Gallery = () => {

    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setActiveImage((activeImage + 1) % (IMAGES.length))
        }, 4500);
        return () => {
            clearInterval(t);
        }
    })

    return <Screen { ...IMAGES[activeImage] }/>
}

export default Gallery;