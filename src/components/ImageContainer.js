import React from "react";
import "./image-container.css"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Image from "./Image";

export default function ImageContainer({height, width, src, alt, thumb}) {
    const target = React.useRef();
    const [isVisible, setIsVisible] = React.useState(false);
    const aspectRatio = (height / width) * 100;
    
    useIntersectionObserver({
        target,
        onIntersect: ([{isIntersecting}], observerElement) => {
            if (isIntersecting) {
                setIsVisible(true);
                observerElement.unobserve(target.current);
            }
        }
    });
    
    return (
        <div ref={target}
             className={"image-container"}
             style={{paddingBottom: `${aspectRatio}%`}}
        >{
            isVisible && (<Image thumb={thumb} src={src} alt={alt}/>)
        }</div>
    )
}