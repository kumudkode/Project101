import { useState } from "react";
function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    let [click, setClick] = useState(0);
    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClick(click+1)
    };
    let likeStyle = { color:"red"}
    return(
        <>
        <p style={{fontSize: "56px"}} >Like Button yayayayayay</p>
        <p>Click = {click}</p>
        <button onClick={toggleLike} style={{fontSize: "56px"}} >
            {isLiked ? (
                 <i className="fa-solid fa-heart" style={likeStyle}></i>
            ) : (
               <i className="fa-regular fa-heart"></i>
            )}
        </button>
       
        </>
    )
}
export default LikeButton