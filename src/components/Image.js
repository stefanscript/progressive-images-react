import "./image.css";
import * as React from "react";

const Image = ({alt, thumb, src}) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    return (
        <>
            <img className={"image thumb"}
                 alt={alt}
                 src={thumb}
                 style={{visibility: isLoaded ? "hidden" : "visible"}}
            />
            <img className={"image full"}
                 onLoad={() => setIsLoaded(true)}
                 style={{opacity: isLoaded ? 1 : 0}}
                 alt={alt}
                 src={src} />
        </>
    )
}

export default Image;