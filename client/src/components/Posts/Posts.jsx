import { useSelector } from "react-redux";
import { CircleDash } from '@carbon/icons-react';

import Post from "./Post/Post";

export default function Posts(){
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return(
        !posts.length ? 
        <div className="w-full h-full flex justify-center items-center" >
            <CircleDash size={24} />



        </div> :
        <div>


        </div>
        
    );
}