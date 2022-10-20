import moment from 'moment';
import {useDispatch} from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

export default function Post({ post, setCurrentId }){
    const dispatch = useDispatch();

    return(
        <div key={post._id} className="w-[300px] h-[400px] sm:w-[280px] sm:h-[400px] md:w-[400px] md:h-[480px] lg:w-[320px] lg:h-[420px] lg xl:h-[480px] xl:w-[410px] border border-slate-200 dark:border-slate-600 flex flex-col bg-white dark:bg-gray-800 rounded-xl relative drop-shadow-md transition-all ">
            <img className="h-[240px] sm:h-[200px] md:h-[280px] lg:h-[240px] xl:h-[280px] rounded-t-xl dark:border-b dark:border-slate-600" src={post.selectedFile}></img>
            {/* darker overlay */}
            <div className="h-[240px] sm:h-[200px] md:h-[280px] lg:h-[240px] xl:h-[280px] absolute top-0 left-0 w-full px-4 pt-4  rounded-t-xl bg-black/25 flex justify-between">
                <div className="text-left " >
                    <h2 className="text-white text-2xl font-medium" >{post.creator}</h2>
                    <h5 className="text-white" >{moment(post.createdAt).fromNow()}</h5>
                </div>
                <span 
                    className="material-icons-outlined text-3xl text-white hover:cursor-pointer" 
                    alt="Edit post"
                    onClick={() => {
                        console.log(post._id)
                        setCurrentId(post._id);
                    }} 
                >
                    more_horiz
                </span>
            </div>
            <div className="bg-white min-h-24 pb-4 dark:bg-gray-800">
                {/* tags */}
                <div className="tags flex flex-wrap p-2" >
                    {post.tags.map((tag) => {
                        return(
                            <h6 key={tag} className="rounded-full text-[10px] bg-lime-200 text-lime-700 dark:bg-pink-500 dark:text-pink-900 m-1 px-1 font-bold " >#{tag.trim()}</h6>
                        );
                    })}
                </div>
                {/* title and message */}
                <h2 className="text-2xl font-medium text-start py-1 pl-4 dark:text-slate-200 " >{post.title}</h2>
                <p className="text-sm text-justify px-4 line-clamp-2 md:line-clamp-3 dark:text-slate-300" >{post.message}</p>
            </div>
            {/* like button */}
            <div onClick={() => dispatch(likePost(post._id))} className="flex absolute bottom-2 left-2 px-2 items-center rounded-full text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-700  hover:cursor-pointer transition-all" >
                <span className="material-icons-round text-[16px] hover:cursor-pointer">thumb_up</span>
                <h6 className="mr-1 ml-2 font-bold" >{post.likeCount}</h6>
                <h6 className="font-bold" >LIKES</h6>
            </div>
            {/* delete button */}
            <div onClick={() => dispatch(deletePost(post._id))} className="flex absolute bottom-2 right-2 px-2 items-center rounded-full text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-700 hover:cursor-pointer transition-all" >
                <span className="material-icons-round text-[16px] hover:cursor-pointer">delete</span>
                <h6 className="font-bold" >DELETE</h6>
            </div>
            
        </div>
    )
    // just for the commit
}

