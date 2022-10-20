import { useSelector } from "react-redux";

import Post from "./Post/Post";
import SkeletonPost from "../SkeletonPost";

export default function Posts({ setCurrentId, dark }){
    const posts = useSelector((state) => state.posts);

    /* console.log(`logged posts from Posts.jsx`);
    console.log(posts) */

    if (!posts.length){
        return(
            <div className="bg-slate-100 w-full border-r border-slate-400 flex flex-wrap justify-around" >
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
                {/* <span className="material-icons-outlined text-6xl animate-spin text-slate-600">change_circle</span> */}
            </div>   
        );
    }else{
        return(
            <div className={` w-full border-r border-slate-400 dark:border-slate-600 flex flex-wrap justify-around ${ dark === true ? 'dark--post--feed' : 'post--feed' }`}>
                {posts.map((post) => {
                    return(
                        <div key={post._id} className="col-span-12 row-span-2 min-w-[280px] sm:col-span-6 sm:row-span-1 mx-2 my-4" >
                            <Post post={post} setCurrentId={setCurrentId} />
                        </div>
                    );
                })}   
            </div>
        )
    }
}