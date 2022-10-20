import { useSelector } from "react-redux";

import Post from "./Post/Post";
import SkeletonPost from "../SkeletonPost";
import dummies from "../../dump/dummies"


export default function Posts({ setCurrentId, dark }){
    const posts = useSelector((state) => state.posts);

    const dummy = {
        _id: 1,
        creator: "Bob Haze",
        title: "Bob's Couchie",
        message: "Bob's Couchie's a damn freak! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "selectedFile": "https://picsum.photos/seed/picsum/1000/600",
        tags: [
            "shiity",
            "goofy ass",
            "tag1",
            "tag2",
            "tag3",
            "tag4",
            "tag5",
            "tag6",
            "tag7",
            "tag8",

            ],
        likeCount: 9,
        createdAt: {
            "$date": "2022-10-16T18:38:16.100Z"
            },
    }

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